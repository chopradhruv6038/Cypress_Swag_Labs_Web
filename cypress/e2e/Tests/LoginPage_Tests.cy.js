/// <reference types = "Cypress"/>

import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";



//creating objects for the classes

const basepage = new BasePage();
const loginpage = new LoginPage();



describe('This suite will test all the Login Test cases', ()=> {

  let userLoginDetails;

beforeEach('Before Each block for loading URL and setting Viewport', ()=> {

basepage.loadUrl('/');
basepage.setViewPortTo1280X720();


})

before('Before block for loading the json and storing in a variable', ()=> {

cy.readFile('cypress/fixtures/LoginUsersData.json').then((res)=> {

  userLoginDetails = res;

})


})

it('Login Test for locked out user', ()=> {

  loginpage.assertLoginPageLogo();

  loginpage.enterUserName(userLoginDetails.lockedOutUserName);
  loginpage.enterPassword(userLoginDetails.validPassword);
  
  loginpage.clickLoginBtn();






})


it('Login Test for invalid Password', ()=> {


  loginpage.assertLoginPageLogo();

  loginpage.enterUserName(userLoginDetails.validUserName);
  loginpage.enterPassword(userLoginDetails.invalidPassword);
  
  loginpage.clickLoginBtn();




  
})


it('Login Test for problem user', ()=> {


  loginpage.assertLoginPageLogo();

  loginpage.enterUserName(userLoginDetails.problemUserName);
  loginpage.enterPassword(userLoginDetails.validPassword);
  
  loginpage.clickLoginBtn();




  
})


it('Login Test for performance glitch user', ()=> {



  loginpage.assertLoginPageLogo();

  loginpage.enterUserName(userLoginDetails.PerformanceGlitchUserName);
  loginpage.enterPassword(userLoginDetails.validPassword);
  
  loginpage.clickLoginBtn();



  
})


it('Login Test for valid user', ()=> {


  loginpage.assertLoginPageLogo();

  loginpage.enterUserName(userLoginDetails.validUserName);
  loginpage.enterPassword(userLoginDetails.validPassword);
  
  loginpage.clickLoginBtn();




  
})



})