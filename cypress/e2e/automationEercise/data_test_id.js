export class dataElement{



    randomEmail(){
        const randomNumber=Cypress._.random(0,1e6)
        return `user${randomNumber}@gmail.com`
    }
    
    
}