/// <reference types = "Cypress" />
import HomePage from "../support/pages/home-page";
import RegisterPage from "../support/pages/register-page";

describe("Registration Page", () => {

    beforeEach(() => {
        HomePage.open();
        RegisterPage.open();
    });

    it("verify page heading is displayed", () => {
        RegisterPage.verifyPageHeading();
    });
    it("verify error messages are displayed when click Register wthout filling form", () => {
        RegisterPage.clickRegisterBtn();
        RegisterPage.checkErrorMessagesForBlankForm();
    });
    it("verify error messages is displayed when password length is less than 6 characters", () => {
        RegisterPage.typePassword('abc');
        RegisterPage.elements.confirmPassword().click();
        RegisterPage.checkErrorMessageForPasswordLength();
    });
    it("verify error messages is displayed for unmatched password & confirm password fields", () => {
        RegisterPage.typePassword('abc123');
        RegisterPage.typeConfirmPassword(321);
        RegisterPage.elements.password().click();
        RegisterPage.checkErrorMessageForUnmatchedPassword();
    });
    it.skip("register new user and verify success message", () => {
        RegisterPage.fillRegistrationForm();
        RegisterPage.clickRegisterBtn();
        RegisterPage.successMessageIsDisplayed();
    });
});