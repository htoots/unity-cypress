describe('Redirection test', () => {
    before(() => {
        cy.visit("/redirect");
    });

    // Test 1: Redirect to the status codes page
    it('can redirect to the status codes page', () => {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes');
    });
    //Test 2: Check if redirected page returns 302
    it('check URL without redirection', () =>
    {
        cy.request({
            url: 'https://the-internet.herokuapp.com/redirect',
            followRedirect: false
        })
            .then((resp) => {
                // redirect status code is 302
                expect(resp.status).to.eq(302)
            })
    });


});