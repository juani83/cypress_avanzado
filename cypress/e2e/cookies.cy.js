describe('Cookies', () => {
    before(() => {
        cy.clearCookies();
    });

    beforeEach(() => {
        cy.session("login", () => {
            cy.visit("/");
            cy.setCookie("nombre", "Nacho");
        });
    });

    after(() => {
        cy.clearCookie("nombre");    
    });

    it('Obtener cookies', () => {
        cy.getCookies().should("be.empty");
    });

    it.only('Agregar una cookie', () => {
        cy.getCookies().should('have.length', 1);  
    });
    
    it.only('Obtener una cookie en especifico', () => {
        cy.getCookie('nombre').should('have.a.property', 'value', 'Nacho');
    });
});