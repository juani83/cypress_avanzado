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