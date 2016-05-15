import 'zone.js';
import 'reflect-metadata';
import 'rxjs';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {TrNav} from './navbar/navbar.component.ts';

//create a simple angular component
@Component({
    selector: 'test-app',
    directives: [TrNav],
    template: '<tr-nav></tr-nav>'
})
class TestApp {

}

//start our app
bootstrap(TestApp);