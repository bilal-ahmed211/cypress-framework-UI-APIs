describe("API Automation with Cypress", () => {

    function generateRandomEMail() {

        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + "@dispostable.com"
        return email
    }
    it("Create User", () => {

        let emailAdress = generateRandomEMail()

        cy.request({

            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer b67d717a86687f5b9f8c014e6fa6d578d8e26aaeeb6916c9613a977f040cb1c0"
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": emailAdress,
                "status": "active"
            }
        })
            .then((response) => {
                //cy.log(JSON.stringify(response))
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name", "Tenali Ramakrishna")
                expect(response.body).has.property("gender", "male")
                expect(response.body).has.property("status", "active")
                expect(response.body.id).to.not.be.null

                let id = response.body.id;

                cy.request({
                    method: "GET",
                    url: "https://gorest.co.in/public/v2/users/" + id,
                    headers: {
                        Authorization: "Bearer b67d717a86687f5b9f8c014e6fa6d578d8e26aaeeb6916c9613a977f040cb1c0"
                    }
                })
                    .then(() => {
                        expect(response.body).has.property("name", "Tenali Ramakrishna")
                        expect(response.body).has.property("gender", "male")
                        expect(response.body).has.property("status", "active")
                    })

            })
    })

})