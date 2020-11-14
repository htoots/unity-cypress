describe('Redirection test', () => {
    before(() => {
        cy.visit("/redirect");
    });

    // Test 1: Redirect to the status codes page
    it('can redirect to the status codes page', () => {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes');
    });



});