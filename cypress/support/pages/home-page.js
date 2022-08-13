/// <reference types = "Cypress" />

class HomePage {

    elements = {
        menuItems: () => cy.get(".top-menu.notmobile li"),
    };

    open() {
        cy.visit('/')
    };
    verifyPageTitle(){
        cy.title().should("eq", "nopCommerce demo store")
    }
    verifyMenuItemsNames() {

        let menuitems = ["Computers", "Desktops", "Notebooks", "Software", "Electronics", "Camera & photo", "Cell phones", "Others", "Apparel", "Shoes", "Clothing", "Accessories", "Digital downloads", "Books", "Jewelry", "Gift Cards"]
        this.elements.menuItems()
            .each((items, index) => {
                cy.wrap(items).should("contain.text", menuitems[index].trim())
            })
    };
    verifyMenuItemsCount() {
        this.elements.menuItems().should("have.length", "16")
    };

}

module.exports = new HomePage