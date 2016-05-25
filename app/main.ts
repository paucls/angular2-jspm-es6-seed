import 'zone.js';
import 'reflect-metadata';
import 'rxjs';
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {bootstrap} from 'angular2/platform/browser';

import {TrNav} from './navbar/navbar.component.ts';
import {TrTodoList} from './todo/todo.component.ts';

@Component({
    selector: 'test-app',
    directives: [TrNav, TrTodoList],
    template: `<tr-nav></tr-nav>
               <br/>
               <tr-todo-list class="todo"></tr-todo-list>`
})
class TestApp {

}

bootstrap(TestApp, [
    HTTP_PROVIDERS,
    MdIconRegistry
]);