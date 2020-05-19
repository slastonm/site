describe("Login page", () => {
  //cy.viewport(550, 750)    // Set viewport to 550px x 750px
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });
  it("Visit login page", () => {
    cy.visit("/login");
    cy.contains("h1", "Login");
  });
  it("Test reset button", () => {
    cy.get('[data-test="email"]').type("Hello, World");
    cy.get('[data-test="password"]').type("123456");
    cy.get('[data-test="reset"]').click();
    cy.get('[data-test="email"]').should("be.empty");
    cy.get('[data-test="password"]').should("be.empty");
  });

  it("Test validation", () => {
    cy.get('[data-test="email"]').type("He");
    cy.get(".el-form-item__error").should("be.visible");
  });

  it("Test login and redirect", () => {
    cy.get('[data-test="reset"]').click();
    cy.get('[data-test="email"]').type("test@gmail.com");
    cy.get('[data-test="password"]').type("123456");
    cy.get('[data-test="submit"]').click();
    cy.url().should('include', 'http://localhost:8080/');
  });
});

// cy.get('[data-test="reset"]').click();
// cy.get('[data-test="email"]').type("test@gmail.com");
// cy.get('[data-test="password"]').type("123456");
// cy.get('[data-test="submit"]').click();
// cy.url().should('eq', Cypress.config().baseUrl);