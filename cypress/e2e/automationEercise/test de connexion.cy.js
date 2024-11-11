
import { dataElement } from "./data_test_id"
const dataIdElement =new dataElement()

describe('automatisation des differents cas de tests du site automationExercise.com', ()=>{

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

    it('enregistrer un utilisateur',()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{

            // button signup/Login
            cy.get(dataIdElement.signup).click()
            cy.get(dataIdElement.login_email).should('be.visible')
            cy.get(dataIdElement.login_password).should('be.visible')
            cy.contains(data_test.signup_information.signup_text)
            cy.get(dataIdElement.login_button_submit).contains(data_test.signup_information.button_login).should('be.visible')
            cy.get(dataIdElement.signup_name).should('be.visible')
            cy.get(dataIdElement.signup_email).should('be.visible')
            cy.get(dataIdElement.signup_button_submit).contains('Signup').should('be.visible')
            cy.get(dataIdElement.signup_name).type(data_test.signup_information.name)
            
            /** fonction pour generer des emails uniques */
        
            cy.wrap(dataIdElement.randomEmail()).then(($email)=>{
                cy.get(dataIdElement.signup_email).type($email)
            })

            // button Signup
            cy.get(dataIdElement.signup_button_submit).click()

            // element de La page information

            cy.get(dataIdElement.signup_form).then(()=>{
                for(let elt of data_test.information_account){
                    cy.contains(elt)
                }
            })

            cy.get(dataIdElement.gender2).click()
            cy.get(dataIdElement.input_name).should('be.visible').and('have.value','vanessa')
            cy.get(dataIdElement.input_email).should('be.visible')
            cy.get(dataIdElement.input_password).should('be.visible').type(data_test.signup_information.password)
            //Day
            cy.get(dataIdElement.input_days).select(4)
            //Month
            cy.get(dataIdElement.input_months).select(data_test.signup_information.months)
            //Year
            cy.get(dataIdElement.input_years).select('2002')
            cy.get(dataIdElement.newletter).click()
            cy.get(dataIdElement.Option).click()
            cy.get(dataIdElement.firstname_input).type(data_test.signup_information.firstname)
            cy.get(dataIdElement.lastname_input).type(data_test.signup_information.lastname)
            cy.get(dataIdElement.compagny_input).type(data_test.signup_information.compagny)
            cy.get(dataIdElement.address1_input).type(data_test.signup_information.address1)
            cy.get(dataIdElement.address2_input).type(data_test.signup_information.address2)
            cy.get(dataIdElement.country_input).select(data_test.signup_information.country)
            cy.get(dataIdElement.state_input).type(data_test.signup_information.state)
            cy.get(dataIdElement.city_input).type(data_test.signup_information.city)
            cy.get(dataIdElement.zipcode_input).type(data_test.signup_information.zipcode)
            cy.get(dataIdElement.mobile_number_input).type(data_test.signup_information.mobile_number)
            cy.get(dataIdElement.create_account).click()
            // message de reussite 
            cy.get(dataIdElement.form).then(()=>{
                for(let elt of data_test.sucess_information){
                    cy.contains(elt)
                }
            })
            cy.get(dataIdElement.button_continue).click()
            cy.get(dataIdElement.slide_id).should('be.visible')

            // nouvelle informations sur le header
            // cy.wrap(dataIdElement.event()).then((evenement)=>{
            //     cy.log(`le nom de l utlisateur est : ${evenement}`)
            //     cy.contains(` Logged in as ${evenement}`)
            // })

                cy.get(dataIdElement.header_id).then(()=>{

                    for(let elt of data_test.after_login_signup){
                        cy.contains(elt)
                    }
                    
                })
            
            

            cy.get(dataIdElement.slide_id).should('be.visible')
            

            
        })
    })
    
    it('se connecter avec un email et mot de pass valide',()=>{
        cy.fixture(dataIdElement.fixture_path).then((data_test)=>{

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
         })

    })
    
    afterEach(()=>{
        cy.fixture(dataIdElement.fixture_path).then(($infos)=>{
            // button delete
            // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
            cy.get(dataIdElement.header_id).then(($id)=>{
                for(let information of $infos.after_login_signup){
                    cy.get($id).should('to.not.have.text', information)
                }
            })
        })
        
            
    })


       






    
})