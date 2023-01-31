
import { ProductsPage } from "../pom/Products_Page";
import { LoginPage } from "../pom/Login_Page";
import { BasePage } from "../pom/Base_Page";

const productspage = new ProductsPage();
const loginpage = new LoginPage();
const basepage = new BasePage();



describe('This suite will assert all products and its details on the products page', ()=> {

    let userData;

beforeEach('Before Each block for URL', ()=> {

    basepage.loadUrl('');

})

before('', ()=> {

cy.readFile('cypress/fixtures/LoginUsersData.json').then((res)=> {

    userData = res;

})

})

it('products page ALL elements / products assertions after user lands on products page', ()=> {



loginpage.enterUserName(userData.validUserName)
loginpage.enterPassword(userData.validPassword);
loginpage.clickLoginBtn();


productspage.assertSwagLabsLogoOnProductsPage();
productspage.assertMenuIconOnProductsPage();
productspage.assertShoppingCartOnProductsPage();










})










})