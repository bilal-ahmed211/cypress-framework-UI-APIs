describe("API Automation with Cypress", ()=>{

    it("GET Users", ()=>{

        cy.request({
            
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/4711760",
            headers:{
                Authorization: "Bearer b67d717a86687f5b9f8c014e6fa6d578d8e26aaeeb6916c9613a977f040cb1c0"
            }
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(4711760)
        })
    })

})