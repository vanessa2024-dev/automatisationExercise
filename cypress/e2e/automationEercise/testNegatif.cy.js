import {dataElement} from "./data_test_id"
const dataIdElemnt=new dataElement()
describe('test negatif' , ()=>{

    beforeEach(()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{

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

    it('se connecter avec des identifiants invalid',()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{

            //button signup
            cy.get(dataIdElemnt.signup).click()
            cy.contains(data_test.signup_information.login_text)
            cy.get(dataIdElemnt.login_email).type(data_test.signup_information.email)
            cy.get(dataIdElemnt.login_password).type(data_test.signup_information.mobile_number)
            cy.get(dataIdElemnt.login_button_submit).click()
            cy.contains(data_test.message_echec)

        })
        
    })

    it('se connecter avec un email manquant',()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
                //button signup
        cy.get(dataIdElemnt.signup).click()
        cy.contains(data_test.signup_information.login_text)
        cy.get(dataIdElemnt.login_email).should('have.prop','required')
        cy.get(dataIdElemnt.login_password).type(data_test.signup_information.password)
        cy.get(dataIdElemnt.signup_button_submit).click()
        // cy.contains('Your email or password is incorrect! ')

        })
        


    })
    it('se connecter avec mot de pass  manquant',()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
                //button signup
            cy.get(dataIdElemnt.signup).click()
            cy.contains(data_test.signup_information.login_text)
            cy.get(dataIdElemnt.login_email).should('be.visible').type(data_test.signup_information.email)
            cy.get(dataIdElemnt.login_password).should('have.prop','required')
            cy.get(dataIdElemnt.signup_button_submit).click()

        })
        
        

    })
    it('se connecter avec un format d email invalid ',()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
            //button signup
            cy.get(dataIdElemnt.signup).click()
            cy.contains(data_test.signup_information.login_text)
            cy.get(dataIdElemnt.login_email).type(data_test.signup_information.incorrect_email)
            cy.get(dataIdElemnt.login_password).type(data_test.signup_information.password)
            cy.get(dataIdElemnt.signup_button_submit).click()
        })

        
        

    })
    it ('creer un compte avec email deja utilise', ()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
            cy.get(dataIdElemnt.signup).click()
            // login place
            cy.contains(data_test.signup_information.login_text)
            cy.get(dataIdElemnt.login_email).should('be.visible')
            cy.get(dataIdElemnt.login_password).should('be.visible')
            // signup place
            cy.contains(data_test.signup_information.signup_text)
            
            cy.get(dataIdElemnt.signup_name).should('be.visible').type(data_test.signup_information.name)
            cy.get(dataIdElemnt.signup_email).should('be.visible').type(data_test.signup_information.email)
            cy.get(dataIdElemnt.signup_button_submit).contains(data_test.signup).should('be.visible').click()
            cy.contains(data_test.signup_message_echec)
        })
        


    })
    
    it ('creer un compte avec le nom  manquant', ()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
            cy.get(dataIdElemnt.signup).click()
            // login place
            cy.contains(data_test.signup_information.login_text)
            cy.get(dataIdElemnt.login_email).should('be.visible')
            cy.get(dataIdElemnt.login_password).should('be.visible')
            // signup place
            cy.contains(data_test.signup_information.signup_text)
            cy.get(dataIdElemnt.signup_name).should('have.prop','required')
            cy.get(dataIdElemnt.signup_email).should('be.visible').type(data_test.signup_information.email)
            cy.get(dataIdElemnt.signup_button_submit).contains(data_test.signup).should('be.visible').click()

    
        })
        
        // cy.contains('Email Address already exist!')


    })
    it ('creer un compte avec l email manquant', ()=>{
        cy.fixture(dataIdElemnt.fixture_path).then((data_test)=>{
            cy.get(dataIdElemnt.signup).click()
            // login place
            cy.contains(data_test.signup_information.login_text)
            cy.get(dataIdElemnt.login_email).should('be.visible')
            cy.get(dataIdElemnt.login_password).should('be.visible')
            // signup place
            cy.contains(data_test.signup_information.signup_text) 
            cy.get(dataIdElemnt.signup_name).type(data_test.signup_information.name)
            cy.get(dataIdElemnt.signup_email).should('have.prop','required')
            cy.get(dataIdElemnt.signup_button_submit).contains(data_test.signup).should('be.visible').click()

            // cy.contains('Email Address already exist!')
        })
        


    })
    
})