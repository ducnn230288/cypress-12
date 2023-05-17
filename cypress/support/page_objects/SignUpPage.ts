import faker from "faker";

class SignupPage {
    elements = {
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

        signUpButton: (text: string) => cy.get('button').contains(text),

        successSignUpMessage: (text: string) => cy.get('.text-black').contains(text),
        successActivateMessage: (text: string) => cy.get('p').contains(text),

        validationTextAndErrorMessage: (text: string) => cy.get('.ant-form-item-explain-error').contains(text),
    }


    // fillUsername = (name: string) => {
    //     this.elements.usernameTextbox().type(name).invoke('val').as('username')
    // } 

    fillUsername = () => {
            const randomUsername = "Auto_user_" + faker.random.number({min:10000, max:99999})
            this.elements.usernameTextbox().type(randomUsername.toString()).invoke('val').as('username')
        } 

    
    // fillEmail = () => {
    //     cy.get('@username').then(($name) => {
    //         const randomEmail = cy.wrap($name).text();
    //         this.elements.emailTextbox().type(randomEmail);
    //     });       
    //   };

      fillEmail = () => {
        cy.get('@username').then((randomEmail) => {
          this.elements.emailTextbox().type(randomEmail as string);
        });       
      };
      
    fillPassword = (password: string) => this.elements.passwordTextbox().type(password);

    fillConfirmPassword = (password: string) => this.elements.confirmPasswordTextbox().type(password);

    searchCountryCode = () => this.elements.countryCode().type('Vietnam{enter}');

    fillPhoneNumber = (number: string) => this.elements.phoneNumberTextbox().typeRandom(number);

    fillCPF = (number: string) => this.elements.cpfTextbox().typeRandom(number);

    fillAffiliateCode = (text: string) => this.elements.affiliateCodeTextbox().typeRandom(text);


    checkTermAndPrivacyCheckbox = () => this.elements.agreeCheckbox().check();


    verifySuccessSignUpMessage = (text: string) => this.elements.successSignUpMessage(text).should('have.text', text);

    verifySuccessActivateMessage = (text: string) => this.elements.successActivateMessage(text).should('have.text', text);

    verifyValidationTextAndErrorMessage = (text: string) => this.elements.validationTextAndErrorMessage(text).should('have.text', text);

}
export default SignupPage;