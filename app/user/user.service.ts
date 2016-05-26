import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    username: string;

    constructor() {
        this.username = 'Test User';
    }

    getUsername() {
        return this.username;
    }
}