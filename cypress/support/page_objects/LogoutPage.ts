class LogoutPage {
  elements = {
    signInText: (text: string) => cy.get('.text-center').contains(text)
};

    verifyNavigateToSigninPage = (text: string) => this.elements.signInText(text).should('have.text', text)
}
export default LogoutPage;