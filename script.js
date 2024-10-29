describe('example to-do app', () => {
  it('Checking form', () => {
    cy.visit('http://localhost:3000'); // Ensure the correct URL

    // Confirm the form is visible
    cy.get('#loginForm').should('be.visible');

    // Use `cy.log` to debug visibility
    cy.get('body').then(($body) => {
      if ($body.find("label[for='checkbox']").length === 0) {
        cy.log('Checkbox label not found on the first try.');
      }
    });

    // Retry getting the label with a timeout
    cy.get("label[for='checkbox']", { timeout: 10000 }).should('exist');

    // Fill the form fields
    cy.get('#username').type('testuser');
    cy.get('#password').type('password123');
    cy.get('#checkbox').check();
    cy.get('#submit').click();

    // Verify 'Login as existing user' button appears
    cy.get('#existing').should('be.visible').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Logged in as testuser');
    });
  });
});
