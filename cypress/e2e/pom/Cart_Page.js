export class CartPage{


elements = {

    cartPageTitle: ()=> cy.get('.title'),

checkOutBtn: ()=> cy.get('[data-test="checkout"]'),

cartPageTitleExpectedText: ()=> 'Your Cart',

slbDetails: ()=> cy.get('.cart_list > :nth-child(3)'),

slbExpectedText: ()=> '1Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99Remove',

slblDetails:()=> cy.get('.cart_list > :nth-child(4)'),


}



//functions

assertCartPageTitle(){

this.elements.cartPageTitle().should('have.text', this.elements.cartPageTitleExpectedText());


}


clickCheckoutBtn(){

this.elements.checkOutBtn().click();

}


assertSLBDetailsOnCartPage(){


this.elements.slbDetails().should('have.text', this.elements.slbExpectedText());


}

assertSlblDetailsOnCartPage(expectedText){

this.elements.slblDetails().should('have.text', expectedText);


}


}












