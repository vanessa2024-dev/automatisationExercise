

describe('automatisation des differents cas de tests du site automationExercise.com', ()=>{
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
    it('enregistrer un utilisateur',()=>{
        
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.get('[data-qa="login-button"]').contains('Login').should('be.visible')
        cy.get('[data-qa="login-email" ]').should('be.visible')
        cy.get('[data-qa="login-password" ]').should('be.visible')
        cy.contains(' New User Signup!')
        cy.get('[data-qa="signup-name"]').should('be.visible')
        cy.get('[data-qa="signup-email"]').should('be.visible')
        cy.get('[data-qa="signup-button"]').contains('Signup').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('Vanessa')
        cy.get('[data-qa="signup-email"]').type('leslie27@gmail.com')
        cy.get('[data-qa="signup-button"]').click()
        cy.contains(' Enter Account Information')
        cy.contains('Title')
        cy.get('[id="id_gender2"]').click()
        cy.contains('Name')
        cy.get('[data-qa="name"]').should('be.visible')
        cy.contains('Email')
        cy.get('[data-qa="email"]').should('be.visible')
        cy.contains('Password')
        cy.get('[data-qa="password"]').should('be.visible').type('232323')
        cy.contains('Date of Birth')
        //Day
        cy.get('[data-qa="days"]').select(4)
        //Month
        cy.get('[data-qa="months"]').select('February')
        //Year
        cy.get('[data-qa="years"]').select('2002')
        cy.contains('Sign up for our newsletter!')
        cy.get('[id="newsletter"]').click()
        cy.contains('Receive special offers from our partners!')
        cy.get('[id="optin" ]').click()
        cy.contains('Address Information')
        cy.contains('First name')
        cy.get('[data-qa="first_name" ]').type('Vanessa')
        cy.contains('Last name')
        cy.get('[data-qa="last_name" ]').type('Melviane')
        cy.contains('Company')
        cy.get('[ data-qa="company"]').type('Maviance')
        cy.contains('Address * (Street address, P.O. Box, Company name, etc.)')
        cy.get('[data-qa="address" ]').type('lidsn')
        cy.contains('Address 2')
        cy.get('[ data-qa="address2"]').type('catar')
        cy.contains('Country')
        cy.get('[data-qa="country" ]').select('India')
        cy.contains('State')
        cy.get('[ data-qa="state"]').type('Douala')
        cy.contains('City')
        cy.get('[data-qa="city" ]').type('yaounde')
        cy.contains('Zipcode')
        cy.get('[ data-qa="zipcode"]').type('tytyt')
        cy.contains('Mobile Number')
        cy.get('[ data-qa="mobile_number"]').type('12121212')
        cy.get('[data-qa="create-account"]').contains('Create Account').click()
        cy.contains(' Account Created!')
        cy.contains(' Congratulations! Your new account has been successfully created!')
        cy.contains(' You can now take advantage of member privileges to enhance your online shopping experience with us.')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('[id="header"]').should('be.visible')
        cy.get('[id="header"]').contains('Logout')
        cy.get('[id="header"]').contains('Delete Account')
        cy.get('[id="slider"]').should('be.visible')
        // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        // cy.contains('Account Deleted!')
        // cy.contains('Your account has been permanently deleted!')
        // cy.contains('You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
        // cy.get('[data-qa="continue-button"]').click()

         
    })
    it.only('se connecter avec un email et mot de pass valide',()=>{
        cy.contains('Login to your account')
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.get('[data-qa="login-email" ]').type('leslie27@gmail.com')
        cy.get('[data-qa="login-password" ]').type('232323')
        cy.get('[data-qa="login-button"]').click()
        



    })
    afterEach(()=>{
        cy.get('[id="header"]').should('be.visible')
        cy.get('[id="header"]').contains('Logout')
        cy.get('[id="header"]').contains('Delete Account')
        cy.get('[id="slider"]').should('be.visible')

    })


       






    
})