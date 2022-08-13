/// <reference types = "Cypress" />
import AboutPage from "../support/pages/about-page";

describe("About Page", ()=>{

    beforeEach(()=>{
        cy.visit("https://healthcaresuccess.com/");
        AboutPage.open().wait(2000);
    });

    it("verify user has landed on About page successfully", ()=>{

        AboutPage.elements.PageTitle().should("be.visible");
    });
    it("read testimonials with relevant author and write to a text file", ()=>{

        AboutPage.getTestimonialsAndAuthorNames();
    });
});