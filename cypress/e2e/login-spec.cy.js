/// <reference types = "Cypress" />
import HomePage from "../support/pages/home-page";
import LoginPage from "../support/pages/login-page";

describe("Login Page", ()=>{

    beforeEach(()=>{
        HomePage.open();
        LoginPage.open();
    });

    it("verify login page heading", ()=>{
        LoginPage.verifyPageHeading();
    });
    it("verify login with blank email and password", ()=>{
        LoginPage.clickLoginBtn();
        LoginPage.checkBlankErrorMessage();
    });

})