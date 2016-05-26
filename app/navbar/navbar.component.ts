import {Component} from 'angular2/core';
import {MdToolbar} from '@angular2-material/toolbar';

import {UserService} from '../user/user.service';

@Component({
    selector: 'tr-nav',
    directives: [MdToolbar],
    providers: [UserService],
    template: `<md-toolbar color="primary">{{username}}</md-toolbar>`
})
export class TrNav {

    username: string;

    constructor(private userService: UserService) {
        this.username = userService.getUsername();
    }
}