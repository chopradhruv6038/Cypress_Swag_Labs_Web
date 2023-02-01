
import { ProductsPage } from "../pom/Products_Page";
import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";

const productspage = new ProductsPage();
const loginpage = new LoginPage();
const basepage = new BasePage();



describe('This suite will assert all products and its details on the products page', ()=> {

    let userData;
    let productsPageData;

beforeEach('Before Each block for URL', ()=> {

    basepage.loadUrl('');

})

before('', ()=> {

cy.readFile('cypress/fixtures/LoginUsersData.json').then((res)=> {

    userData = res;

})


cy.readFile('cypress/fixtures/ProductsPage.json').then((res)=> {

    productsPageData = res;

})

})

it('products page ALL elements / products assertions after user lands on products page', ()=> {



loginpage.enterUserName(userData.validUserName)
loginpage.enterPassword(userData.validPassword);
loginpage.clickLoginBtn(); // These three commands could also be handles using custom user commands and placed in before each block.


productspage.assertSwagLabsLogoOnProductsPage();
productspage.assertMenuIconOnProductsPage();
productspage.assertShoppingCartOnProductsPage();
productspage.assertProductPageTitle(productsPageData.Data.expectedProductPageTitleText);
productspage.assertProductPagePeekIcon();
productspage.assertSortingContainerOnProductsPage();

productspage.assertSauceLabsBackPackDetails(productsPageData.Data.expectedSauceLabsBackPackDetails)
productspage.assertSauceLabsBackPackImg();

productspage.assertTwitterIconOnProductsPageFtr();
productspage.assertFacebookIconOnProductsPageFtr();
productspage.assertLinkedinIconOnProductsPageFtr();
productspage.assertFTRTextOnProductsPage(productsPageData.Data.expectedProductsPageFooterTxt)










})










})