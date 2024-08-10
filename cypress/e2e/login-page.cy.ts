describe('Login page', () => {
  it('Login should redirect to dashboard', () => {
    cy.loginAsAdmin();
    cy.url().should('include', '/dashboard');
  });
  it('Login with invalid credentials should fail', () => {
    cy.login('admin', 'invalidPassword');
    cy.url().should('not.include', '/dashboard').should('include', '/login');
  });
});
