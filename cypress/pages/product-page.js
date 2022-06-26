class productPage {
  elements = {
    productName: () => cy.get(".inventory_details_name"),
    productPic: () => cy.get(".inventory_details_img"),
    productPrice: () => cy.get(".inventory_details_price"),
    addToCartBtn: () => cy.get(".add-to-cart-sauce-labs-backpack"),
    backToProductsBtn: () => cy.get(".inventory_details_back_button"),
  };

  clickBackToProducts(index) {
    this.elements.backToProductsBtn().click();
  }
}
module.exports = new productPage();
