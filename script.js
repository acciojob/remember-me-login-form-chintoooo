describe('example to-do app', () => {
  it('Checking form', () => {
    cy.visit('http://localhost:3000'); // Ensure the correct URL

    // Confirm the form is visible
    cy.get('#loginForm').should('be.visible');

    // Wait for the label associated with the checkbox to appear
    cy.get("label[for='checkbox']", { timeout: 10000 }).should('exist');

    // Interact with the form fields
    cy.get('#username').type('testuser');
    cy.get('#password').type('password123');
    cy.get('#checkbox').check();
    cy.get('#submit').click();

    // Confirm 'Login as existing user' button appears
    cy.get('#existing').should('be.visible').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Logged in as testuser');
    });
  });
});
