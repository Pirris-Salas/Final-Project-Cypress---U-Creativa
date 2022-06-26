class inventoryPage {
  elements = {
    openMenuButton: () => cy.get("#react-burger-menu-btn"),
    closeMenuButton: () => cy.get("#react-burger-cross-btn"),
    divMenuContainer: () => cy.get(".bm-menu-wrap"),
    inventoryProductList: () => cy.get('.inventory_list .inventory_item'),
    productSortContainer: () => cy.get('.product_sort_container'),
    productLink: () => cy.get('.inventory_list .inventory_item .inventory_item_label a')
  };

  openMenu() {
    this.elements.openMenuButton().click();
  }

  closeMenu() {
    this.elements.closeMenuButton().click();
  }
  
}

module.exports = new inventoryPage();
