// https://on.cypress.io/api

describe('LoginView Component', () => {
  beforeEach(() => {
    // Visit the login page (assuming your base URL is set in cypress.json)
    cy.visit('/login')
  })

  it('should log in successfully with valid credentials', () => {
    // Enter valid email and password
    cy.get('[data-test="email-input"]').type('foo@bar.com')
    cy.get('[data-test="password-input"]').type('test')

    // Check the "Remember me" checkbox
    cy.get('input[type="checkbox"]').check()

    // Submit the form
    cy.get('button[type="submit"]').click()

    // Wait for a bit to allow loading (the setTimeout in the component)
    cy.wait(2500)

    // Verify that user is redirected to the dashboard
    cy.url().should('include', '/dashboard')
  })

  it('should show an error message for invalid credentials', () => {
    // Enter invalid email and password
    cy.get('[data-test="email-input"]').type('invalid@user.com')
    cy.get('[data-test="password-input"]').type('wrongpassword')

    // Submit the form
    cy.get('button[type="submit"]').click()

    // Wait for loading to finish
    cy.wait(2500)

    // Verify the alert is shown for wrong credentials (you might need to stub the alert)
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Wrong Credentials')
    })

    // Optionally, check that the URL has not changed
    cy.url().should('include', '/login')
  })

  it('should prevent login with empty email', () => {
    cy.get('[data-test="password-input"').type('test')

    // Submit the form
    cy.get('button[type="submit"]').click()

    // Ensure that the form does not submit (you can test for the presence of the alert)
    cy.wait(2500)
    // Check that the user is still on the login page
    cy.url().should('include', '/login')
  })

  it('should display validation error on email field if empty', () => {
    // Leave email empty and fill password
    cy.get('[data-test="password-input"]').type('test')

    // Submit the form
    cy.get('button[type="submit"]').click()

    cy.get('.v-messages__message').should('exist') // change the selector based on your error handling design
  })
})
