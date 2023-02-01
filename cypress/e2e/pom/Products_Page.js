export class ProductsPage{

//UI definitions

elements = { // element object

productsPageSwaglabsHeader: ()=> cy.get('.app_logo'), //web element is assigned a value of a function which will be used in user action functions

productsPageMenuIcon: ()=> cy.get('.bm-burger-button'),

productsPageCartIcon: ()=> cy.get('#shopping_cart_container'),

productsPageTitle: ()=> cy.get('.title'),

productsPagePeekIcon: ()=> cy.get('.peek'),

productsPageSortingContainer: ()=> cy.get('[data-test="product_sort_container"]'),

productsPageProductSauceLabsBackPackDetails: ()=> cy.get(':nth-child(1) > .inventory_item_description'),

productsPageProductSauceLabsBackPackImg: ()=> cy.get('#item_4_img_link'),

//all items left to assert. just done one for sample.

productsPageTwitterIcon: ()=> cy.get('.social_twitter'),

productsPageFacebookIcon: ()=> cy.get('.social_facebook'),

productsPageLinkedInIcon: ()=> cy.get('.social_linkedin'),

productsPageFtrText: ()=> cy.get('.footer_copy'),

productsPageFtrRobotImg: ()=> cy.xpath("//img[@class ='footer_robot']"), //using xpath for demonstration, requires xpath dependency.




}

//Assertion Functions

assertSwagLabsLogoOnProductsPage(){

this.elements.productsPageSwaglabsHeader().should('be.visible');

}

assertMenuIconOnProductsPage(){

this.elements.productsPageMenuIcon().should('be.visible')
.find('button').should('have.attr','id').should('include', 'react-burger-menu-btn');

}

assertShoppingCartOnProductsPage(){

this.elements.productsPageCartIcon().should('be.visible')
.find('a').should('have.class', 'shopping_cart_link');

}

assertProductPageTitle(expectedText){

this.elements.productsPageTitle().should('have.text', expectedText )
.and('be.visible');


}

assertProductPagePeekIcon(){

this.elements.productsPagePeekIcon().should('be.visible');

}

assertSortingContainerOnProductsPage(){

this.elements.productsPageSortingContainer().should('be.visible')


}



assertSauceLabsBackPackDetails(textDetails){

this.elements.productsPageProductSauceLabsBackPackDetails().should('have.text', textDetails)

}


assertSauceLabsBackPackImg(){

this.elements.productsPageProductSauceLabsBackPackImg().find('img').should('have.attr', 'src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');

}

assertTwitterIconOnProductsPageFtr(){

this.elements.productsPageTwitterIcon()

.find('a').should('have.attr', 'href', 'https://twitter.com/saucelabs').should('be.visible')

}

assertFacebookIconOnProductsPageFtr(){

this.elements.productsPageFacebookIcon()

.find('a').should('have.attr', 'href', 'https://www.facebook.com/saucelabs').should('be.visible')

}

assertLinkedinIconOnProductsPageFtr(){

this.elements.productsPageLinkedInIcon()

.find('a').should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/').should('be.visible')

}


assertFTRTextOnProductsPage(expectedText){

this.elements.productsPageFtrText().should('have.text', expectedText)

}

assertFtrRobotImg(){

this.elements.productsPageFtrRobotImg().should('have.attr', 'src', '/static/media/SwagBot_Footer_graphic.2e87acec.png').should('be.visible')

}


// Sorting functions





}