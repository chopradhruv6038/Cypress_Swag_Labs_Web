export class CheckoutPage{

elements = {

checkoutPageTitle: ()=> cy.get('.title'), 
checkoutPageExpectedTitle: ()=> 'Checkout: Your Information',   
firstName:()=>  cy.get('[data-test="firstName"]'), 
lastName: ()=>  cy.get('[data-test="lastName"]'),
zipCode: ()=> cy.get('[data-test="postalCode"]'),
continueBtn: ()=> cy.xpath("//input[@id='continue']")


}


//functions:

assertCheckoputPageTitle(){

this.elements.checkoutPageTitle().should('have.text', this.elements.checkoutPageExpectedTitle());


}

enterFirstName(firstname){

this.elements.firstName().type(firstname);

}

enterLastName(lastname){

this.elements.lastName().type(lastname);
    
}

enterZipCode(zipcode){

this.elements.zipCode().type(zipcode);
    
}

clickContinueBtn(){

this.elements.continueBtn().click();


}


}