describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosCheckBox = () => cy.get('input[name=tos]')
    const submitBtn = () => cy.get('input[id=submitBtn]')

    it('sanity check', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        tosCheckBox().should('exist')
        submitBtn().should('exist')
    })

    describe('filling out the inputs', () => {

        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })

        it('can complete the inputs and submit form', () => {
            nameInput()
                .should('have.value', '')
                .type('cow')
                .should('have.value', 'cow')

            emailInput()
                .should('have.value', '')
                .type('cow@land.com')
                .should('have.value', 'cow@land.com')
            
            passwordInput()
                .should('have.value', '')
                .type('iamcow')
                .should('have.value', 'iamcow')

            tosCheckBox().click()

            submitBtn().click()
        })

    })

    describe('form validation', () => {

        it('text inputs follow schema rules', () => {
            nameInput()
            .type('c')
            cy.contains('Username must be at least 3 characters long!')
        })
    })

})