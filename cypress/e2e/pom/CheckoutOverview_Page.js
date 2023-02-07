export class CheckoutOverviewPage{

elements = {

checkoutOverviewPgTitle: ()=> cy.get('.title'),

slbDetials: ()=> cy.get('.cart_list > :nth-child(3)'),

slblDetails: ()=> cy.get('.cart_list > :nth-child(4)'),

itemTotalWithoutTax: ()=> cy.get('.summary_subtotal_label'),

taxApplied: ()=> cy.get('.summary_tax_label'),

totalAmount: ()=> cy.get('.summary_total_label'),

finishBtn: ()=> cy.get('[data-test="finish"]')



}


//functions



assertCheckoutOverviewPgTitle(txt){

    this.elements.checkoutOverviewPgTitle()
    .should('have.text', txt)
    .should('be.visible');
}


assertSlbDetils(txt){

this.elements.slbDetials().should('have.text', txt)


}


assertSlblDetails(txt){

this.elements.slblDetails().should('have.text', txt);


}

assertItemTotalWithoutTax(txt){


this.elements.itemTotalWithoutTax().should('include.text', txt)

}

assertTaxApplied(txt){

this.elements.taxApplied().should('include.text', txt)

}

assertTotalAmount(txt){

this.elements.totalAmount().should('include.text', txt)


}

clickFinishBtn(){

this.elements.finishBtn().click();


}

}