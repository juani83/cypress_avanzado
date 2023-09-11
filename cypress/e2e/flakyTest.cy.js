describe('Flaky test', function() {
    
    it('Single query command', function() {
        cy.visit('/');
        
        /*
        cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
            .contains('Bulbaaasaur');
        */

        cy.contains('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1', 'Bulbasaaaur');
    });

    it('Alternar comando con aserciones', function() {
        cy.visit('/');
        
        // cy.get('#submit').click();
        // esto va a reintetar el cy.get hasta que la asercion pase
        // cy.get('#submit').should('not.to.be.disabled').click();
        cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
            .should('contain', 'Bulbasaur')
            // Aqui ya tenemos el elemento correcto
            .parent()
                .should('have.class', 'card-header');
    });

});