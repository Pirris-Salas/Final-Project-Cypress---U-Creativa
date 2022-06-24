class inventoryPage {
  elements = {
    openMenuButton: () => cy.get("#react-burger-menu-btn"),
    closeMenuButton: () => cy.get("#react-burger-cross-btn"),
    divMenuContainer: () => cy.get(".bm-menu-wrap"),
  };

  openMenu() {
    this.elements.openMenuButton().click();
  }

  closeMenu() {
    this.elements.closeMenuButton().click();
  }
}

module.exports = new inventoryPage();
