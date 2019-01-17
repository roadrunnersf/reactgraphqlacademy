describe('programmatically generated pages', function() {
  it('renders with the correct info', function() {
    cy.visit('/react-redux-training-paris/')
    cy.get('h2').contains('in Paris')
    cy.visit('/react-redux-training-sydney/')
    cy.get('h2').contains('in Sydney')
    cy.visit('/react-redux-training-brussels/')
    cy.get('h2').contains('in Brussels')
    cy.visit('/react-redux-training-berlin/')
    cy.get('h2').contains('in Berlin')
    cy.visit('/react-redux-training-amsterdam/')
    cy.get('h2').contains('Amsterdam')
    cy.visit('/react-redux-graphql-bootcamp-nyc/')
    cy.get('h2').contains('in New York')
    cy.visit('/react-redux-graphql-bootcamp-austin/')
    cy.get('h2').contains('in Austin')
  })
})
