class SignupPage {
    elements = {
        //textbox
        usernameTextbox: () => cy.get('input[id="username"]'),
        emailTextbox: () => cy.get('input[id="email"]'),
        passwordTextbox: () => cy.get('input[id="password"]'),
        confirmPasswordTextbox: () => cy.get('input[id="confirm_password"]'),
        countryCode: () => cy.get('.mgl10').contains('+55'),
        searchedCountryCode: () => cy.get('.mgl10'),
        phoneNumberTextbox: () => cy.get('input[id="mobile"]'),
        cpfTextbox: () => cy.get('input[id="cpf"]'), 
        affiliateCodeTextbox: () => cy.get('input[id="aai"]'),
        agreeCheckbox: () => cy.get('input[id="tos_consent"]'),

        //button
        signUpButton: (text: string) => cy.get('button').contains(text),

        //hyper link
        signUpLink: (text: string) => cy.get('a').contains(text),

        //message
        successSignUpMessage: (text: string) => cy.get('.text-black').contains(text),
        successActivateMessage: (text: string) => cy.get('p').contains(text),

        //validation text
        validationTextAndErrorMessage: (text: string) => cy.get('.ant-form-item-explain-error').contains(text),
    }

    clickSignUpLink = (text: string) => this.elements.signUpLink(text).click();

    //fill Textbox

    fillUsername = (name: string) => this.elements.usernameTextbox().type(name);
    
    fillEmail = (email: string) => this.elements.emailTextbox().type(email);
    
    fillPassword = (password: string) => this.elements.passwordTextbox().type(password);

    fillConfirmPassword = (password: string) => this.elements.confirmPasswordTextbox().type(password);

    searchCountryCode = () => this.elements.countryCode().type('Vietnam{enter}');

    fillPhoneNumber = (number: string) => this.elements.phoneNumberTextbox().type(number);

    fillCPF = (number: string) => this.elements.cpfTextbox().type(number);

    fillAffiliateCode = (text: string) => this.elements.affiliateCodeTextbox().type(text);

    //Click & Check

    checkTermAndPrivacyCheckbox = () => this.elements.agreeCheckbox().check();

    clickSingUpButton = (text: string) => this.elements.signUpButton(text).click();

    //Verify

    verifySuccessSignUpMessage = (text: string) => this.elements.successSignUpMessage(text).should('have.text', text);

    verifySuccessActivateMessage = (text: string) => this.elements.successActivateMessage(text).should('have.text', text);

    verifyValidationTextAndErrorMessage = (text: string) => this.elements.validationTextAndErrorMessage(text).should('have.text', text);
}
export default SignupPage;