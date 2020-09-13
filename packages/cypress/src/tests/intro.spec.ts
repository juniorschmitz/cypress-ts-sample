describe("Landing page", () => {
  beforeEach(() => {
    // Suppress cookie consent modal
    cy.setCookie("cookie_consent", "agreed");
  });

  it("shows navigation menu", () => {
    cy.visit("/");
    cy.findByTestId("NavBar").should("be.visible");

    cy.log("🍔 menu can be opened");
    cy.findByLabelText("Open navigation menu").click();
    cy.findByTestId("SideNav").should("be.visible");
  });
});
