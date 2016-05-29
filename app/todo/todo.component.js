var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/core', '@angular2-material/input', '@angular2-material/list', '@angular2-material/button', 'lodash'], function (require, exports, core_1, input_1, list_1, button_1, lodash_1) {
    "use strict";
    let TrTodoList = class TrTodoList {
        constructor() {
            this.items = [];
            this.items.push({ name: 'do thing 1' });
            this.items.push({ name: 'do thing 2' });
            this.items.push({ name: 'do thing 3' });
        }
        remove(item) {
            lodash_1.remove(this.items, item);
        }
        create(name) {
            this.items.push({ name: name });
        }
    };
    TrTodoList = __decorate([
        core_1.Component({
            selector: 'tr-todo-list',
            directives: [input_1.MdInput, list_1.MdList, button_1.MdButton],
            templateUrl: 'app/todo/todo-list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TrTodoList);
    exports.TrTodoList = TrTodoList;
});
