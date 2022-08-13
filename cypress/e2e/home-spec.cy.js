/// <reference types = "Cypress" />
import HomePage from "../support/pages/home-page"

describe("Home Page", ()=>{

    beforeEach(()=>{
        HomePage.open();
    }); 
    it("verify page title is correct", ()=>{
        HomePage.verifyPageTitle();
    });
    it("verify the names of menu items", ()=>{
        HomePage.verifyMenuItemsCount();
    });
    it("verify the total count of menu items", ()=>{
        HomePage.verifyMenuItemsCount();
    });
});