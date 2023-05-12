class LoginPage {
  elements = {
    emailTextbox: () => cy.get('input[id="username"]'), //Thêm tag vào elements
    passwordTextbox: () => cy.get('input[id="password"]'),
    signMeInButton: (text: string) => cy.get('button').contains(text), //contains text
    validationText: (validaText: string) => this.elements.validationText2().contains(validaText),//contains text
    validationText2: () => cy.get('.ant-form-item-explain-error'),//contains text
    validationTextIncorrectInfo: (validaText: string) => cy.get('p[class="text-[red]"]').contains(validaText),
    pageTitle: () => cy.get('.dashboard_bar'),
    languageDropdown: () => cy.get('.ant-dropdown-trigger flex gap-1 items-center cursor-pointer inline-block nav-item dropdown header-profile mr-4 md:mr-0').contains('Português'),
    languageSelect: () => cy.get('.ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light')

};
    // changeLanguage = () => {
    //     this.elements.languageDropdown().click()
    //     this.elements.languageSelect().contains('English').click()
    // }

    selectEnglish = () => this.elements.languageSelect().first()

    selectPortuguês = () => this.elements.languageSelect().last()

    fillEmail = (text: string) => this.elements.emailTextbox().type(text);

    fillPassword = (text: string) => this.elements.passwordTextbox().type(text);

    clickOnSignMeInButton = (text: string) => this.elements.signMeInButton(text).click();

    verifyPageTitle = (text: string) => this.elements.pageTitle().should('have.text',text)

    verifyValidationText = (validaText: string) => this.elements.validationText(validaText).should('have.text', validaText)

    verifyNumberOfValidation = (number: string) => this.elements.validationText2().should('have.length', number)

    verifyvalidationTextIncorrectInfo = (text: string) => this.elements.validationTextIncorrectInfo(text).should('have.text', text)

 }
export default LoginPage;