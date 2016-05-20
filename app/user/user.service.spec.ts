import {UserService} from './user.service';

describe('TestService', () => {

    beforeEach(() => {
        this.userService = new UserService();
    });

    it('should have correct username', () => {
        expect(this.userService.getUsername()).toBe('Test User');
    });

});