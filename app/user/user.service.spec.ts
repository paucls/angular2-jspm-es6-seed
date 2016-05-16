import {UserService} from './user.service';

describe('TestService', () => {

    beforeEach(() => {
        this.userService = new UserService();
    });

    it('should have name property set', () => {
        expect(this.userService.getUsername()).toBe('Injected Service');
    });

});