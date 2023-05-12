class LoginPage {
  elements = {
    emailTextbox: () => cy.get('input[id="username"]'), //Thêm tag vào elements
    passwordTextbox: () => cy.get('input[id="password"]'),
    signMeInButton: (text: string) => cy.get('button').contains(text), //contains text
    validationText: () => cy.get('.ant-form-item-explain-error'),//contains text
    validationText2: (validaText: string) => this.elements.validationText().contains(validaText),//contains text
    validationTextIncorrectInfo: (validaText: string) => cy.get('p[class="text-[red]"]').contains(validaText),
    pageTitle: () => cy.get('.dashboard_bar'),
    languageDropdown: () => cy.get('.ant-dropdown-trigger'),
    languageDropdown2: (text: string) => cy.get('.ant-dropdown-trigger').contains(text),
    languageSelect: (text: string) => cy.get('.ant-dropdown-menu').contains(text)

  };
  
    verifyUrlPage = (text: string) => cy.url().should('include', text)

    openLanguageDropdown = () => this.elements.languageDropdown().click();

    changeLanguageToEnglish = (text: string) => this.elements.languageSelect(text).contains(text).click();

    verifyselectedLanguage = (text: string) => this.elements.languageDropdown2(text).should('have.text', text);
    
    fillEmail = (text: string) => this.elements.emailTextbox().type(text);

    fillPassword = (text: string) => this.elements.passwordTextbox().type(text);

    clickOnSignMeInButton = (text: string) => this.elements.signMeInButton(text).click();

    verifyPageTitle = (text: string) => this.elements.pageTitle().should('have.text',text)

    verifyValidationText = (validaText: string) => this.elements.validationText2(validaText).should('have.text', validaText)

    verifyNumberOfValidation = (number: string) => this.elements.validationText().should('have.length', number)

    verifyvalidationTextIncorrectInfo = (text: string) => this.elements.validationTextIncorrectInfo(text).should('have.text', text)

 }
export default LoginPage;