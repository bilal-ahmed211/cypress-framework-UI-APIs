/// <reference types = "Cypress" />
import HomePage from "../support/pages/home-page";

describe("Home Page - Accessibility Test", ()=>{

    beforeEach(()=>{
        HomePage.open();
        cy.injectAxe();
    }); 
    it("home page accessibility test - custom command", ()=>{
        cy.customCheckAlly();
    });
})