/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByTestAttribute(value: string, options?: any): Chainable<JQuery<HTMLElement>>;
    login(username: string, password: string): void;
    loginAsAdmin(): void;
  }
}

Cypress.Commands.add('getByTestAttribute', (value: string, options?: any) => {
  return cy.get(`[data-cy=${value}]`, options)
});

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('#/login')
  cy.getByTestAttribute('username-input').type(username);
  cy.getByTestAttribute('password-input').type(password);
  cy.getByTestAttribute('login-button').click();
});

Cypress.Commands.add('loginAsAdmin', () => {
  cy.fixture("login.json").then(data => {
    cy.login(data.username, data.password);
  });
});
