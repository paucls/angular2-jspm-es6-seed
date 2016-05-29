define(["require", "exports", './user.service'], function (require, exports, user_service_1) {
    "use strict";
    describe('TestService', () => {
        beforeEach(() => {
            this.userService = new user_service_1.UserService();
        });
        it('should have correct username', () => {
            expect(this.userService.getUsername()).toBe('Test User');
        });
    });
});
