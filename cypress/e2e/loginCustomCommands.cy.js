describe('Login con Custom Commands', function() {
    it('login erroneo', function() {
        cy.login('asdsada', 'adsasdsa');
    });

    it('login exitoso', function() {
        cy.login('username', 'password');
    });
});