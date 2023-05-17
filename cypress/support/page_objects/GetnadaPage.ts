import SignupPage from "./SignUpPage";

class GetnadaPage {
    elements = {
        // Getnada
        username: () => cy.get('input[id="grid-first-name"]'),
        mailDomain: () => cy.get('select'),
        addButton: (text: string) => cy.get('button').contains(text),
        mailTitle: (text: string) => cy.get('h1').contains(text),

        verifyButton: (text: string) => {
          cy.get('iframe#the_message_iframe').iframe().find('a.button').should('have.text', text)},

        mailLink: (text: string) => cy.get('a').contains(text),
    }


    fillUsername = () => {
        this.elements.username().clear();
             cy.get('@username').then(($name) => {
                const name = $name.text()
                this.elements.username().type(name)
              })       
    }

    selectDomain = (domain: string) => this.elements.mailDomain().select(domain);

    clickAddbutton = (text: string) => this.elements.addButton(text).click();

    viewMailDetail = (text: string) => this.elements.mailLink(text).click();

    clickVerifyButton = (text: string) => {
        this.elements.verifyButton(text)
     }
    verifyUrl = () => cy.url().should('include', "message")

}
export default GetnadaPage;
