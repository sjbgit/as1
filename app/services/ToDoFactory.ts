/**
 * Created by sbunke on 6/23/2015.
 */
export class ToDoFactory {
    names: Array<string>;
    constructor() {
        this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    get() {
        return this.names;
    }
    add(value) {
        this.names.push(value);
    }
}
