const checkoutPage = require("../pages/checkout-page");

Cypress.Commands.add("fill_form", (firstname, lastname, code) => {
  checkoutPage.enterFirstName(firstname);
  checkoutPage.enterLastName(lastname);
  checkoutPage.enterPostalCode(code);

  checkoutPage.clickContinueButton();
});
