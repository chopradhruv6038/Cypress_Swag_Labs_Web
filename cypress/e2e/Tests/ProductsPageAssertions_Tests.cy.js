
import { ProductsPage } from "../pom/Products_Page";
import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";
import { afterEach } from "mocha";

const productspage = new ProductsPage();
const loginpage = new LoginPage();
const basepage = new BasePage();



describe('This suite will assert all products and its details on the products page', ()=> {

    let userData;
    let productsPageData;

beforeEach('Before Each block for URL', ()=> {

    basepage.loadUrl('');

    basepage.setViewPortTo1280X720();

})

/* afterEach('After each block for logging out post each test', ()=> {

basepage.performLogoutFrmProdPage();
basepage.assertSwagLabsLogoOnLoginPage();


}) */

before('Before block for Reading json files places under fixtures', ()=> {

cy.readFile('cypress/fixtures/LoginUsersData.json').then((res)=> {

    userData = res;

})


cy.readFile('cypress/fixtures/ProductsPage.json').then((res)=> {

    productsPageData = res;

})

})

it.only('products page ALL elements / products assertions after user lands on products page', ()=> {



loginpage.enterUserName(userData.validUserName);
loginpage.enterPassword(userData.validPassword);
loginpage.clickLoginBtn(); // These three commands could also be handles using custom user commands and placed in before each block.

//Asserting products page header.
productspage.assertSwagLabsLogoOnProductsPage();
productspage.assertMenuIconOnProductsPage();
productspage.assertShoppingCartOnProductsPage();
productspage.assertProductPageTitle(productsPageData.Data.expectedProductPageTitleText);
productspage.assertProductPagePeekIcon();
productspage.assertSortingContainerOnProductsPage();

//Asserting products page first product all details.
productspage.assertSauceLabsBackPackDetails(productsPageData.Data.expectedSauceLabsBackPackDetails)
productspage.assertSauceLabsBackPackImg();

//Asserting products page footer and its details.
productspage.assertTwitterIconOnProductsPageFtr();
productspage.assertFacebookIconOnProductsPageFtr();
productspage.assertLinkedinIconOnProductsPageFtr();
productspage.assertFTRTextOnProductsPage(productsPageData.Data.expectedProductsPageFooterTxt)
productspage.assertFtrRobotImg();

})



})