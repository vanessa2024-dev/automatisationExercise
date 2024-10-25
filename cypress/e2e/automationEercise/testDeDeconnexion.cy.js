describe('se deconnecter du site',()=>{
    beforeEach(()=>{
        cy.visit('https://automationexercise.com')
        cy.contains('Home')
        cy.get('[class="shop-menu pull-right"]').contains('Home')
        cy.get('[class="shop-menu pull-right"]').contains('Products')
        cy.get('[class="shop-menu pull-right"]').contains('Cart')
        cy.get('[class="shop-menu pull-right"]').contains('Signup / Login')
        cy.get('[class="shop-menu pull-right"]').contains('Test Cases')
        cy.get('[class="shop-menu pull-right"]').contains('API Testing')
        cy.get('[class="shop-menu pull-right"]').contains('Video Tutorials')
        cy.get('[class="shop-menu pull-right"]').contains('Contact us')

    })
    it('se deconnecter',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.get('[data-qa="login-email" ]').type('leslie27@gmail.com')
        cy.get('[data-qa="login-password" ]').type('232323')
        cy.get('[data-qa="login-button"]').click()
        cy.get('[id="header"]').should('be.visible')
        cy.get('[id="header"]').contains('Logout')
        cy.get('[id="header"]').contains('Delete Account')
        cy.get('[id="slider"]').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.contains(' New User Signup!')
        cy.contains('Login to your account')
        cy.get('[data-qa="login-button"]').contains('Login').should('be.visible')
        cy.get('[data-qa="login-email" ]').should('be.visible')
        cy.get('[data-qa="login-password" ]').should('be.visible')
        cy.get('[data-qa="login-email" ]').should('be.visible')
        cy.get('[data-qa="login-password" ]').should('be.visible')



    })
})