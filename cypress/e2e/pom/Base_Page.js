export class BasePage{

url = 'https://www.saucedemo.com/';

loadUrl(endpoint){

    cy.visit(this.url + endpoint);
    
    }

setViewPortTo1280X720(){

cy.viewport(1280, 720)   // setting the viewport (width height) to get full screen
   
}












}