describe('Dispositivos moviles', function() {
    const dispositivos = [
        {viewport: 'macbook-15', type: 'desktop'},
        {viewport: 'ipad-2', type: 'mobile'},
        {viewport: [1280, 720], type: 'desktop'},
        {viewport: [375, 667], type: 'mobile'}
    ];

    /*
    it('Usando el viewport', function() {
        cy.viewport(1280, 720);
        cy.visit('/');
        cy.contains('Safari').should('be.visible');
    });

    it('Usando el viewport movil', function() {
        cy.viewport(375, 667);
        cy.visit('/');
        cy.contains('Safari').should('not.be.visible');
    });

    it('Usando el viewport desktop preset 1', function() {
        cy.viewport('macbook-15');
        cy.visit('/');
        cy.contains('Safari').should('be.visible');
    });

    it('Usando el viewport desktop preset 2', function() {
        cy.viewport('iphone-6+');
        cy.visit('/');
        cy.contains('Safari').should('not.be.visible');
    });
    */

    dispositivos.forEach(device => {
        it(`Pruebas con el viewport ${device.viewport}`, function() {
            if(Cypress._.isArray(device.viewport)){
                cy.viewport(device.viewport[0], device.viewport[1]);
            }else{
                cy.viewport(device.viewport);
            };
            cy.visit('/');
            
            if(device.type === 'desktop') {
                cy.contains('Safari').should('be.visible');
            }else{
                cy.contains('Safari').should('not.be.visible');
            }
        });
    });
});