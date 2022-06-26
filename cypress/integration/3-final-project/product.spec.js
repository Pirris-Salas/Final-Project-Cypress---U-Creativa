const inventoryPage = require("../../pages/inventory-page");
const productPage = require("../../pages/product-page");
const productTest = require("../../fixtures/product-test.json");

describe("Final Project - Product Module Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("correct-login-credentials").then((data) => {
      cy.login(data.username, data.password);
    });
  });

  productTest.forEach((test) => {
    it(`Testing Specific Product Info - ${test.tc}`, () => {
      inventoryPage.openProduct(0);
      cy.url().should(
        "be.equal",
        "https://www.saucedemo.com/inventory-item.html?id=4"
      );
      productPage.elements.productName().should("have.text", test.name);
      productPage.elements
        .productPic()
        .invoke("attr", "alt")
        .then((pic) => {
          expect(pic).to.contain(test.picture);
        });
      productPage.elements.productPrice().should("have.text", test.price);

      productPage.clickBackToProducts();
      cy.url().should("be.equal", "https://www.saucedemo.com/inventory.html");
    });
  });
});
