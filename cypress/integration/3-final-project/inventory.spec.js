const inventoryPage = require("../../pages/inventory-page");
const productsInventoryPage = require("../../pages/products-inventory-page");

describe("Final Project - Inventory Module Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("correct-login-credentials").then((data) => {
      cy.login(data.username, data.password);
    });
  });

  it("Amount of Products Displayed Test", () => {
    let productsCount = 0;
    inventoryPage.elements
      .inventoryProductList()
      .each((products) => {
        if (products.text() != null) {
          productsCount += 1;
        }
      })
      .then(() => {
        expect(productsCount).to.equal(6);
      });
  });

  it("Testing Product Names", () => {
    cy.fixture("product-names").then((productName) => {
      inventoryPage.elements
        .inventoryProductList()
        .find(productsInventoryPage.elements.productName())
        .each((elements, index) => {
          cy.wrap(elements)
            .invoke("text")
            .then((item) => {
              expect(item).to.contain(productName[index]);
            });
        });
    });
  });

  it("Testing Product Images", () => {
    cy.fixture("product-img-names").then((productImgName) => {
      inventoryPage.elements
        .inventoryProductList()
        .find(productsInventoryPage.elements.productImage())
        .each((elements, index) => {
          cy.wrap(elements)
            .invoke("attr", "alt")
            .then((item) => {
              expect(item).to.contain(productImgName[index]);
            });
        });
    });
  });

  it("Testing Product Prices", () => {
    cy.fixture("product-prices").then((productPrice) => {
      inventoryPage.elements
        .inventoryProductList()
        .find(productsInventoryPage.elements.productPrice())
        .each((elements, index) => {
          cy.wrap(elements)
            .invoke("text")
            .then((item) => {
              expect(item).to.contain(productPrice[index]);
            });
        });
    });
  });

  it("Testing ADD TO CART Button State", () => {
    cy.fixture("add-to-cart-button-states").then((buttonState) => {
      inventoryPage.elements
        .inventoryProductList()
        .find(productsInventoryPage.elements.addToCartBtn())
        .each((elements) => {
          cy.wrap(elements)
            .invoke("text")
            .then((item) => {
              expect(item).to.contain(buttonState[0]);
            });
        });
    });
  });

  it("Testing - Sort Price Low to High", () => {
    inventoryPage.elements.productSortContainer().select(`Price (low to high)`);
    inventoryPage.elements.productSortContainer().should("have.value", "lohi");

    cy.fixture("product-prices").then((prices) => {
      var customSort = function (a, b) {
        return Number(a.match(/(\d+)/g)[0]) - Number(b.match(/(\d+)/g)[0]);
      };

      let sortedPricesArray = prices.sort(customSort);

      inventoryPage.elements
        .inventoryProductList()
        .find(productsInventoryPage.elements.productPrice())
        .each((elements, index) => {
          cy.wrap(elements)
            .invoke("text")
            .then((item) => {
              expect(item).to.contain(sortedPricesArray[index]);
            });
        });
    });
  });
});
