import 'zone.js';
import 'reflect-metadata';
import 'rxjs';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {TrNav} from './navbar/navbar.component.ts';
import {TrTodoList} from './todo/todo.component.ts';

//create a simple angular component
@Component({
    selector: 'test-app',
    directives: [TrNav, TrTodoList],
    template: `<tr-nav></tr-nav>
               <br/>
               <tr-todo-list></tr-todo-list>`
})
class TestApp {

}

//start our app
bootstrap(TestApp);