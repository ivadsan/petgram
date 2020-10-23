/* global describe, it, cy, Cypress */

describe('Test de Petgram', function () {
  it('Integration Test', function () {
    cy.visit('/')
  })

  it('Navegar a una categoría y obtener una imagen', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navegar a una categoria, obtener el primer link del navbar y al hacer click abrir la baseUrl', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it('Los usuarios que no han iniciado sesión son redirigidos al form de registro e inicio de sesión, validamos que existen 2 formularios', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
