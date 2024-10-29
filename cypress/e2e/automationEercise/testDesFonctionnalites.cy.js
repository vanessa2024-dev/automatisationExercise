describe('tester les differentes fonctionnalites du site', ()=>{
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
        cy.contains(' AutomationExercise Full-Fledged practice website for Automation Engineers')
        cy.contains('All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.')
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').contains('Test Cases').should('be.visible')
        cy.contains('APIs list for practice').should('be.visible')

    })

    it('contacter les administracteur du site avec le lien contact us', ()=>{
        cy.get('.shop-menu > .nav > :nth-child(8) > a').last().click()
        cy.contains('Contact us')
        cy.contains('Note: Below contact form is for testing purpose.')
        cy.get('[data-qa="name"]').should('be.visible').type('Vanessa')
        cy.get('[data-qa="email"]').should('be.visible').type('Vanessa@gmail.com')
        cy.get('[data-qa="subject"]').should('be.visible').type(' les villes du monde')
        cy.get('[data-qa="message"]').should('be.visible').type('les villes de mon village?')
        // cy.get('[class="form-control"]').should('be.visible').type('')


        cy.contains('Get In Touch')
        cy.contains('Feedback For Us')
        cy.contains('We really appreciate your response to our website.')
        cy.contains('Kindly share your feedback with us at feedback@automationexercise.com.')

        cy.contains('If you have any suggestion areas or improvements, do let us know. We will definitely work on it.')
        cy.contains('Thank you')
        cy.get('[class="btn btn-primary pull-left submit_form"]').contains('Submit').should('be.visible').click()
        cy.contains('Success! Your details have been submitted successfully.')
        cy.get('#form-section > .btn').contains('Home').should('be.visible').click()



    })
    it('verifer la page des cas de tests le body sur', ()=>{
        cy.contains('AutomationExercise')
        cy.contains('Full-Fledged practice website for Automation Engineers')
        cy.contains('All QA engineers can use this website for automation practice and ')
        cy.contains(' either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.')
        cy.contains('APIs list for practice')
        cy.get('[ class="test_cases_list"]').contains('Test Cases').should('be.visible').click()
        cy.contains('Test Cases')
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')
        cy.get('[ class="panel panel-default"]').contains('Feedback for Us').should('be.visible')
        cy.get('[id="feedback"]').should('be.visible')
        cy.contains('We have identified above scenarios and added in the list.')
        cy.contains('You can explore more test cases in the website and if you find new test scenario that is not covered in above list, do let us know. We will definitely add that in above list.')
        // cy.contains('If you think, this website should cover up any particular feature, kindly share with us at feedback@automationexercise.com . We will work on that part. Your feedback matters a lot. ')
        // cy.get('[class="container"]').find('div').should('equal',27  )
        cy.contains('Test Case 1: Register User')
        cy.contains('Test Case 2: Login User with correct email and password')
        cy.contains('Test Case 3: Login User with incorrect email and password')
        cy.contains('Test Case 4: Logout User')
        cy.contains('Test Case 5: Register User with existing email')
        cy.contains('Test Case 6: Contact Us Form')
        cy.contains('Test Case 7: Verify Test Cases Page')
        cy.contains('Test Case 8: Verify All Products and product detail page')
        cy.contains('Test Case 9: Search Product')
        cy.contains('Test Case 10: Verify Subscription in home page')
        cy.contains('Test Case 11: Verify Subscription in Cart page')
        cy.contains('Test Case 12: Add Products in Cart')
        cy.contains('Test Case 13: Verify Product quantity in Cart')
        cy.contains('Test Case 14: Place Order: Register while Checkout')
        cy.contains('Test Case 15: Place Order: Register before Checkout')
        cy.contains('Test Case 16: Place Order: Login before Checkout')
        cy.contains('Test Case 17: Remove Products From Cart')
        cy.contains('Test Case 18: View Category Products')
        cy.contains('Test Case 19: View & Cart Brand Products')
        cy.contains('Test Case 20: Search Products and Verify Cart After Login')
        cy.contains('Test Case 21: Add review on product')
        cy.contains('Test Case 22: Add to cart from Recommended items')
        cy.contains('Test Case 23: Verify address details in checkout page')
        cy.contains('Test Case 24: Download Invoice after purchase order')
        cy.contains("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality")
        cy.contains("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality")
        




    })
    it('verifier la page des cas de tests sur le header',()=>{
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click()
        cy.contains('Test Cases')
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')

    })


    it('verifer la page des produits', ()=>{
        // buton product
        cy.get('.shop-menu > .nav > :nth-child(2)').click()
        // buton de recherche
        cy.get('#search_product').should('be.visible')
        // element de la sidebar
        cy.contains('Category')
        cy.contains('Women')
        cy.contains('Men')
        cy.contains('Kids')
         cy.contains('Brands')
        cy.contains('Polo')
        cy.contains('H&M')
        cy.contains('Madame')
        cy.contains('Mast & Harbour')
        cy.contains('Babyhug')
        cy.contains('Allen Solly Junior')
        cy.contains('Kookie Kids')
        cy.contains('Biba')
        cy.contains('All Products')
        // element sur le hover
        cy.get('[id="cartModal"]').trigger('mouseover', {force:true})
        cy.contains('Add to cart')
        // button View cart
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()
        // tester les elements de page de detail
        cy.get('.view-product > img').should('be.visible')
        
        cy.get('label').should('be.visible')
        cy.get(':nth-child(5) > .btn').should('be.visible')
        // element du formulaire
        cy.get('.category-tab > :nth-child(1) > .nav').contains('Write Your Review').should('be.visible')
        cy.get('#name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#review').should('be.visible')
        cy.get('#button-review').should('be.visible')
        





        
    })
    it('tester le button de recherches', ()=>{
        // buton product
        cy.get('.shop-menu > .nav > :nth-child(2)').click()
        // image sur la page 
        cy.get('#sale_image').should('be.visible')
        // element de la sidebar
        cy.contains('Category')
        cy.contains('Women')
        cy.contains('Men')
        cy.contains('Kids')
         cy.contains('Brands')
        cy.contains('Polo')
        cy.contains('H&M')
        cy.contains('Madame')
        cy.contains('Mast & Harbour')
        cy.contains('Babyhug')
        cy.contains('Allen Solly Junior')
        cy.contains('Kookie Kids')
        cy.contains('Biba')
        cy.contains('All Products')
        // element sur le hover
        cy.get('[id="cartModal"]').trigger('mouseover', {force:true})
        cy.contains('Add to cart')
        // buton de recherche
        cy.get('#search_product').should('be.visible').tape('polo')
        cy.get('#submit_search').should('be.visible').click()
        //page de recherche
        cy.contains('Searched Products')
        
       

        
    })
    it(' Verifier la souscription sur la page d accueil', ()=>{

        cy.get('[id="footer"]').scrollIntoView().should('be.visible')
        cy.contains('Subscription')
        cy.contains('Get the most recent updates from our site and be updated your self...')
        cy.get('[id="susbscribe_email"]').should('be.visible').type('vanessa@gmail.com')
        cy.get('[id="subscribe"]').should('be.visible').click()
        cy.contains('You have been successfully subscribed!')
    })

    it('verifier la souscription sur la page des cartes', ()=>{
        cy.get('.shop-menu > .nav > :nth-child(2)').click()
        cy.get('[id="footer"]').scrollIntoView().should('be.visible')
        cy.contains('Subscription')
        cy.contains('Get the most recent updates from our site and be updated your self...')
        cy.get('[id="susbscribe_email"]').should('be.visible').type('vanessa@gmail.com')
        cy.get('[id="subscribe"]').should('be.visible').click()
        cy.contains('You have been successfully subscribed!')
    })

    it('verifier la quantite des produits sur la carte', ()=>{
        // button View cart
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


        // element du formulaire
        cy.get('.category-tab > :nth-child(1) > .nav').contains('Write Your Review').should('be.visible')
        cy.get('#name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#review').should('be.visible')
        cy.get('#button-review').should('be.visible')

        


    })
    it.only('ajouter un produit a la carte',()=>{
        // button View cart
        // cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()
        // element sur le hover
        cy.get('[id="cartModal"]').trigger('mouseover', {force:true})
        cy.get(':nth-child(5) > .btn').click({force:true})
        

    })
}) 
