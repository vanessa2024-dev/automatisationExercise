import { dataElement } from "./data_test_id";
const dataIdElement= new dataElement()
describe('different test sur le produit',(()=>{
    beforeEach(()=>{
        cy.fixture(dataIdElement.fixture_path).then(( data_test)=>{

            cy.visit(data_test.url.url)
            
        // verifier que tous les elements du header sont visible

            cy.get(dataIdElement.shop_menu).then((headerElt)=>{
                for(let elt of data_test.header){
                    cy.get(headerElt).contains(elt)
                }
            })
            // element de la sidebar
            cy.get(dataIdElement.left_sidebar).then((produitsElt)=>{
                for(let elt of data_test.produits){
                    cy.get(produitsElt).contains(elt).should('be.visible')
                }
            })
       }) 
    })

    it.skip('enlever un produit sur la carte',(()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            // ajouter un nouveau produit
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
            cy.wait(5000)
            cy.contains(data_test.added)
            cy.contains(data_test.product_added)
            cy.contains(data_test.view_cart)
            cy.wait(3000)
            // button Continue Shopping sur la modal
            cy.get(dataIdElement.footer).click()
            // fin de l ajout
            // button Cart sur le header
            cy.get(dataIdElement.button_cart).click()
            cy.get('.breadcrumb').should('be.visible')
            cy.get(dataIdElement.cart_info_table).then(($elt)=>{
                // cy.wait(5000)
                // cy.get('[class="cart_menu"]').find('td').should('be.lessThan',6)
                cy.get($elt).should('be.visible')
                for(let elt of data_test.cart_infos_table){
                    cy.get($elt).contains(elt)
                }

            })
            cy.contains(data_test.contact_us_elt2.home)
            cy.contains(data_test.shopping_cart)
            cy.get(dataIdElement.product_delete).click()
            cy.contains(data_test.tableau_vide)
            cy.get(dataIdElement.cart_info_table).should('not.be.visible')
            cy.get(dataIdElement.click_here).should('have.attr','href')

        })

    }))

    it('voir la category des produits',(()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            cy.contains(data_test.produits[0])
            // lien women sur la side bar
            cy.get(dataIdElement.women_dress_id).contains(data_test.produits[1]).click()
            cy.get(dataIdElement.women_dress_id).then(($elt)=>{
                for(let elt of data_test.women_products){
                    cy.contains(elt)
                }
            })

            cy.get(dataIdElement.women_products).first().click()
            cy.contains(data_test.women_dress)
            // cy.get('#Women > .panel-body > ul ').first().click()
            

           


        })
    }))

    it('voir le panier et la marque du produits',(()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
             // button produit
             cy.get(dataIdElement.button_produit).should('be.visible').click()
            //all category
            //  cy.contains(data_test.items[0])
             // brand link
             cy.get(dataIdElement.polo_link).first().click()
             
             // titre de la page
             cy.contains(data_test.polo_brand)
             //url
             cy.url('include',data_test.url_polo)
           

        })
    }))

    it('chercher un produit et verifier sur la carte apres s etre connecte',(()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            // button produit hors connexion
            cy.get(dataIdElement.button_produit).should('be.visible').click()
            // image sur la page 
            cy.get(dataIdElement.sale_image).should('be.visible')
             // buton de recherche
             cy.get(dataIdElement.button_recherche).should('be.visible')
             cy.get(dataIdElement.search_product).should('be.visible').type(data_test.product_name)
             cy.get(dataIdElement.sumbmit_search).should('be.visible').click()
             //page de resultat
             cy.contains(data_test.search)
            // div issue du resultat
             cy.get(dataIdElement.featute_items).should('be.visible')

             // ajouter un nouveau produit
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
            // fin de l ajout

            // button Cart sur le header
            cy.get(dataIdElement.button_cart).click()
            // button Proceed
            cy.get(dataIdElement.button_proceed).should('be.visible')
            cy.get(dataIdElement.signup).click()
            cy.contains(data_test.signup_information.login_text)
            cy.get(dataIdElement.login_email).type(data_test.signup_information.email)
            cy.get(dataIdElement.login_password).type(data_test.signup_information.password)
            cy.get(dataIdElement.login_button_submit).click()
            // nouvelle informations sur le header

            cy.get(dataIdElement.header_id).then(()=>{
                for(let elt of data_test.after_login_signup){
                    cy.contains(elt)
                }
            })
            // button Cart sur le header
            cy.get(dataIdElement.button_cart).click()
        
 
            

            

        })
    }))

    it.only('ajouter une revue a un produit',(()=>{
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
             cy.get(dataIdElement.input_name).should('be.visible').type(data_test.signup_information.name)
             cy.get(dataIdElement.email_id).should('be.visible').type(data_test.signup_information.email)
             cy.get(dataIdElement.review_id).should('be.visible').type(data_test.signup_information.message)
             cy.get(dataIdElement.review_buttonId).should('be.visible').click()
             cy.contains(data_test.success_review)
           
            

           


        })
    }))
}))