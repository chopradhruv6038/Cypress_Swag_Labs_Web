 export class ProductsPage{

// UI definitions:

productsPageSwaglabsHeader = '.app_logo';

productsPageMenuIcon = '.bm-burger-button';

productsPageCartIcon = '#shopping_cart_container';

// productsPageProductsHeader = 

// productsPageCartoonOnHeader = 

// productsPageSortingField = 


// productsPageProductSauceLabsBackPackDetails =

// productsPageProductSauceLabsBackPackImg




// ProductsPageProductSauceLabsBikeLightDetails =

// productspageProductSauceLabsBikeLightImg




// productsPageProductSauceLabsBoltTShirtDetails =

// productsPageProductSauceLabsBoltTShirtImg




// productsPageProductSauceLabsFleeceJacketDetails =

// productsPageProductSauceLabsFleeceJacketImg =




// productsPageProductSauceLabsOneSieDetails =

// productsPageProductSauceLabsOneSieImg =





// productsPageProductSauceLabsTestAllThingsDetails =

// productsPageProductSauceLabsTestAllThingsImg =,


//methods for user actions

assertSwagLabsLogoOnProductsPage(){

cy.get(this.productsPageSwaglabsHeader).should('be.visible');

}

assertMenuIconOnProductsPage(){

cy.get(this.productsPageMenuIcon).should('be.visible')
.find('button').should('have.attr','id').should('include', 'react-burger-menu-btn');

}

assertShoppingCartOnProductsPage(){

cy.get(this.productsPageCartIcon).should('be.visible')
.find('a').should('have.class', 'shopping_cart_link');

}














}