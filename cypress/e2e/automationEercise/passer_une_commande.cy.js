import { dataElement } from "./data_test_id"
const dataIdElemnt =new dataElement()


describe('passer une commande',()=>{
    beforeEach(()=>{
      cy.fixture(dataIdElemnt.fixture_path).then(( data_test)=>{

        cy.visit(data_test.url.url)
        
    // verifier que tous les elements du header sont visible

        cy.get(dataIdElemnt.shop_menu).then((headerElt)=>{
            for(let elt of data_test.header){
                cy.get(headerElt).contains(elt).should('be.visible')
            }
        })

        // element du carroussel
        cy.get(dataIdElemnt.slide_carroussel).then((carousselElt)=>{
            for(let elt of data_test.caroussel){
                cy.get(carousselElt).contains(elt).should('be.visible')
            }
        })
   }) 
       

     })
    
    it(' s inscris lors du paiement d une commande',function paiement(){

      cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
            // ajouter un nouveau produit
        // button Add Product du hover
        cy.get(dataIdElemnt.button_produit).should('be.visible').click()
        // redirection vers une autre page
        // image du produit
        cy.get(dataIdElemnt.image).should('be.visible')
        // grande div contenant les information sur le produit
        cy.get(dataIdElemnt.product_information).then(()=>{
          for(let elt of data_test.product_element){
            cy.contains(elt).should('be.visible')
          }
        })
        // champ de la quantite
        cy.get(dataIdElemnt.quantity_input).clear().type(2)
        
        // button Add to cart
        

        cy.get(dataIdElemnt.button_Add_cart).click()
         cy.wait(3000) 
        
        cy.contains(data_test.added)
        cy.contains(data_test.product_added)
        cy.contains(data_test.view_cart)
         cy.wait(3000)
        // button Continue Shopping sur la modal
        cy.get(dataIdElemnt.footer).click({force:true})
         cy.wait(5000)
        // button Cart sur le header
        cy.get(dataIdElemnt.button_cart).click()
        // button Proceed
        cy.get(dataIdElemnt.button_proceed).click()
        // element sur la modal
        cy.contains(data_test.checkout)
        cy.contains(data_test.register_login)
        cy.contains(data_test.register_login_page)
        // button Continue on Cart
        cy.get(dataIdElemnt.footer).click()

        // creer un compte it('enregistrer un utilisateur',()=>{
        // button Signup/Login
        cy.get(dataIdElemnt.signup).click()
        cy.get(dataIdElemnt.login_button_submit).contains('Login').should('be.visible')
        cy.get(dataIdElemnt.login_email).should('be.visible')
        cy.get(dataIdElemnt.login_password).should('be.visible')
        cy.contains(data_test.signup_information.signup_text)
        cy.get(dataIdElemnt.signup_name).should('be.visible')
        cy.get(dataIdElemnt.signup_email).should('be.visible')
        cy.get(dataIdElemnt.signup_button_submit).contains('Signup').should('be.visible')
        cy.get(dataIdElemnt.signup_name).type(data_test.signup_information.name)

        /**...............................probleme........................................................................ */
      
        cy.wrap(dataIdElemnt.randomEmail()).then((email)=>{
        cy.get(dataIdElemnt.signup_email).type(email)


        })   

        /**............................................................................................................... */
       // button signup

        cy.get(dataIdElemnt.signup_button_submit).click()
        // element de la page

        cy.get(dataIdElemnt.signup_form).then(()=>{
          for(let elt of data_test.information_account){
              cy.contains(elt)
          }
      })
       
        cy.get(dataIdElemnt.gender2).click()
            cy.get(dataIdElemnt.name_data).should('be.visible').and('have.value','vanessa')
            cy.get(dataIdElemnt.input_email).should('be.visible')
            cy.get(dataIdElemnt.input_password).should('be.visible').type(data_test.signup_information.password)
            //Day
            cy.get(dataIdElemnt.input_days).select(4)
            //Month
            cy.get(dataIdElemnt.input_months).select(data_test.signup_information.months)
            //Year
            cy.get(dataIdElemnt.input_years).select('2002')
            cy.get(dataIdElemnt.newletter).click()
            cy.get(dataIdElemnt.Option).click()
            cy.get(dataIdElemnt.firstname_input).type(data_test.signup_information.firstname)
            cy.get(dataIdElemnt.lastname_input).type(data_test.signup_information.lastname)
            cy.get(dataIdElemnt.compagny_input).type(data_test.signup_information.compagny)
            cy.get(dataIdElemnt.address1_input).type(data_test.signup_information.address1)
            cy.get(dataIdElemnt.address2_input).type(data_test.signup_information.address2)
            cy.get(dataIdElemnt.country_input).select(data_test.signup_information.country)
            cy.get(dataIdElemnt.state_input).type(data_test.signup_information.state)
            cy.get(dataIdElemnt.city_input).type(data_test.signup_information.city)
            cy.get(dataIdElemnt.zipcode_input).type(data_test.signup_information.zipcode)
            cy.get(dataIdElemnt.mobile_number_input).type(data_test.signup_information.mobile_number)
            cy.get(dataIdElemnt.create_account).click()

      // message de reussite
        cy.get(dataIdElemnt.form).then(()=>{
          for(let elt of data_test.sucess_information){
              cy.contains(elt)
          }
      })
      // button continue sur la modal
        cy.get(dataIdElemnt.button_continue).click()

        cy.get(dataIdElemnt.header_id).should('be.visible')

        // nouvelle informations sur le header

                cy.get(dataIdElemnt.header_id).then(()=>{

                    for(let elt of data_test.after_login_signup){
                        cy.contains(elt)
                    }
                    
                })

        // ajouter un nouveau produit
        cy.get(dataIdElemnt.button_produit).should('be.visible').click()
        // image du produit
        cy.get(dataIdElemnt.image).should('be.visible')
        // grande div contenant les information sur le produit
        cy.get(dataIdElemnt.product_information).should('be.visible')
        cy.get(dataIdElemnt.product_information).then((productElt)=>{
            for(let elt of data_test.product_element){
                cy.get(productElt).contains(elt).should('be.visible')
            }
        })
        // champ de la quantite
        cy.get(dataIdElemnt.quantity_input).clear().type(2)
        // button Add to cart
        cy.get(dataIdElemnt.button_Add_cart).click()
        cy.contains(data_test.added)
        cy.contains(data_test.product_added)
        cy.contains(data_test.view_cart)
        // button Continue Shopping sur la modal
        cy.get(dataIdElemnt.footer).click()
        // fin de l ajout

         // button Cart sur le header
         cy.get(dataIdElemnt.button_cart).click()
         // button Proceed
         cy.get(dataIdElemnt.button_proceed).click()
         // element sur la page View_cart
         cy.get(dataIdElemnt.element_page_view).then(()=>{
          for(let elt of data_test.after_proceed_events){
            cy.contains(elt).should('be.visible')
          }
         })
        //  
         cy.contains(data_test.placeholder_message)
         cy.get(dataIdElemnt.message).type(data_test.signup_information.message)
         // button place order
         cy.get(dataIdElemnt.button_place_order).click()
         //page Payment
          cy.get(dataIdElemnt.cart_items).then(()=>{
            for(let elt of data_test.order_information){
              cy.contains(elt).should('be.visible')
            }
         })
         // l url de la page
         cy.url().should('include','payment')
         // formulaire
         cy.get(dataIdElemnt.card_on_name).type(data_test.payment_form_elt.card_name)
         cy.get(dataIdElemnt.card_on_number).type(data_test.payment_form_elt.number)
         cy.get(dataIdElemnt.cvc).type(data_test.payment_form_elt.cvc)
         cy.get(dataIdElemnt.expiry_month).type(data_test.payment_form_elt.month)
         cy.get(dataIdElemnt.expiry_year).type(data_test.payment_form_elt.year)

         //button pay and comfirm order
         cy.get(dataIdElemnt.pay_button).click()
         cy.get(dataIdElemnt.form).then(()=>{
          for(let elt of data_test.success_payment){
            cy.contains(elt).should('be.visible')
          }
         })
         //button invoice
         cy.get(dataIdElemnt.button_invoice).should('be.visible')
         //button continued
         cy.get(dataIdElemnt.button_continue).should('be.visible')

      })
        








    })

    it(' s inscris avant le paiement d une commande',()=>{
      cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
        // button signup
        cy.get(dataIdElemnt.signup).click()
        cy.get(dataIdElemnt.login_button_submit).contains(data_test.signup_information.button_login).should('be.visible')
        cy.get(dataIdElemnt.login_email).should('be.visible')
        cy.get(dataIdElemnt.login_password).should('be.visible')
        cy.contains(data_test.signup_information.signup_text)
        cy.get(dataIdElemnt.signup_name).should('be.visible')
        cy.get(dataIdElemnt.signup_email).should('be.visible')
        cy.get(dataIdElemnt.signup_button_submit).contains('Signup').should('be.visible')
        cy.get(dataIdElemnt.signup_name).type(data_test.signup_information.name)
        /**...............................probleme........................................................................ */
        
       
          // Utilisation dans un test Cypress
          cy.wrap(dataIdElemnt.randomEmail()).then((email) => {
            cy.log(`Email généré : ${email}`);
            // Vous pouvez maintenant utiliser `email` dans vos tests
            cy.get(dataIdElemnt.signup_email).type(email);
          });
 
        /**............................................................................................................... */
       // enregistrement
        
      // button signup
      cy.get(dataIdElemnt.signup_button_submit).click()
      // elememt sur la page 
      cy.get(dataIdElemnt.signup_form).then(()=>{
        for(let elt of data_test.information_account){
            cy.contains(elt)
        }
    }) 
      cy.get(dataIdElemnt.gender2).click()

      cy.get(dataIdElemnt.name_data).should('be.visible').and('have.value','vanessa')
      cy.get(dataIdElemnt.input_email).should('be.visible')
      cy.get(dataIdElemnt.input_password).should('be.visible').type(data_test.signup_information.password)
      //Day
      cy.get(dataIdElemnt.input_days).select(4)
      //Month
      cy.get(dataIdElemnt.input_months).select(data_test.signup_information.months)
      //Year
      cy.get(dataIdElemnt.input_years).select('2002')
      cy.get(dataIdElemnt.newletter).click()
      cy.get(dataIdElemnt.Option).click()
      cy.get(dataIdElemnt.firstname_input).type(data_test.signup_information.firstname)
      cy.get(dataIdElemnt.lastname_input).type(data_test.signup_information.lastname)
      cy.get(dataIdElemnt.compagny_input).type(data_test.signup_information.compagny)
      cy.get(dataIdElemnt.address1_input).type(data_test.signup_information.address1)
      cy.get(dataIdElemnt.address2_input).type(data_test.signup_information.address2)
      cy.get(dataIdElemnt.country_input).select(data_test.signup_information.country)
      cy.get(dataIdElemnt.state_input).type(data_test.signup_information.state)
      cy.get(dataIdElemnt.city_input).type(data_test.signup_information.city)
      cy.get(dataIdElemnt.zipcode_input).type(data_test.signup_information.zipcode)
      cy.get(dataIdElemnt.mobile_number_input).type(data_test.signup_information.mobile_number)
     // button create an  account
      cy.get(dataIdElemnt.create_account).click()

          // message de reussite
          cy.get(dataIdElemnt.form).then(()=>{
            for(let elt of data_test.sucess_information){
                cy.contains(elt)
            }
        })
        // button continue 
    cy.get(dataIdElemnt.button_continue).click()
        cy.get(dataIdElemnt.header_id).should('be.visible')

       // nouvelle informations sur le header

        cy.get(dataIdElemnt.header_id).then(()=>{

          for(let elt of data_test.after_login_signup){
              cy.contains(elt)
          }
          
      })
        cy.get(dataIdElemnt.slide_id).should('be.visible')
        // fin de l enregistrement.........................................

        // ajouter un nouveau produit
        cy.get(dataIdElemnt.button_produit).should('be.visible').click()
        // image du produit
        cy.get(dataIdElemnt.image).should('be.visible')
        // grande div contenant les information sur le produit
        cy.get(dataIdElemnt.product_information).should('be.visible')

        cy.get(dataIdElemnt.product_information).then((productElt)=>{
          for(let elt of data_test.product_element){
              cy.get(productElt).contains(elt).should('be.visible')
          }
      })
        // champ de la quantite
        cy.get(dataIdElemnt.quantity_input).clear().type(2)
        // button Add to cart
        
        cy.get(dataIdElemnt.button_Add_cart).click()
        cy.wait(5000)
        cy.contains(data_test.added)
        cy.contains(data_test.product_added)
        cy.contains(data_test.view_cart)
        cy.wait(3000)
        // button Continue Shopping sur la modal
        cy.get(dataIdElemnt.footer).click()
        // fin de l ajout

         // button Cart sur le header
         cy.get(dataIdElemnt.button_cart).click()
         // button Proceed
         cy.get(dataIdElemnt.button_proceed).click()
         // element sur la page View_cart
         cy.get(dataIdElemnt.element_page_view).then(()=>{
          for(let elt of data_test.after_proceed_events){
            cy.contains(elt).should('be.visible')
          }
         })
          cy.get(dataIdElemnt.message).type(data_test.signup_information.message)
         // button place order
         cy.get(dataIdElemnt.button_place_order).click()
         //page Payment
         cy.get(dataIdElemnt.cart_items).then(()=>{
          for(let elt of data_test.order_information){
            cy.contains(elt).should('be.visible')
          }
       })
       // l url de la page
       cy.url().should('include','payment')
       // formulaire
       cy.get(dataIdElemnt.card_on_name).type(data_test.payment_form_elt.card_name)
       cy.get(dataIdElemnt.card_on_number).type(data_test.payment_form_elt.number)
       cy.get(dataIdElemnt.cvc).type(data_test.payment_form_elt.cvc)
       cy.get(dataIdElemnt.expiry_month).type(data_test.payment_form_elt.month)
       cy.get(dataIdElemnt.expiry_year).type(data_test.payment_form_elt.year)

          //button pay and comfirm order
          cy.get(dataIdElemnt.pay_button).click()
          cy.get(dataIdElemnt.form).then(()=>{
           for(let elt of data_test.success_payment){
             cy.contains(elt).should('be.visible')
           }
          })
          //button invoice
          cy.get(dataIdElemnt.button_invoice).should('be.visible')
          //button continued
          cy.get(dataIdElemnt.button_continue).should('be.visible')

        
    })
  })

    it.only(' se connecter avant le paiement de la commande',()=>{

      cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
          cy.get(dataIdElemnt.signup).click()
          cy.contains(data_test.signup_information.login_text)
          cy.get(dataIdElemnt.login_email).type(data_test.signup_information.email)
          cy.get(dataIdElemnt.login_password).type(data_test.signup_information.password)
          cy.get(dataIdElemnt.login_button_submit).click()
          // nouvelle informations sur le header

          cy.get(dataIdElemnt.header_id).then(()=>{
              for(let elt of data_test.after_login_signup){
                  cy.contains(elt)
            }
        })


         // ajouter un nouveau produit
         cy.get(dataIdElemnt.button_produit).should('be.visible').click()
         // image du produit
         cy.get(dataIdElemnt.image).should('be.visible')
         // grande div contenant les information sur le produit
         cy.get(dataIdElemnt.product_information).should('be.visible')
 
         cy.get(dataIdElemnt.product_information).then((productElt)=>{
           for(let elt of data_test.product_element){
               cy.get(productElt).contains(elt).should('be.visible')
           }
       })
         // champ de la quantite
         cy.get(dataIdElemnt.quantity_input).clear().type(2)
         // button Add to cart
         
         cy.get(dataIdElemnt.button_Add_cart).click()
         cy.wait(5000)
         cy.contains(data_test.added)
         cy.contains(data_test.product_added)
         cy.contains(data_test.view_cart)
         cy.wait(3000)
         // button Continue Shopping sur la modal
         cy.get(dataIdElemnt.footer).click()
         // fin de l ajout
 
          // button Cart sur le header
          cy.get(dataIdElemnt.button_cart).click()
          // button Proceed
          cy.get(dataIdElemnt.button_proceed).click()
          // element sur la page View_cart
          cy.get(dataIdElemnt.element_page_view).then(()=>{
           for(let elt of data_test.after_proceed_events){
             cy.contains(elt).should('be.visible')
           }
          })
           cy.get(dataIdElemnt.message).type(data_test.signup_information.message)
          // button place order
          cy.get(dataIdElemnt.button_place_order).click()
          //page Payment
          cy.get(dataIdElemnt.cart_items).then(()=>{
           for(let elt of data_test.order_information){
             cy.contains(elt).should('be.visible')
           }
        })
        // l url de la page
        cy.url().should('include','payment')
        // formulaire
        cy.get(dataIdElemnt.card_on_name).type(data_test.payment_form_elt.card_name)
        cy.get(dataIdElemnt.card_on_number).type(data_test.payment_form_elt.number)
        cy.get(dataIdElemnt.cvc).type(data_test.payment_form_elt.cvc)
        cy.get(dataIdElemnt.expiry_month).type(data_test.payment_form_elt.month)
        cy.get(dataIdElemnt.expiry_year).type(data_test.payment_form_elt.year)
 
        //button pay and comfirm order
        cy.get(dataIdElemnt.pay_button).click()
        cy.get(dataIdElemnt.form).then(()=>{
        for(let elt of data_test.success_payment){
          cy.contains(elt).should('be.visible')
        }
        })
        //button invoice
        cy.get(dataIdElemnt.button_invoice).should('be.visible')
        //button continued
        cy.get(dataIdElemnt.button_continue).should('be.visible')
            
            
      })

        
    })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  })