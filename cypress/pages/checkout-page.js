class checkoutPage {
  elements = {
    title: () => cy.get(".title"),
    inputFirstName: () => cy.get("#first-name"),
    inputLastName: () => cy.get("#last-name"),
    inputPostalCode: () => cy.get("#postal-code"),
    continueBtn: () => cy.get("#continue"),
    productName: () => cy.get(".inventory_item_name"),
    productPrice: () => cy.get(".inventory_item_price"),
    finishBtn: () => cy.get("#finish"),
  };

  enterFirstName(firstname) {
    this.elements.inputFirstName().type(firstname);
  }

  enterLastName(lastname) {
    this.elements.inputLastName().type(lastname);
  }

  enterPostalCode(code) {
    this.elements.inputPostalCode().type(code);
  }

  clickContinueButton() {
    this.elements.continueBtn().click();
  }

  clickFinish() {
    this.elements.finishBtn().click();
  }
}
module.exports = new checkoutPage();
