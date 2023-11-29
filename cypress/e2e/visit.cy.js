describe('Cy Visit', function() {
    it('test visit method', function() {
      cy.visit('https://example.cypress.io')
      cy.url().should('contain', 'cypress')
    })
  });