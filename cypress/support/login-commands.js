const loginPage = require("../pages/login-page")

Cypress.Commands.add('login', (user,pass) => {
    loginPage.enterUsername(user)
    loginPage.enterPassword(pass)
    loginPage.clickBtn()
})