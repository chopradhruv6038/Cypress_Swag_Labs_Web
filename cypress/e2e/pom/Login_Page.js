export class LoginPage{

loginPageLogo = '.login_logo';    
userNameField = '[data-test="username"]';
passwordField = '[data-test="password"]';
loginBtn = '[data-test="login-button"]';

lockedOutUserError = '[data-test="error"]';
lockedOutUserErrorExpectedtext = 'Epic sadface: Sorry, this user has been locked out.';

invalidPasswordError = '[data-test="error"]';
invalidPasswordErrorExpectedText = 'Epic sadface: Username and password do not match any user in this service';


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

assertLockedOutUserLoginError(){

cy.get(this.lockedOutUserError).should('be.visible');
cy.get(this.lockedOutUserError).should('have.text', this.lockedOutUserErrorExpectedtext);
cy.get(this.lockedOutUserError).should('include.html', '<button class="error-button">');

}

assertInvalidPasswordUserLoginError(){

    cy.get(this.invalidPasswordError).should('be.visible');
    cy.get(this.invalidPasswordError).should('have.text', this.invalidPasswordErrorExpectedText);
    cy.get(this.invalidPasswordError).should('include.html', '<button class="error-button">');
    
    }

}