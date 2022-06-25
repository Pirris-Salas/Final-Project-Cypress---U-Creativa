const inventoryPage = require("../../pages/inventory-page");
const inventorySidebarMenuPage = require("../../pages/inventory-sidebar-menu-page");

describe("Final Project - Menu Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("correct-login-credentials").then((data) => {
      cy.login(data.username, data.password);
    });
  });

  it("Displaying and hiding the menu", () => {
    inventoryPage.elements
      .divMenuContainer()
      .should("not.be.visible")
      .should("have.attr", "hidden");
    inventoryPage.openMenu();
    inventoryPage.elements.divMenuContainer().should("be.visible");
    inventoryPage.closeMenu();
  });

  it("Menu Items Order", () => {
    inventoryPage.openMenu();
    inventoryPage.elements.divMenuContainer().should("be.visible");
    cy.fixture("menu-item-order.json").then((items) => {
      inventorySidebarMenuPage.elements
        .menuItemsContainer()
        .each((menuItems, index) => {
          cy.wrap(menuItems)
            .invoke("text")
            .then((itemText) => {
              expect(itemText.toUpperCase()).to.contain(items[index]);
            });
        });
    });
    inventoryPage.closeMenu();
  });
});
