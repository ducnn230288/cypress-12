import GetnadaPage from "../page_objects/GetnadaPage";
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const getnadaPage = new GetnadaPage();

Given('User opens Getnada page', () => cy.visit('https://getnada.com/'));

When('User clicks "{}" button', (text: string) => getnadaPage.clickAddbutton(text));

And('User enters username "{}"', (text: string) => getnadaPage.fillUsername(text));

And('User selects domain "{}"', (text: string) => getnadaPage.selectDomain(text));

And('User clicks "{}" button', (text: string) => getnadaPage.clickAddbutton(text));

And('User clicks to view the mail detail "{}"', (text: string) => {
    getnadaPage.viewMailDetail(text)
    getnadaPage.verifyUrl()
});

And('User click "{}" button', (text: string) => getnadaPage.clickVerifyButton(text))
