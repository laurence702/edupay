describe('LoginView Component', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should log in successfully with valid credentials', () => {
    cy.get('[data-test="email-input"]').type('foo@bar.com')
    cy.get('[data-test="password-input"]').type('test')

    cy.get('input[type="checkbox"]').check()
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
  })

  it('should show an error message for invalid credentials', () => {
    cy.get('[data-test="email-input"]').type('invalid@user.com')
    cy.get('[data-test="password-input"]').type('wrongpassword')

    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Wrong Credentials')
    })

    cy.url().should('include', '/login')
  })

  it('should prevent login with empty email', () => {
    cy.get('[data-test="password-input"').type('test')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/login')
  })

  it('should display validation error on email field if empty', () => {
    cy.get('[data-test="password-input"]').type('test')

    cy.get('button[type="submit"]').click()

    cy.get('.v-messages__message').should('exist')
  })

  it('should contain submit,register, and remember me', () => {
    cy.get('[data-test="register-btn"]').contains('Register')
    cy.get('[data-test="submit-btn"]').contains('Submit')
    cy.get('[data-test="remember-checker"]').contains('Remember me')
  })
})
