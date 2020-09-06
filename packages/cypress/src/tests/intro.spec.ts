describe("Landing page", () => {
  it("shows navigation menu", () => {
    cy.visit("/");
    cy.findByTestId("NavBar").should("be.visible");

    cy.log("🍔 menu can be opened");
    cy.findByTestId("NavBar-SideNav-Open").click();
    cy.findByTestId("NavBar-SideNav").should("be.visible");
  });
});
