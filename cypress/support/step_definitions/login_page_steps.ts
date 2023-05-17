import LoginPage from "../page_objects/LoginPage";
import CommonPage from "../page_objects/commonPage";
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


const loginPage = new LoginPage();
const commonPage = new CommonPage();


Given('User opens login page', () => commonPage.openURL());

Then('User is navigated to "{}" page', (text: string) => commonPage.verifyUrlPage(text));

When('User change the language to "{}"', (text: string) => commonPage.changeLanguage(text));

Then('User sees the language is "{}"', (text: string) => commonPage.verifySelectedLanguage(text));

When('User enters correct email "{}" to Email field',(text: string) => loginPage.fillEmail(text));

When('User enters incorrect email "{}" to Email field',(text: string) => loginPage.fillEmail(text));

When('User leaves all fields blank and clicks "{}" button', (text: string) => commonPage.clickOnButton(text));

When('User enters correct password "{}" to Password field',(text: string) => loginPage.fillPassword(text));

And('User enters incorrect password "{}" to Password field',(text: string) => loginPage.fillPassword(text));

And('User clicks "{}" button',(text: string) => commonPage.clickOnButton(text));

Then('User sees the "{}" page',(text: string) => commonPage.verifyPageTilte(text));

Then('User sees "{}" validation texts', (number: string) => commonPage.verifyNumberOfValidationText(number));

Then('User sees the validation text "{}" below Email field', (text: string) => commonPage.verifyValidationTextContent(text));

Then('User sees the validation text "{}" below Password field', (text: string) => commonPage.verifyValidationTextContent(text));

Then('User sees the info validation text "{}"', (text: string) => commonPage.verifyErrorMessage(text));
