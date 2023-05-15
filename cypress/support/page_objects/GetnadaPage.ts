class GetnadaPage {
    elements = {
        // Getnada
        username: () => cy.get('input[id="grid-first-name"]'),
        mailDomain: () => cy.get('select'),
        addButton: (text: string) => cy.get('button').contains(text),
        mailTitle: (text: string) => cy.get('h1').contains(text),

        verifyButton: (text: string) => {
           const getIframe = cy.get('#the_message_iframe')
              .its('0.contentDocument.body')
              .should('be.visible')
              .then(cy.wrap)
            getIframe.get('a').contains(text) 
              
    },

        mailLink: (text: string) => cy.get('a').contains(text),
        
    }
    

    fillUsername = (name: string) => {
        this.elements.username().clear();
        this.elements.username().type(name);
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