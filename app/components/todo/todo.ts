import {Component, View, NgFor} from 'angular2/angular2';

import {NamesList} from '../../services/NameList';
import {ToDoFactory} from '../../services/ToDoFactory';

@Component({
    selector: 'component-3',
    appInjector: [ToDoFactory]
})
@View({
    templateUrl: './components/todo/todo.html?v=<%= VERSION %>',
    directives: [NgFor]
})
export class ToDo {
    names: Array<string>;
    list: NamesList;
    todoFactory: ToDoFactory;

    constructor(todo: ToDoFactory) {
        //this.list = list;
        //this.names = list.get();
        this.todoFactory = todo;

        //console.log(this.todoFactory);
    }
    addName(newname) {
        this.list.add(newname.value);
        newname.value = '';
    }

    /*
    post(url: string, message: any): Promise {


        return new Promise(function(resolve, reject) {

            var req = new XMLHttpRequest();
            req.open("POST", url);
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            req.onload = function() {
                if (req.status == 200) {
                    resolve(JSON.parse(req.response));
                } else {
                    reject(Error(JSON.parse(req.response).message));
                }
            };

            req.onerror = function() {
                reject(Error(JSON.parse(req.response).message));
            };

            req.send(JSON.stringify({"message": message}));
        });

    }
    */
}