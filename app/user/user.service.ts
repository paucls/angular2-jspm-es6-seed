import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    username:string;
    
    constructor() {
        this.username = 'Test User SuperDude';
    }

    getUsername() {
        return this.username;
    }
}