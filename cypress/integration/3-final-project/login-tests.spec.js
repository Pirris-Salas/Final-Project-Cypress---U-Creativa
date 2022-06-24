const loginData = require("../../fixtures/failed-login-tests.json");
const loginPage = require("../../pages/login-page");

describe("Final Project - Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  loginData.forEach((test) => {
    it(`Failed Login Tests Loop - ${test.tc}`, () => {
      cy.login(test.username, test.password);
      loginPage.elements.errorMessage().should("have.text", test.errorMessage);
    });
  });

  it("Login Success", () => {
    cy.fixture("correct-login-credentials").then((data) => {
      cy.login(data.username, data.password);
      cy.url().should("be.equal", data.dashboard);
    });
  });
});
