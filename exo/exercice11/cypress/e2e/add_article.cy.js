// https://on.cypress.io/api

describe('Add article', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Should add article', () => {
    cy.get('input[type=text]').type('Coca')
    cy.get('select[id=section]').select('Liquide')
    cy.get('button').click()
  })
})
