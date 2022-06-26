class cartPage {
  elements = {
    title: () => cy.get(".title"),
    cartItemContainer: () => cy.get(".cart_list .cart_item"),
    productName: () => cy.get(".inventory_item_name"),
    productPrice: () => cy.get(".inventory_item_price"),
    removeBtn: () => cy.get(".cart_button"),
    checkoutBtn: () => cy.get("#checkout"),
  };

  removeProduct(index) {
    this.elements.removeBtn().eq(index).click();
  }

  clickCheckoutBtn() {
    this.elements.checkoutBtn().click();
  }
}
module.exports = new cartPage();
