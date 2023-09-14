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

    it('login exitoso con cy.env.json', function() {
        loginPage.validateLoginPage();

        cy.log(Cypress.env());

        loginPage.login(Cypress.env('credentials').user, Cypress.env('credentials').password);

        loginPage.validateSuccessLogin();
    });
});


describe('Login erroneo con configuracion', {
    env: {
        usuarioErroneo: 'error1',
        passwordErroneo: 'error2'
    }
}, function() {
    beforeEach(() => {
        loginPage.visit();
    });

    it('Login erroneo', function() {
        loginPage.validateLoginPage();

        cy.log(Cypress.env());

        loginPage.login(Cypress.env('usuarioErroneo'), Cypress.env('passwordErroneo'));

        loginPage.validateErrorLogin();
    });
});