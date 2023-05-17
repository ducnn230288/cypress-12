import faker from "faker";
class CommonPage {
    elements = {
        languageDropdown: () => cy.get('.ant-dropdown-trigger'),
        selectedLanguage: (text: string) => this.elements.languageDropdown().contains(text),
        languageSelection: (text: string) => cy.get('.ant-dropdown-menu').contains(text),

        button: (text: string) => cy.get('button').contains(text),

        validationText: () => cy.get('.ant-form-item-explain-error'),
        validationTextContent: (validaText: string) => this.elements.validationText().contains(validaText),
        errorMessage: (message: string) => cy.get('p[class="text-[red]"]').contains(message),

        pageTitleAfterLogin: () => cy.get('.dashboard_bar'),

        profileName: (name: string) => cy.get('.font-semibold').contains(name),
        profileDropdownSelection: (text: string) => cy.get('.ant-dropdown-menu-title-content').contains(text),


    }

    openURL = () => cy.visit('/')

    clickOnButton = (text: string) => this.elements.button(text).click();

    openProfileMenu = (name: string) => this.elements.profileName(name).click()

    clickValueOnProfileDropdown = (text: string) => this.elements.profileDropdownSelection(text).click()

    changeLanguage = (text: string) => {
        this.elements.languageDropdown().click(),
        this.elements.languageSelection(text).click()
    };


    verifyUrlPage = (text: string) => cy.url().should('include', text)

    verifySelectedLanguage = (text: string) => this.elements.selectedLanguage(text).should('have.text', text)

    verifyNumberOfValidationText = (number: string) => this.elements.validationText().should('have.length', number);

    verifyValidationTextContent = (text: string) => this.elements.validationTextContent(text).should('have.text', text);

    verifyErrorMessage = (message: string) => this.elements.errorMessage(message).should('have.text', message);

    verifyPageTilte = (text: string) => this.elements.pageTitleAfterLogin().should('have.text', text);
    
    createRandomUsername = () => {
        const numberUsername = faker.random.number({min:1000, max:9999})
        const randomUsername = "Auto_User_" + numberUsername
        return randomUsername;
    } 
} export default CommonPage;