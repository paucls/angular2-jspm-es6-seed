import {Component} from 'angular2/core';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    selector: 'tr-nav',
    directives: [MdToolbar],
    template: `<md-toolbar color="primary">{{username}}</md-toolbar>`
})
export class TrNav {

    username:string;

    constructor() {
        this.username = 'Test User';
    }
}