
import { dataElement } from "./data_test_id"
const dataIdElement =new dataElement()

describe('automatisation des differents cas de tests du site automationExercise.com', ()=>{

    beforeEach(()=>{
        cy.fixture('data_test.json').then(( data_test)=>{

            cy.visit(data_test.url.url)
            
        // verifier que tous les elements du header sont visible

            cy.get('[class="shop-menu pull-right"]').then((headerElt)=>{
                for(let elt of data_test.header){
                    cy.get(headerElt).contains(elt)
                }
            })
       }) 
    })

    it.only('enregistrer un utilisateur',()=>{
        cy.fixture('data_test.json').then((data_test)=>{

            // button signup/Login
            cy.get('.shop-menu > .nav > :nth-child(4)').click()
            cy.get('[data-qa="login-button"]').contains('Login').should('be.visible')
            cy.get('[data-qa="login-email" ]').should('be.visible')
            cy.get('[data-qa="login-password" ]').should('be.visible')
            cy.contains(' New User Signup!')
            cy.get('[data-qa="signup-name"]').should('be.visible')
            cy.get('[data-qa="signup-email"]').should('be.visible')
            cy.get('[data-qa="signup-button"]').contains('Signup').should('be.visible')
            cy.get('[data-qa="signup-name"]').type(data_test.signup_information.name)
            
            /** fonction pour generer des emails uniques */
        
            cy.wrap(dataIdElement.randomEmail()).then(($email)=>{
                cy.get('[data-qa="signup-email"]').type($email)
            })

            // button Signup
            cy.get('[data-qa="signup-button"]').click()

            // element de La page information

            cy.get('[class="login-form"]').then(()=>{
                for(let elt of data_test.information_account){
                    cy.contains(elt)
                }
            })

            cy.get('[id="id_gender2"]').click()
            cy.get('[data-qa="name"]').should('be.visible').and('have.value','vanessa')
            cy.get('[data-qa="email"]').should('be.visible')
            cy.get('[data-qa="password"]').should('be.visible').type(data_test.signup_information.password)
            //Day
            cy.get('[data-qa="days"]').select(4)
            //Month
            cy.get('[data-qa="months"]').select(data_test.signup_information.months)
            //Year
            cy.get('[data-qa="years"]').select('2002')
            cy.get('[id="newsletter"]').click()
            cy.get('[id="optin" ]').click()
            cy.get('[data-qa="first_name" ]').type(data_test.signup_information.firstname)
            cy.get('[data-qa="last_name" ]').type(data_test.signup_information.lastname)
            cy.get('[ data-qa="company"]').type(data_test.signup_information.compagny)
            cy.get('[data-qa="address" ]').type(data_test.signup_information.address1)
            cy.get('[ data-qa="address2"]').type(data_test.signup_information.address2)
            cy.get('[data-qa="country" ]').select(data_test.signup_information.country)
            cy.get('[ data-qa="state"]').type(data_test.signup_information.state)
            cy.get('[data-qa="city" ]').type(data_test.signup_information.city)
            cy.get('[ data-qa="zipcode"]').type(data_test.signup_information.zipcode)
            cy.get('[ data-qa="mobile_number"]').type(data_test.signup_information.mobile_number)
            cy.get('[data-qa="create-account"]').click()
            // message de reussite 
            cy.get('[id="form"]').then(()=>{
                for(let elt of data_test.sucess_information){
                    cy.contains(elt)
                }
            })
            cy.get('[data-qa="continue-button"]').click()
            cy.get('[id="header"]').should('be.visible')

            // nouvelle informations sur le header
            cy.get('[id="header"]').then(()=>{
                for(let elt of data_test.after_login_signup){
                    cy.contains(elt)
                }
            })

            cy.get('[id="slider"]').should('be.visible')
            

            
        })
    })
    
    it('se connecter avec un email et mot de pass valide',()=>{
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.contains('Login to your account')
        cy.get('.shop-menu > .nav > :nth-child(4)').click()
        cy.get('[data-qa="login-email" ]').type('leslie27@gmail.com')
        cy.get('[data-qa="login-password" ]').type('232323')
        cy.get('[data-qa="login-button"]').click()
        



    })
    
    // afterEach(()=>{
    //     cy.get('[id="header"]').should('be.visible')
    //     cy.get('[id="header"]').contains('Logout')
    //     cy.get('[id="header"]').contains('Delete Account')
    //     cy.get('[id="slider"]').should('be.visible')
    //     // cy.get(':nth-child(10) > a').last().contains(' Logged in as Vanessa').should('be.visible')

    // })


       






    
})