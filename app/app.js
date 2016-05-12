import 'zone.js';
import 'reflect-metadata';
import 'rxjs';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

//create a simple angular component
@Component({
	selector: 'test-app',
	template: '<h4>Hello {{name}}</h4>'
})
class TestApp {
	name:string;

	constructor() {
		this.name = 'Angular2';
		setTimeout(() => {
			this.name = 'Angular2!!!'
		}, 1500);
	}
}

//start our app
bootstrap(TestApp);