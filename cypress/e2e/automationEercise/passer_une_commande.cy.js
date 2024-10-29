import { dataElement } from "./data_test_id"
const dataIdElemnt =new dataElement()


describe('passer une commande',()=>{
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
    //     const emailArray=['tienct.gmail.com','vanesaa@gmail.com', 'vanddesaa@gmail.com','vaneeesaa@gmail.com','vaneaasaa@gmail.com']
    // 


     })
    // const emailArray=['tienct.gmail.com','vanesaa@gmail.com', 'vanddesaa@gmail.com','vaneeesaa@gmail.com','vaneaasaa@gmail.com']
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
    //     }
    //     return array;
    //   }
    it(' s inscris lors du paiement d une commande',function paiement(){
        // ajouter un nouveau produit
        // button Add Product du hover
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()
        // redirection vers une autre page
        // image du produit
        cy.get('.view-product > img').should('be.visible')
        // grande div contenant les information sur le produit
        cy.get('[class="product-information"]').should('be.visible')
        cy.contains('Blue Top')
        cy.contains('Category: Women > Tops')
        cy.contains('Rs. 500')
        cy.contains('Quantity')
        cy.contains('Availability: In Stock')
        cy.contains('Condition: New')
        cy.contains('Brand: Polo')
        // champ de la quantite
        cy.get('[id="quantity"]').clear().type(2)
        
        // button Add to cart
        cy.get(':nth-child(5) > .btn').click() 

        cy.contains('Added')
        cy.contains('Your product has been added to cart.')
        cy.contains('View Cart')
        // button Continue Shopping sur la modal
        cy.get('.modal-footer > .btn').click({force:true})
        // button Cart sur le header
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        // button Proceed
        cy.get('.col-sm-6 > .btn').click()
        // element sur la modal
        cy.contains('Checkout')
        cy.contains('Register / Login account to proceed on checkout.')
        cy.contains('Register / Login')
        // button Continue on Cart
        cy.get('.modal-footer > .btn').click()

        // creer un compte it('enregistrer un utilisateur',()=>{
        // button Signup/Login
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.get('[data-qa="login-button"]').contains('Login').should('be.visible')
        cy.get('[data-qa="login-email" ]').should('be.visible')
        cy.get('[data-qa="login-password" ]').should('be.visible')
        cy.contains(' New User Signup!')
        cy.get('[data-qa="signup-name"]').should('be.visible')
        cy.get('[data-qa="signup-email"]').should('be.visible')
        cy.get('[data-qa="signup-button"]').contains('Signup').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('Vanessa')

        /**...............................probleme........................................................................ */
        
       
           
        cy.wrap(dataIdElemnt.randomEmail()).then((email)=>{
        cy.get('[data-qa="signup-email"]').type(email)


        })   


      
        /**............................................................................................................... */
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

        // ajouter un nouveau produit
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()
        // image du produit
        cy.get('.view-product > img').should('be.visible')
        // grande div contenant les information sur le produit
        cy.get('[class="product-information"]').should('be.visible')
        cy.contains('Blue Top')
        cy.contains('Category: Women > Tops')
        cy.contains('Rs. 500')
        cy.contains('Quantity')
        cy.contains('Availability: In Stock')
        cy.contains('Condition: New')
        cy.contains('Brand: Polo')
        // champ de la quantite
        cy.get('[id="quantity"]').clear().type(2)
        // button Add to cart
        cy.get(':nth-child(5) > .btn').click()
        cy.contains('Added')
        cy.contains('Your product has been added to cart.')
        cy.contains('View Cart')
        // button Continue Shopping sur la modal
        cy.get('.modal-footer > .btn').click()
        // fin de l ajout

         // button Cart sur le header
         cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
         // button Proceed
         cy.get('.col-sm-6 > .btn').click()
         cy.contains('Address Details')
         cy.contains('Your delivery address')
         cy.contains('Mrs. Vanessa Melviane')
         cy.contains('Maviance')
         cy.contains('lidsn')
         cy.contains('catar')
         cy.contains('yaounde Douala tytyt')
         cy.contains('India')
         cy.contains('12121212')
         cy.contains('If you would like to add a comment about your order, please write it in the field below.')
         cy.get('[name="message"]').type('merci beaucoup!')
         // button place order
         cy.get(':nth-child(7) > .btn').click()
         //page Payment
         cy.url().should('include','payment')
         cy.contains('Payment')
         cy.contains('Name on Card')
         cy.get('[data-qa="name-on-card"]').type('Visa')
         cy.contains('Card Number')
         cy.get('[ data-qa="card-number"]').type('5555555')
         cy.contains('CVC')
         cy.get('[data-qa="cvc"]').type('555')
         cy.contains('Expiration')
         cy.get('[data-qa="expiry-month"]').type('juin')
         cy.get('[data-qa="expiry-year"]').type('2028')

         //button pay and comfirm order
         cy.get('[data-qa="pay-button"]').contains('Pay and Confirm Order').click()
         cy.contains('Order Placed!')
         cy.contains('Congratulations! Your order has been confirmed!')
         cy.get('.col-sm-9 > .btn-default').contains('Download Invoice').should('be.visible')
         cy.get('[data-qa="continue-button"]').contains('Continue').should('be.visible')








    })

    it.only(' s inscris avant le paiement d une commande',()=>{
        // cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()
        // button Signup/Login
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.get('[data-qa="login-button"]').contains('Login').should('be.visible')
        cy.get('[data-qa="login-email" ]').should('be.visible')
        cy.get('[data-qa="login-password" ]').should('be.visible')
        cy.contains(' New User Signup!')
        cy.get('[data-qa="signup-name"]').should('be.visible')
        cy.get('[data-qa="signup-email"]').should('be.visible')
        cy.get('[data-qa="signup-button"]').contains('Signup').should('be.visible')
        cy.get('[data-qa="signup-name"]').type('Vanessa')

        /**...............................probleme........................................................................ */
        
       
          // Utilisation dans un test Cypress
          cy.wrap(dataIdElemnt.randomEmail()).then((email) => {
            cy.log(`Email généré : ${email}`);
            // Vous pouvez maintenant utiliser `email` dans vos tests
            cy.get('[data-qa="signup-email"]').type(email);
          });
          
           
              
        // cy.get('[data-qa="signup-email"]').type('nelrire@gmail.com')


      
        /**............................................................................................................... */
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
        // fin de l enregistrement
        // ajouter un nouveau produit
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()
        // image du produit
        cy.get('.view-product > img').should('be.visible')
        // grande div contenant les information sur le produit
        cy.get('[class="product-information"]').should('be.visible')
        cy.contains('Blue Top')
        cy.contains('Category: Women > Tops')
        cy.contains('Rs. 500')
        cy.contains('Quantity')
        cy.contains('Availability: In Stock')
        cy.contains('Condition: New')
        cy.contains('Brand: Polo')
        // champ de la quantite
        cy.get('[id="quantity"]').clear().type(2)
        // button Add to cart
        cy.get(':nth-child(5) > .btn').click()
        cy.contains('Added')
        cy.contains('Your product has been added to cart.')
        cy.contains('View Cart')
        // button Continue Shopping sur la modal
        cy.get('.modal-footer > .btn').click()
        // fin de l ajout

         // button Cart sur le header
         cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
         // button Proceed
         cy.get('.col-sm-6 > .btn').click()
         cy.contains('Address Details')
         cy.contains('Your delivery address')
         cy.contains('Mrs. Vanessa Melviane')
         cy.contains('Maviance')
         cy.contains('lidsn')
         cy.contains('catar')
         cy.contains('yaounde Douala tytyt')
         cy.contains('India')
         cy.contains('12121212')
         cy.contains('If you would like to add a comment about your order, please write it in the field below.')
         cy.get('[name="message"]').type('merci beaucoup!')
         // button place order
         cy.get(':nth-child(7) > .btn').click()
         //page Payment
         cy.url().should('include','payment')
         cy.contains('Payment')
         cy.contains('Name on Card')
         cy.get('[data-qa="name-on-card"]').type('Visa')
         cy.contains('Card Number')
         cy.get('[ data-qa="card-number"]').type('5555555')
         cy.contains('CVC')
         cy.get('[data-qa="cvc"]').type('555')
         cy.contains('Expiration')
         cy.get('[data-qa="expiry-month"]').type('juin')
         cy.get('[data-qa="expiry-year"]').type('2028')

         //button pay and comfirm order
         cy.get('[data-qa="pay-button"]').contains('Pay and Confirm Order').click()
         cy.contains('Order Placed!')
         cy.contains('Congratulations! Your order has been confirmed!')
         cy.get('.col-sm-9 > .btn-default').contains('Download Invoice').should('be.visible')
         cy.get('[data-qa="continue-button"]').contains('Continue').should('be.visible')
        

        
    })

    it(' se connecter avant le paiement de la commande',()=>{

        
    })
})