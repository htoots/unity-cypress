describe('DropDownTest', () => {

    before(() => {
      cy.visit("/dropdown");
    });

    // Test 1: Page loads and contains necessary information (dropdown)
    it('should confirm page', () => {
      cy.get('h3').contains('Dropdown List');
    });

    // Test 2: Dropdown holds expected information
    it('should check dropdown for existing options', () => {
      cy.get('#dropdown').within(() => {
        cy.get('option[selected=selected]').contains('Please select an option');
        cy.get('option[value=1]').contains('Option 1');
        cy.get('option[value=2]').contains('Option 2');
      });
    });

    
    // Test 3: Able to click on both dropdown options
    it('should be able to click on options', () => {
      cy.get('#dropdown').select('Option 1').should('have.value', '1');
      cy.get('#dropdown').select('Option 2').should('have.value', '2');
    });
    
    // Test 4: Unable to click on placeholder option, value from before is retained
    // Cypress does not allow clicking on placeholder option, code checks if value is disabled.
    it('should not be able to click on disabled option', () => {
      cy.get('#dropdown').within(() => {
        cy.get('option[disabled=disabled]').contains('Please select an option');
      })
    });
  });