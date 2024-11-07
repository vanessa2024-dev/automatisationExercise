import { dataElement } from "./data_test_id"
const dataIdElement =new dataElement()

describe('se deconnecter du site',()=>{
    beforeEach(()=>{
        cy.fixture(dataIdElement.fixture_path).then(( data_test)=>{

            cy.visit(data_test.url.url)
            
        // verifier que tous les elements du header sont visible

            cy.get(dataIdElement.shop_menu).then((headerElt)=>{
                for(let elt of data_test.header){
                    cy.get(headerElt).contains(elt)
                }
            })
       }) 
    })

    it('se loger avant de se deconnecter',()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{
            // button signup/Login
            cy.get(dataIdElement.signup).click()
            cy.get(dataIdElement.login_email).type(data_test.signup_information.email)
            cy.get(dataIdElement.login_password).type(data_test.signup_information.password)
            // button Login
            cy.get(dataIdElement.login_button_submit).click()
             // nouvelle informations sur le header

             cy.get(dataIdElement.header_id).then(($elt)=>{
                cy.get($elt).should('be.visible')

                for(let elt of data_test.after_login_signup){
                    cy.contains(elt)
                }
                
            })
            cy.get(dataIdElement.slide_id).should('be.visible')
            // button Logout
            cy.get(dataIdElement.signup).click()
            cy.contains(data_test.signup_information.signup_text)
            cy.contains(data_test.signup_information.login_text)
            // redirection vers la page de connexion
            
            cy.get(dataIdElement.login_button_submit).contains('Login').should('be.visible')
            cy.get(dataIdElement.login_email).should('be.visible')
            cy.get(dataIdElement.login_password).should('be.visible')
            

        })
        



    })
})