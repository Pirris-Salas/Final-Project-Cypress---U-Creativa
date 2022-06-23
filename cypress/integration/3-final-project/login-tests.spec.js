const loginData = require('../../fixtures/failed-login-tests.json')
const loginPage = require('../../pages/login-page')
const loginCredentials = require('../../fixtures/correct-login-credentials.json')


describe('Final Project - Login Tests', ()=>{

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    loginData.forEach(test => {
        it(`Failed Login Tests Loop - ${test.tc}`, ()=> {
            cy.login(test.username, test.password)
            loginPage.elements.errorMessage().should('have.text',test.errorMessage)
        })
       })

       
       loginCredentials.forEach(test => {
        it('Login Success', () => {
            cy.login(test.username, test.password)
            cy.url().should('be.equal', test.dashboard)
           })
       })
  
})



 

      