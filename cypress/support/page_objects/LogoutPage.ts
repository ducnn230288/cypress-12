class LogoutPage {
  elements = {
    profileName: (name: string) => cy.get('.font-semibold').contains(name),
    logOut: (text: string) => cy.get('.ant-dropdown-menu-title-content').contains(text),
    signInText: (text: string) => cy.get('.text-center').contains(text)
};
  
    openProfileMenu = (name: string) => this.elements.profileName(name).click()
    verifyProfileMenuItem = (menu: string) => this.elements.logOut(menu).should('have.text', menu)
    clickLogout = (text: string) => this.elements.logOut(text).click()
    verifyNavigateToSigninPage = (text: string) => this.elements.signInText(text)
}
export default LogoutPage;