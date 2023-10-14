/// <reference types = "Cypress" />
import { BasePage } from "./base.utils";

export class VeterinariansPage extends BasePage {
    static clickVeterinarians() {
        cy.get("a[title='veterinarians']").click();
        cy.get("div[class='container xd-container'] h2")
        .should("be.visible")
        .and("contain.text", "Veterinarians")
    };
    static findNoOfVeterinarians(){
        const table = "#vets tbody"
        cy.get(table).find("tr")
        .then((rows)=>{
            const totalVeterinarians = Cypress.$(rows).length;
            expect(rows).to.have.length(totalVeterinarians)
        })
        BasePage.nextPage()
        cy.get("table").find("tr")
        .then((rows)=>{
            const totalVeterinarians = Cypress.$(rows).length;
            expect(rows).to.have.length(totalVeterinarians)
        })
    }
}