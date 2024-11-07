import { dataElement } from "./data_test_id"
const dataIdElement =new dataElement()

describe('tester les differentes fonctionnalites du site', ()=>{
    beforeEach(()=>{
        cy.fixture(dataIdElement.fixture_path).then(( data_test)=>{

            cy.visit(data_test.url.url)
            
        // verifier que tous les elements du header sont visible

            cy.get(dataIdElement.shop_menu).then((headerElt)=>{
                for(let elt of data_test.header){
                    cy.get(headerElt).contains(elt).should('be.visible')
                }
            })

            // element du carroussel
            cy.get(dataIdElement.slide_carroussel).then((carousselElt)=>{
                for(let elt of data_test.caroussel){
                    cy.get(carousselElt).contains(elt).should('be.visible')
                }
            })
       }) 
    })
        

    

    it('contacter les administracteur du site avec le lien contact us', ()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            // button contact us
            cy.get(dataIdElement.contact_button).last().click()
            // element present sur la page
            // cy.get(dataIdElement.slide_carroussel).then((carousselElt)=>{
            //     for(let elt of data_test.caroussel){
            //         cy.get(carousselElt).contains(elt).should('be.visible')
            //     }
            // })
            cy.get(dataIdElement.contact_page).then((contactElt)=>{
                for(let elt of data_test.contact_us_elt1){
                    cy.get(contactElt).contains(elt).should('be.visible')
                }
            })
             cy.get(dataIdElement.name_data).should('be.visible').type(data_test.signup_information.name)
            cy.get(dataIdElement.input_email).should('be.visible').type(data_test.signup_information.email)
            cy.get(dataIdElement.subject).should('be.visible').type(data_test.signup_information.subject)
            cy.get(dataIdElement.message).should('be.visible').type(data_test.signup_information.message)
            // button submit du formulaire
            cy.get(dataIdElement.contact_submit_form).should('be.visible').click()
            cy.contains(data_test.contact_us_elt2.success_text)
            // button home
            cy.get(dataIdElement.home).contains(data_test.contact_us_elt2.home).should('be.visible').click()

        })
        



    })
    it('verifer la page des cas de tests le body sur le body', ()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            // information sur le caroussel

            cy.get(dataIdElement.slide_carroussel).then((carousselElt)=>{
                for(let elt of data_test.caroussel){
                    cy.get(carousselElt).contains(elt).should('be.visible')
                }
            })
            // button case test sur le caroussel
            cy.get(dataIdElement.case_tests_button_onCaroussel).should('be.visible').click({force:true})
            // div du texte Feedback
            cy.get(dataIdElement.feedback_id).should('be.visible')
            
            // element sur la page des test cases
            cy.get(dataIdElement.form).then((casdetestElt)=>{
                for(let elt of data_test.casdetest_page){
                    cy.get(casdetestElt).contains(elt).should('be.visible')
                }
            })
            
        })
    })
    it('verifier la page des cas de tests sur le header',()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            cy.get(dataIdElement.case_tests_button_onCaroussel).click()
            cy.contains(data_test.caroussel[3])
            cy.contains(data_test.casdetest_page[2])
    
        })
        
    })


    it('verifer la page des produits', ()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{

            // buton product
            cy.get(dataIdElement.product_button).click()
            // buton de recherche
            cy.get(dataIdElement.search_product).should('be.visible')
            // element de la sidebar
            cy.get(dataIdElement.left_sidebar).then((produitsElt)=>{
                for(let elt of data_test.produits){
                    cy.get(produitsElt).contains(elt).should('be.visible')
                }
            })
            // element sur le body
            cy.get(dataIdElement.featute_items).then((itemsElt)=>{
                for(let elt of data_test.items){
                    cy.get(itemsElt).contains(elt).should('be.visible')
                }
            })
            // element sur le hover
            cy.get(dataIdElement.cart_modal).trigger('mouseover', {force:true})
            
            // button View cart
            cy.get(dataIdElement.button_produit).should('be.visible').click()
            // tester les elements de page de detail
            cy.get(dataIdElement.image).should('be.visible')
            
            cy.get(dataIdElement.label).should('be.visible')
            cy.get(dataIdElement.button_Add_cart).should('be.visible')
            // element du formulaire
            cy.get(dataIdElement.formulaire_surPage_produit).contains(data_test.review).should('be.visible')
            cy.get(dataIdElement.input_name).should('be.visible')
            cy.get(dataIdElement.email_id).should('be.visible')
            cy.get(dataIdElement.review_id).should('be.visible')
            cy.get(dataIdElement.review_buttonId).should('be.visible')
        })
    })
    it('tester le button de recherches', ()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            // buton product
            cy.get(dataIdElement.product_button).click()
            // image sur la page 
            cy.get(dataIdElement.sale_image).should('be.visible')
            // element de la sidebar
            cy.get(dataIdElement.left_sidebar).then((produitsElt)=>{
                for(let elt of data_test.produits){
                    cy.get(produitsElt).contains(elt).should('be.visible')
                }
            })
            cy.get(dataIdElement.featute_items).then((itemsElt)=>{
                for(let elt of data_test.items){
                    cy.get(itemsElt).contains(elt).should('be.visible')
                }
            })
            // element sur le hover
            cy.get(dataIdElement.cart_modal).trigger('mouseover', {force:true})
            cy.contains(data_test.items[0])
            // buton de recherche
            cy.get(dataIdElement.button_recherche).should('be.visible')
            cy.get(dataIdElement.search_product).should('be.visible').type(data_test.product_name)
            cy.get(dataIdElement.sumbmit_search).should('be.visible').click()
            //page de recherche
            cy.contains(data_test.search)

        })
        
     })
    it(' Verifier la souscription sur la page d accueil', ()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            cy.get(dataIdElement.home_footer).scrollIntoView().should('be.visible')
            cy.contains(data_test.souscription)
            cy.contains(data_test.footer_elt)
            cy.get(dataIdElement.suscribe_email).should('be.visible').type(data_test.signup_information.email)
            cy.get(dataIdElement.suscribe).should('be.visible').click()
            cy.contains(data_test.success_souscription)

        })
    })

    it('verifier la souscription sur la page des cartes', ()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            cy.get(dataIdElement.product_button).click()
            cy.get(dataIdElement.home_footer).scrollIntoView().should('be.visible')
            cy.contains(data_test.souscription)
            cy.contains(data_test.footer_elt)
            cy.get(dataIdElement.suscribe_email).should('be.visible').type('vanessa@gmail.com')
            cy.get(dataIdElement.suscribe).should('be.visible').click()
            cy.contains(data_test.success_souscription)

        })
        
    })

    it.only('verifier la quantite des produits sur la carte', ()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
                // button View cart
        cy.get(dataIdElement.button_produit).should('be.visible').click()
        // image du produit
        cy.get(dataIdElement.image).should('be.visible')
        // grande div contenant les information sur le produit
        cy.get(dataIdElement.product_information).should('be.visible')

        cy.get(dataIdElement.product_information).then((productElt)=>{
            for(let elt of data_test.product_element){
                cy.get(productElt).contains(elt).should('be.visible')
            }
        })
        // champ de la quantite
        cy.get(dataIdElement.quantity_input).clear().type(2)
        // button Add to cart
        cy.get(dataIdElement.button_Add_cart).click()
        cy.contains(data_test.added)
        cy.contains(data_test.product_added)
        cy.contains(data_test.view_cart)
        // button Continue Shopping sur la modal
        cy.get(dataIdElement.footer).click()


        // element du formulaire
        cy.get(dataIdElement.formulaire_surPage_produit).contains(data_test.write_your_review).should('be.visible')
        cy.get(dataIdElement.input_name).should('be.visible')
        cy.get(dataIdElement.email_id).should('be.visible')
        cy.get(dataIdElement.review_id).should('be.visible')
        cy.get(dataIdElement.review_buttonId).should('be.visible')

        })
        

        


    })
    it('ajouter un produit a la carte',()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{

            // button View cart
            // cy.get(dataIdElement.button_produit).should('be.visible').click()
            // element sur le hover
            cy.get(dataIdElement.cart_modal).trigger('mouseover', {force:true})
            cy.get(dataIdElement.button_Add_cart).last().click({force:true})
        })

        

    })
}) 
