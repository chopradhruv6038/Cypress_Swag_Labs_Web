/// <reference types = "Cypress"/>

import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";
import { ProductsPage } from "../pom/Products_Page";


const basepage = new BasePage();
const loginpage = new LoginPage();
const productspage = new ProductsPage();


describe('This suite will test all logout scenarios', ()=> {

let userLoginDetails;

before('Before block for loading the json and storing in a variable', ()=> {

  cy.readFile('cypress/fixtures/LoginUsersData.json').then((res)=> {
  
  userLoginDetails = res;
  
  })
  
  })

beforeEach('Before Each block for loading URL and setting Viewport', ()=> {

  basepage.loadUrl('');

  basepage.setViewPortTo1280X720();

  loginpage.enterUserName(userLoginDetails.validUserName);
  loginpage.enterPassword(userLoginDetails.validPassword);
  loginpage.clickLoginBtn();


})


it.only('Validating that user is able to logout of the application from products page', ()=> {

productspage.clickBurgerMenu();
productspage.clickLogoutLnk();
loginpage.assertLoginPageLogo();
  
})


})