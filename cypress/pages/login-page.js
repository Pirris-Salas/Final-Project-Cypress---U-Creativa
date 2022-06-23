class LoginPage{

    elements = {
        inputUsername: () => cy.get('#user-name'),
        inputPassword: () => cy.get('#password'),
        loginButton : () => cy.get('#login-button'),
        errorMessage: () => cy.get('.error-message-container h3')
    }

    enterUsername(username){
        this.elements.inputUsername().type(`{backspace}${username}`)
    }

    enterPassword(password){
        this.elements.inputPassword().type(`{backspace}${password}`)
    }

    clickBtn(){
        this.elements.loginButton().click()  
    }


}
module.exports = new LoginPage()