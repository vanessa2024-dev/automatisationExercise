
describe('test negatif' , ()=>{
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
    it('se connecter avec un email ou un mot de pass invalid',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.contains('Login to your account')
        cy.get('[data-qa="login-email" ]').type('line27@gmail.com')
        cy.get('[data-qa="login-password" ]').type('232323')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect! ')

    })
    it ('creer un compte avec un email deja utilise', ()=>{
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        // login place
        cy.contains('Login to your account')
        cy.get('[data-qa="login-email" ]').should('be.visible')
        cy.get('[data-qa="login-password" ]').should('be.visible')
        // signup place
        cy.contains(' New User Signup!')
        cy.get('[data-qa="signup-name"]').should('be.visible')
        cy.get('[data-qa="signup-email"]').should('be.visible')
        cy.get('[data-qa="signup-button"]').contains('Signup').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('Vanessa')
        cy.get('[data-qa="signup-email"]').type('leslie27@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Email Address already exist!')


    })
    
    
})