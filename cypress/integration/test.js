describe('DropDownTest', () => {

    before(() => {
      cy.visit("/dropdown");
    });

    
    it('should confirm page', () => {
      cy.get('h3').contains('Dropdown List')
    });

    it('should check dropdown for existing options', () => {
      cy.get('#dropdown').within(() => {
        cy.get('option[selected=selected]').contains('Please select an option');
        cy.get('option[value=1]').contains('Option 1');
        cy.get('option[value=2]').contains('Option 2');
      })
    });
  })