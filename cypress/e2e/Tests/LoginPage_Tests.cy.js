/// <reference types = "Cypress"/>

import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";
import { ProductsPage } from "../pom/Products_Page";


const basepage = new BasePage();
const loginpage = new LoginPage();
const productspage = new ProductsPage();


describe('This suite will test all the Login Test cases', ()=> {

let userLoginDetails;

before('Before block for loading the json and storing in a variable', ()=> {

  cy.readFile('cypress/fixtures/LoginUsersData.json').then((res)=> {
  
  userLoginDetails = res;
  
  })
  
  })

beforeEach('Before Each block for loading URL and setting Viewport', ()=> {

basepage.loadUrl('');
basepage.setViewPortTo1280X720();

})

it('Login Test for Invalid userName', ()=> {

loginpage.assertLoginPageLogo();

loginpage.enterUserName(userLoginDetails.InvalidUserName);
loginpage.enterPassword(userLoginDetails.validPassword);

loginpage.clickLoginBtn();

loginpage.assertInvalidPasswordUserLoginError();

})

it('Login Test for invalid Password', ()=> {

loginpage.assertLoginPageLogo();

loginpage.enterUserName(userLoginDetails.validUserName);
loginpage.enterPassword(userLoginDetails.invalidPassword);

loginpage.clickLoginBtn();
loginpage.assertInvalidPasswordUserLoginError();

})

it('Login Test for locked out user', ()=> {

  loginpage.assertLoginPageLogo();
  
  loginpage.enterUserName(userLoginDetails.lockedOutUserName);
  loginpage.enterPassword(userLoginDetails.validPassword);
  
  loginpage.clickLoginBtn();
  loginpage.assertLockedOutUserLoginError();
  
  })


it('Login Test for valid username and password', ()=> {

loginpage.assertLoginPageLogo();

loginpage.enterUserName(userLoginDetails.validUserName);
loginpage.enterPassword(userLoginDetails.validPassword);
loginpage.clickLoginBtn();

productspage.assertSwagLabsLogoOnProductsPage();

})

})