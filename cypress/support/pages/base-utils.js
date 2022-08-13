import { faker } from '@faker-js/faker'

class BasePage {

    static generateTestData() {

        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email().split('@')[0] + '@yopmail.com'
        let company = faker.company.companyName()
        let password = faker.internet.password()

        return { firstName, lastName, email, password, company }
    };
    static findTotalOwners(){
        const table = "#owners tbody"
        let rowscount = 0;
        cy.get("#owners tbody tr").then(($rows)=>{rowscount=$rows.length})
        for (let i = 0; i < rowscount; i++){
            cy.get(table).find("tr")
            .then((rows)=>{
                const totalOwners = Cypress.$(rows).length;
                expect(rows).to.have.length(totalOwners)
            })
            // BasePage.nextPage()
        }
    }
}

export {BasePage}