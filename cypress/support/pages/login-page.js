/// <reference types = "Cypress" />

class LoginPage {

    elements = {
        loginLink: () => cy.get("div.header-links ul li:nth-child(2)"),
        pageHeading: () => cy.get("h1"),
        email: () => cy.get("#Email"),
        password: () => cy.get("#Password"),
        loginBtn: () => cy.get(".login-button"),
        blankEmailErrorMessage: () => cy.get("#Email-error"),
        wrongEmailErrorMessage: () => cy.get("#Email-error"),
        wrongPasswordErrorMessage: () => cy.get(".message-error ul li")


    };

    open() {
        this.elements.loginLink().click();
    };
    verifyPageHeading() {
        this.elements.pageHeading()
            .should("be.visible")
            .and("contain.text", "Welcome, Please Sign In!")
    };
    typeEmail(email) {
        this.elements.email().type(email)
    };
    typePassword(password) {
        this.elements.password().type(password)
    };
    clickLoginBtn() {
        this.elements.loginBtn().click()
    };
    checkBlankErrorMessage(){
        let errorMessage = "Please enter your email"
        this.elements.blankEmailErrorMessage()
        .should("be.visible")
        .and("contain.text", errorMessage)
    }

}

module.exports = new LoginPage