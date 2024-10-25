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
    it('verifer la page des cas de tests', ()=>{
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click()
        cy.contains('Test Cases')
        cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:')




    })


    it.only('verifer la page des produits', ()=>{
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
})
