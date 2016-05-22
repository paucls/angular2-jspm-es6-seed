import {Component} from 'angular2/core';
import {MdInput} from '@angular2-material/input';
import {MdList} from '@angular2-material/list';
import {MdButton} from '@angular2-material/button';
import {MdCard} from '@angular2-material/card';
import {MdIcon} from '@angular2-material/icon';
import {remove} from 'lodash';

@Component({
    selector: 'tr-todo-list',
    directives: [MdInput, MdList, MdButton, MdCard, MdIcon],
    templateUrl: 'app/todo/todo-list.html',
    styleUrls: ['app/todo/todo.component.css']
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