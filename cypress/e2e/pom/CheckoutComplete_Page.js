export class CheckoutCompletePage{

elements = {

checkoutCompletePgTitle: ()=> cy.get('.title'),
orderThankyouMessage: ()=> cy.get('.complete-header'),
orderThankyouDetails: ()=> cy.get('.complete-text'),
ponyExpressImage: ()=> cy.get('.pony_express'),
backHomeBtn: ()=> cy.get('.pony_express')

}

//functions

assertCheckoutCmpltPgTitle(txt){

this.elements.checkoutCompletePgTitle().should('have.text', txt);

}

assertThankyouMsg(txt){

this.elements.orderThankyouMessage().should('have.text', txt);

}

assertThankyouDetils(txt){

this.elements.orderThankyouDetails().should('have.text', txt)

}


assertPonyExpressImg(){

this.elements.ponyExpressImage().should('be.visible');

}

assertBackhomeBtnisPresent(){

this.elements.backHomeBtn().should('be.visible');

}


}