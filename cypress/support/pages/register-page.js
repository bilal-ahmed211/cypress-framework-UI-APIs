/// <reference types = "Cypress" />
import {BasePage} from './base-utils'

class RegisterPage extends BasePage {

    elements = {
        registerLink: () => cy.get(".header-links ul li"),
        pageHeading: () => cy.get("h1:nth-child(1)"),
        genderMale: () => cy.get("#gender-male"),
        genderFemale: () => cy.get("#gender-female"),
        firstName: () => cy.get("#FirstName"),
        lastName: () => cy.get("#LastName"),
        DOBDay: () => cy.get("select[name='DateOfBirthDay']"),
        DOBMonth: () => cy.get("select[name='DateOfBirthMonth']"),
        DOBYear: () => cy.get("select[name='DateOfBirthYear']"),
        email: () => cy.get("#Email"),
        companyName: () => cy.get("#Company"),
        password: () => cy.get("#Password"),
        confirmPassword: () => cy.get("#ConfirmPassword"),
        registerBtn: () => cy.get("#register-button"),
        blankEmailErrorMessage: () => cy.get("#Email-error"),
        wrongEmailErrorMessage: () => cy.get("#Email-error"),
        wrongPasswordErrorMessage: () => cy.get(".message-error ul li"),
        firstNameErrorMsg: () => cy.get("#FirstName-error"),
        lastNameErrorMsg: () => cy.get("#LastName-error"),
        emailErrorMsg: () => cy.get("#Email-error"),
        passwordErrorMsg: () => cy.get("#Password-error"),
        confirmPasswordErrorMsg: () => cy.get("#ConfirmPassword-error"),
        passwordLengthErrorMsg: () => cy.get("#Password-error ul li"),
        confirmPasswordErrorMsg: () => cy.get("#ConfirmPassword-error"),
        registrationSuccessMessage: () => cy.get("div.result")
    };

    open() {
        this.elements.registerLink().contains("Register").click();
    };
    verifyPageHeading() {
        this.elements.pageHeading()
            .should("be.visible")
            .and("contain.text", "Register")
    };
    selectMaleGender() {
        this.elements.genderMale().click()
    };
    selectFemaleGender() {
        this.elements.genderFemale().click()
    };
    typeFirstName(name) {
        this.elements.firstName().type(name)
    };
    typeLastName(name) {
        this.elements.lastName().type(name)
    };
    selectDOBDay(day) {
        this.elements.DOBDay().select(day)
    };
    selectDOBMonth(month) {
        this.elements.DOBMonth().select(month)
    };
    selectDOBYear(year) {
        this.elements.DOBYear().select(year)
    };
    typeEmail(email) {
        this.elements.email().type(email)
    };
    typeCompany(company) {
        this.elements.companyName().type(company)
    };
    typePassword(password) {
        this.elements.password().type(password)
    };
    typeConfirmPassword(confirmPass) {
        this.elements.confirmPassword().type(confirmPass)
    };
    clickRegisterBtn() {
        this.elements.registerBtn().click()
    };
    checkErrorMessagesForBlankForm() {
        this.elements.firstNameErrorMsg().should("be.visible").and("contain.text", "First name is required.");
        this.elements.lastNameErrorMsg().should("be.visible").and("contain.text", "Last name is required.");
        this.elements.emailErrorMsg().should("be.visible").and("contain.text", "Email is required.");
        this.elements.passwordErrorMsg().should("be.visible").and("contain.text", "Password is required.");
        this.elements.confirmPasswordErrorMsg().should("be.visible").and("contain.text", "Password is required.");
    };
    checkErrorMessageForPasswordLength() {
        this.elements.passwordLengthErrorMsg()
            .should("be.visible")
            .and("contain.text", "must have at least 6 characters")
    };
    checkErrorMessageForUnmatchedPassword() {
        this.elements.confirmPasswordErrorMsg()
            .should("be.visible")
            .and("contain.text", "The password and confirmation password do not match.")
    };
    fillRegistrationForm() {
        const {
            firstName,
            lastName,
            email,
            company,
            password,
        } = BasePage.generateTestData()

        this.selectFemaleGender()
        this.typeFirstName(firstName)
        this.typeLastName(lastName)
        this.selectDOBDay('1')
        this.selectDOBMonth('January')
        this.selectDOBYear('2000')
        this.typeEmail(email)
        this.typeCompany(company)
        this.typePassword(password)
        this.typeConfirmPassword(password)
    };
    successMessageIsDisplayed() {
        this.elements.registrationSuccessMessage()
            .should("be.visible")
            .and("contain.text", "Your registration completed")
    };

}

module.exports =  new RegisterPage