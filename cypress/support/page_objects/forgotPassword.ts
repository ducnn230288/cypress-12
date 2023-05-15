class ForgotPassword {
    elements = {
        emailTextbox: () => cy.get('input[id="email"]'),
        resetButton: (text: string) => cy.get('button').contains(text),
        forgotPasswordTitle: (text: string) => cy.get('.text-center mb-8').contains(text),
        signInlink: (text: string) => cy.get('a').contains(text),
        loginWithEmail: (text: string) => cy.get('button').contains(text),
    }

        fillEmail = (text: string) => this.elements.emailTextbox().type(text);
        clickResetButton = (text: string) => this.elements.resetButton(text).click();
        clickLoginWithEmailButton = (text: string) => this.elements.loginWithEmail(text).click();
        clickSignInLink = (text: string) => this.elements.signInlink(text).click();

}