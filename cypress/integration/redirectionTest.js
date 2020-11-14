describe('Redirection test', () => {
    before(() => {
        cy.visit("/redirect");
    });

    // Test 1: Redirect to the status codes page
    it('can redirect to the status codes page', () => {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes');
    });
    //Test 2: Check Header
    it('should return header correctly', () =>
    {
        cy.get('h3').should("have.text", "Status Codes");

    });


    //Test 3: Check status 200
    it('should return status 200', () => {
        cy.visit("/redirect");
        cy.contains('200').click().url().should('eq', 'https://the-internet.herokuapp.com/status_codes/200');
    });
    //Test 4: Check status 404
    it('should return status 404', () => {
        cy.visit("/redirect");
        cy.contains('404').click().url().should('eq', 'https://the-internet.herokuapp.com/status_codes/404');
    });

})