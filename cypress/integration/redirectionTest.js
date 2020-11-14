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
    //Test 3: Check status 200
    it('should return status 200', () => {
        cy.contains('200').click().url().should('eq', 'https://the-internet.herokuapp.com/status_codes/200');
    });
    //Test 4: Check status 404
    it('should return status 404', () => {
        //need to revisit the previous page as it is no longer on status codes home page
        cy.visit("/redirect");
        cy.contains('404').click().url().should('eq', 'https://the-internet.herokuapp.com/status_codes/404');
    });

});