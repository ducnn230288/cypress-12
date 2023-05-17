class LoginPage {
  elements = {
    emailTextbox: () => cy.get('input[id="username"]'), //Thêm tag vào elements
    passwordTextbox: () => cy.get('input[id="password"]'),
    forgotPasswordLink: (text: string) => cy.get('a').contains(text),
    signUpLink: (text: string) => cy.get('a').contains(text)

  };
  
    
    fillEmail = (text: string) => this.elements.emailTextbox().type(text);

    fillPassword = (text: string) => this.elements.passwordTextbox().type(text);

    clickForgotPasswordLink = (text: string) => this.elements.forgotPasswordLink(text).click();

    clickSignUpLink = (text: string) => this.elements.signUpLink(text).click();

 }
export default LoginPage;