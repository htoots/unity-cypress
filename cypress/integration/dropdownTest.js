describe('Dropdown test', () => {

    before(() => {
      cy.visit("/dropdown");
    });

    // Test 1: Page loads and contains necessary information (dropdown)
    it('can get the correct page', () => {
      cy.confirmPage('h3', 'Dropdown List');
    });

    // Test 2: Dropdown holds expected information
    it('can get the dropdown and confirm it', () => {
      cy.confirmDropdown();
    });

    // Test 3: Able to click on both dropdown options
    it('can click on the two options', () => {
      cy.get('select[id=dropdown]').select('Option 1').should('have.value', '1');
      cy.get('select[id=dropdown]').select('Option 2').should('have.value', '2');
    });
    
    // Test 4: Unable to click on placeholder option, value from before is retained
    // Cypress does not allow clicking on placeholder option, code checks if value is disabled.
    it('can not click on the disabled option', () => {
      cy.get('select[id=dropdown]').within(() => {
        cy.get('option[disabled=disabled]').contains('Please select an option');
      });
    });
  });