class HomePage {

    elements = {

        AboutMenuItem: () => cy.get("#menu-item-45925"),
        PageTitle: () => cy.get("#headline-581-45916"),
        Testimonials: () => cy.get(".testimonial-slide-text"),
        AuthorsName: () => cy.get(".testimonial-slide-author div:nth-child(1)")

    };

    open() {

        return this.elements.AboutMenuItem()
            .invoke("show").wait(1000)
            .contains("Testimonials")
            .click({ force: true })
    };

    getTestimonialsAndAuthorNames() {
        let Testimonials = []
        let authorNames = []

        this.elements.AuthorsName().each(($author) => {
            authorNames.push($author.text())
        }).then(() => {
            this.elements.Testimonials().each(($ele, index) => {
                Testimonials.push($ele.text() + " " + authorNames[index])
            })
                .wrap(Testimonials)
                .then(Testimonials => {
                    cy.writeFile('C:/Users/Bilal/Desktop/HCL-Hack/cypress/Testimonials/file.txt1', Testimonials)
                })
        });
    }

}

module.exports = new HomePage