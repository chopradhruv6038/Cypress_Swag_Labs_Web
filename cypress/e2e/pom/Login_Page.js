export class LoginPage{

loginPageLogo = '.login_logo';    
userNameField = '[data-test="username"]';
passwordField = '[data-test="password"]';
loginBtn = '[data-test="login-button"]';



assertLoginPageLogo(){

cy.get(this.loginPageLogo).should('be.visible');
cy.get(this.loginPageLogo).should('have.class', 'login_logo');

}

enterUserName(userName){


cy.get(this.userNameField).type(userName);


}


enterPassword(password){


    cy.get(this.passwordField).type(password);
    
    
    }


clickLoginBtn(){


cy.get(this.loginBtn).click();



}






}