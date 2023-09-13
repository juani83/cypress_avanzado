import { loginPage } from "../pageObjects/LoginPage";

describe('login con POM', function() {
    
    beforeEach(() => {
        loginPage.visit();
    });
    

    it('login erroneo', function() {
        loginPage.validateLoginPage();

        loginPage.login('lalalala', 'lalala');

        loginPage.validateErrorLogin();
    });
    
    it('login exitoso', function() {
        loginPage.validateLoginPage();

        loginPage.login('username', 'password');

        loginPage.validateSuccessLogin();
    });
});