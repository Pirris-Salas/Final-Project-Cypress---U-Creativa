const cartPage = require("../../pages/cart-page");
const inventoryPage = require("../../pages/inventory-page");
const productsInventoryPage = require("../../pages/products-inventory-page");
const { elements } = require("../../pages/inventory-page");
const checkoutPage = require("../../pages/checkout-page");

describe("Final Project - Cart Module Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("correct-login-credentials").then((data) => {
      cy.login(data.username, data.password);
    });

    productsInventoryPage.addProduct(0);
    productsInventoryPage.addProduct(3);
  });

  it("Testing Add To Cart And Remove From Inventory", () => {
    inventoryPage.elements.shoppingCartBadge().should("have.text", 2);
    productsInventoryPage.removeProduct(0);
    inventoryPage.elements.shoppingCartBadge().should("have.text", 1);
    productsInventoryPage.removeProduct(3);
    inventoryPage.elements.shoppingCartBadge().should("not.exist");
  });

  it("Testing ADD and Shopping Badge From Shopping Page", () => {
    let itemCounter = 0;
    inventoryPage.openCartView();
    cy.url().should("equal", "https://www.saucedemo.com/cart.html");
    cartPage.elements.title().should("have.text", "Your Cart");

    cartPage.elements.productName().each((element, index) => {
      //Checking Products Name
      cy.fixture("cart-products-name").then((name) => {
        cy.wrap(element)
          .invoke("text")
          .then((item) => {
            expect(item).to.contain(name[index]);
          });
      });
    });

    cartPage.elements.productPrice().each((element, index) => {
      //Checking Products Price
      cy.fixture("cart-products-price").then((price) => {
        cy.wrap(element)
          .invoke("text")
          .then((item) => {
            expect(item).to.contain(price[index]);
          });
      });
    });

    //Counting Products
    cartPage.elements
      .cartItemContainer()
      .each((elements, index) => {
        index = 0 ? itemCounter : (itemCounter = 1 + index);
      })
      .then(() => {
        expect(itemCounter).to.be.equal(2);
      });

    //Checking Shopping Badge
    inventoryPage.elements.shoppingCartBadge().should("have.text", 2);
  });

  it("Testing REMOVE and Shopping Badge From Shopping Page", () => {
    inventoryPage.openCartView();
    cy.url().should("equal", "https://www.saucedemo.com/cart.html");
    cartPage.elements.title().should("have.text", "Your Cart");

    //Checking Shopping Badge
    inventoryPage.elements.shoppingCartBadge().should("have.text", 2);

    //Removing 1 product
    cartPage.removeProduct(1);

    //Checking Shopping Badge
    inventoryPage.elements.shoppingCartBadge().should("have.text", 1);

    //Removing last product
    cartPage.removeProduct(0);

    //Checking Empty Shopping Badge
    inventoryPage.elements.shoppingCartBadge().should("not.exist");
  });

  it("Checkout Order Test", () => {
    inventoryPage.openCartView();
    cy.url().should("equal", "https://www.saucedemo.com/cart.html");
    cartPage.elements.title().should("have.text", "Your Cart");

    cartPage.clickCheckoutBtn();

    cy.fixture("client-info").then((info) => {
      cy.fill_form(info.firstname, info.lastname, info.code);
    });

    checkoutPage.elements.productName().each((element, index) => {
      //Checking Products Name
      cy.fixture("cart-products-name").then((name) => {
        cy.wrap(element)
          .invoke("text")
          .then((item) => {
            expect(item).to.contain(name[index]);
          });
      });
    });

    checkoutPage.elements.productPrice().each((element, index) => {
      //Checking Products Price
      cy.fixture("cart-products-price").then((price) => {
        cy.wrap(element)
          .invoke("text")
          .then((item) => {
            expect(item).to.contain(price[index]);
          });
      });
    });

    checkoutPage.clickFinish();
    cy.url().should(
      "equal",
      "https://www.saucedemo.com/checkout-complete.html"
    );
    checkoutPage.elements.title().should("have.text", "Checkout: Complete!");
  });
});
