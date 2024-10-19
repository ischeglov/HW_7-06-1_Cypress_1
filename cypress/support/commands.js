// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  if (email) cy.get("#mail").type(email);
  if (password) cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("signIn", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible", true);
});
