/// <reference types = "Cypress"/>

/* This test will place order for 2 products SLB and SLBL and 
will also assert all the details on each and every page in the flow till the order is placed. */

import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";
import { ProductsPage } from "../pom/Products_Page";
import { CartPage } from "../pom/Cart_Page";
import { CheckoutPage } from "../pom/checkout_Page";
import { CheckoutOverviewPage } from "../pom/CheckoutOverview_Page";
import { CheckoutCompletePage } from "../pom/CheckoutComplete_Page";


const basepage = new BasePage();
const loginpage = new LoginPage();
const productspage = new ProductsPage();
const cartpage = new CartPage();
const checkoutpage = new CheckoutPage();
const checkoutoverviewpage = new CheckoutOverviewPage();
const checkoutcompletepage = new CheckoutCompletePage();


describe('This suite will perform a full flow from login -> select product -> add to cart -> view cart -> checkout -> validate details', ()=> {

let userLoginDetails;

let cartpageExpectedtxt;

let checkoutPageDetails;

let checkoutOverviewDetails;

let checkoutCompleteDetails;

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

cy.fixture('checkoutOverviewPage.json').then((res)=> {

    checkoutOverviewDetails = res;

})

cy.readFile('cypress/fixtures/checkoutCompletePage.json').then((res)=> {

  checkoutCompleteDetails = res;

})

})

beforeEach('Before Each block for loading URL, setting Viewport and Login', ()=> {

basepage.loadUrl('');
basepage.setViewPortTo1280X720();

loginpage.enterUserName(userLoginDetails.validUserName);
loginpage.enterPassword(userLoginDetails.validPassword);
loginpage.clickLoginBtn();

})


it('Add To Cart Tests two products -> assert remove Btns -> move to cart page -> assert products, price and quantity -> move to overview page, assert details and click finish Btn', ()=> {

//products page

productspage.addSauceLabsBackPackToCart(); //1 quantity
productspage.assertRemoveBtnSauceLabsBaclPack();

productspage.addSauceLabsBikeLightToCart(); //1 quantity
productspage.assertRemoveBtnBikeLight();

productspage.assertShoppingCartBadgeForTwoProducts();
productspage.clickShoppingCartIcon();

//cart page

cartpage.assertCartPageTitle();
cartpage.assertSLBDetailsOnCartPage(); //asserting with 1 quantity
cartpage.assertSlblDetailsOnCartPage(cartpageExpectedtxt.productsText.slblExpectedText); //asserting with 1 quantity
cartpage.clickCheckoutBtn();

//checkout page

checkoutpage.assertCheckoputPageTitle();
checkoutpage.enterFirstName(checkoutPageDetails.userDetails.firstName);
checkoutpage.enterLastName(checkoutPageDetails.userDetails.lastName);
checkoutpage.enterZipCode(checkoutPageDetails.userDetails.postalCode);
checkoutpage.clickContinueBtn();

//checkoutOverview page

checkoutoverviewpage.assertCheckoutOverviewPgTitle(checkoutOverviewDetails.overviewDetailsforprodSLBSLBL.checkoutOverviewPgTitle);
checkoutoverviewpage.assertSlbDetils(checkoutOverviewDetails.overviewDetailsforprodSLBSLBL.slbDetails);
checkoutoverviewpage.assertSlblDetails(checkoutOverviewDetails.overviewDetailsforprodSLBSLBL.slblDetails);
checkoutoverviewpage.assertItemTotalWithoutTax(checkoutOverviewDetails.overviewDetailsforprodSLBSLBL.itemTotalWithoutTax);
checkoutoverviewpage.assertTaxApplied(checkoutOverviewDetails.overviewDetailsforprodSLBSLBL.taxAmount);
checkoutoverviewpage.assertTotalAmount(checkoutOverviewDetails.overviewDetailsforprodSLBSLBL.totalAmount);
checkoutoverviewpage.clickFinishBtn(checkoutOverviewDetails.overviewDetailsforprodSLBSLBL);

//checkoutComplete page

checkoutcompletepage.assertCheckoutCmpltPgTitle(checkoutCompleteDetails.ExpectedText.expectedTitle);
checkoutcompletepage.assertThankyouMsg(checkoutCompleteDetails.ExpectedText.thankyouMsg);
checkoutcompletepage.assertThankyouDetils(checkoutCompleteDetails.ExpectedText.thankyouMsgDetails);
checkoutcompletepage.assertPonyExpressImg();
checkoutcompletepage.assertBackhomeBtnisPresent();

})




})