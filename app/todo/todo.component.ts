import {Component} from 'angular2/core';
import {MdInput} from '@angular2-material/input';
import {MdList} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {remove} from 'lodash';

@Component({
    selector: 'tr-todo-list',
    directives: [MdInput, MdList, MdButton],
    templateUrl: 'app/todo/todo-list.html'
})
export class TrTodoList {

    items:any[];

    constructor() {
        this.items = [];
        this.items.push({name: 'do thing 1'});
        this.items.push({name: 'do thing 2'});
        this.items.push({name: 'do thing 3'});
    }

    remove(item) {
        remove(this.items, item);
    }

    create(name) {
        this.items.push({name: name});
    }
}