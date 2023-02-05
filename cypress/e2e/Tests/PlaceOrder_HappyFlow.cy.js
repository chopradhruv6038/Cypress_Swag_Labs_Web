/// <reference types = "Cypress"/>

import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";
import { ProductsPage } from "../pom/Products_Page";
import { CartPage } from "../pom/Cart_Page";
import { CheckoutPage } from "../pom/checkout_Page";


const basepage = new BasePage();
const loginpage = new LoginPage();
const productspage = new ProductsPage();
const cartpage = new CartPage();
const checkoutpage = new CheckoutPage();


describe('This suite will test all the Login Test cases', ()=> {

let userLoginDetails;

let cartpageExpectedtxt;

let checkoutPageDetails;

before('Before block for loading the json and storing in a variable', ()=> {

  cy.readFile('cypress/fixtures/LoginUsersData.json').then((res)=> {
  
  userLoginDetails = res;
  
  })

  cy.readFile('cypress/fixtures/cartPageExpectedText.json').then((res)=> {

    cartpageExpectedtxt = res;


  })

  cy.fixture('CheckoutPageUserDetails.json').then((res)=> {

    checkoutPageDetails = res;

  })
  
  })

beforeEach('Before Each block for loading URL, setting Viewport and Login', ()=> {

  basepage.loadUrl('');

  basepage.setViewPortTo1280X720();

  loginpage.assertLoginPageLogo();
  loginpage.enterUserName(userLoginDetails.validUserName);
  loginpage.enterPassword(userLoginDetails.validPassword);
  loginpage.clickLoginBtn();
  productspage.assertSwagLabsLogoOnProductsPage();

})


it('Add To Cart Tests two products -> assert remove Btns -> move to cart page -> assert products, price and quantity -> move to checkout page', ()=> {

  productspage.addSauceLabsBackPackToCart(); //1 quantity
  productspage.assertRemoveBtnSauceLabsBaclPack();

  productspage.addSauceLabsBikeLightToCart(); //1 quantity
  productspage.assertRemoveBtnBikeLight();

  productspage.assertShoppingCartBadgeForTwoProducts();
  productspage.clickShoppingCartIcon();

  cartpage.assertCartPageTitle();
  cartpage.assertSLBDetailsOnCartPage(); //asserting with 1 quantity
  cartpage.assertSlblDetailsOnCartPage(cartpageExpectedtxt.productsText.slblExpectedText); //asserting with 1 quantity
  cartpage.clickCheckoutBtn();

  checkoutpage.assertCheckoputPageTitle();
  checkoutpage.enterFirstName(checkoutPageDetails.userDetails.firstName);
  checkoutpage.enterLastName(checkoutPageDetails.userDetails.lastName);
  checkoutpage.enterZipCode(checkoutPageDetails.userDetails.postalCode);
  checkoutpage.clickContinueBtn();

  




})




})