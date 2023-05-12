import LoginPage from "../page_objects/LoginPage";
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();

Given('User opens login page', () => cy.visit('/'));
And('User opens language dropdown', () => loginPage.openLanguageDropdown() )
And('User change the language to "{}"', (text: string) => loginPage.changeLanguageToEnglish(text)),
When('User enters correct email "{}" to Email field',(text: string) => loginPage.fillEmail(text));

When('User enters incorrect email "{}" to Email field',(text: string) => loginPage.fillEmail(text));

When('User leaves all fields blank and clicks "{}" button', (text: string) => loginPage.clickOnSignMeInButton(text))

When('User enters correct password "{}" to Password field',(text: string) => loginPage.fillPassword(text));

And('User enters incorrect password "{}" to Password field',(text: string) => loginPage.fillPassword(text));

And('User clicks "{}" button',(text: string) => loginPage.clickOnSignMeInButton(text));

Then('User sees the "{}" page',(text: string) => loginPage.verifyPageTitle(text));

Then('User sees "{}" validation texts', (number: string) => loginPage.verifyNumberOfValidation(number))

Then('User sees the validation text "{}" below Email field', (text: string) => loginPage.verifyValidationText(text));

Then('User sees the validation text "{}" below Password field', (text: string) => loginPage.verifyValidationText(text));

Then('User sees the info validation text "{}"', (text: string) => loginPage.verifyvalidationTextIncorrectInfo(text));
