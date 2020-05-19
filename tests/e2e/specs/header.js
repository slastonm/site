describe("Header component", () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
    cy.setLocalStorage();
  });

  it("Test router view and about page", () => {
    cy.visit("/");
    cy.get('[data-test="about"]').click();
    cy.contains("h1", "This is an about page");
  });
  it("Test active link", () => {
    cy.get('[data-test="home"]').click();
    cy.get('[data-test="home"]').should("have.class", "router-link-active");
  });

  it("Test lang switcher", () => {
    cy.get('[data-test="ru"]').click();
    cy.contains('[data-test="home"]', "Главная");
  });

  it("Test login and redirect", () => {
    cy.get('[data-test="logout"]').click();
    cy.url().should("include", "/Login");
  });
});
