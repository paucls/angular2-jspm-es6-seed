var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', 'angular2/platform/browser', './navbar/navbar.component.ts', './todo/todo.component.ts', 'zone.js', 'reflect-metadata', 'rxjs'], function (require, exports, core_1, browser_1, navbar_component_ts_1, todo_component_ts_1) {
    "use strict";
    //create a simple angular component
    let TestApp = class TestApp {
    };
    TestApp = __decorate([
        core_1.Component({
            selector: 'test-app',
            directives: [navbar_component_ts_1.TrNav, todo_component_ts_1.TrTodoList],
            template: `<tr-nav></tr-nav>
               <br/>
               <tr-todo-list></tr-todo-list>`
        }), 
        __metadata('design:paramtypes', [])
    ], TestApp);
    //start our app
    browser_1.bootstrap(TestApp);
});
