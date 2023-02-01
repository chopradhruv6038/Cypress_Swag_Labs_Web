/// <reference types = 'Cypress'/>

export class BasePage{

url = 'https://www.saucedemo.com/';

elements = {

 //url: ()=> cy.visit('https://www.saucedemo.com/'),    

burgerMenu: ()=> cy.get('#react-burger-menu-btn'),

logoutLink: ()=> cy.get('#logout_sidebar_link'),

swagLabsLogo: ()=>  cy.get('.login_logo')


}


loadUrl(endpoint){

//this.elements.url() + endpoint;

cy.visit(this.url + endpoint);
    
    }

setViewPortTo1280X720(){

cy.viewport(1280, 720)   // setting the viewport (width height) to get full screen
   
}

performLogoutFrmProdPage(){

this.elements.burgerMenu().click();
this.elements.logoutLink().click();

}

assertSwagLabsLogoOnLoginPage(){

this.elements.swagLabsLogo().should('be.visible');

}



}