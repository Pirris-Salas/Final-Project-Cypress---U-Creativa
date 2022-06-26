class productsInventoryPage {
  elements = {
    productImage: () => ".inventory_item_img img",
    productName: () => ".inventory_item_name",
    productPrice: () => ".inventory_item_price",
    addToCartBtn: () => ".btn_inventory",
    removeBtn: () => cy.get(".btn_inventory"),
  };

  addProduct(index) {
    cy.get(this.elements.addToCartBtn()).eq(index).click();
  }

  removeProduct(index) {
    this.elements.removeBtn().eq(index).click();
  }
}
module.exports = new productsInventoryPage();
