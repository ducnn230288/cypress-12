import LoginPage from "../page_objects/LoginPage";
import SignupPage from "../page_objects/SignUpPage";
import CommonPage from "../page_objects/commonPage";
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const signUpPage = new SignupPage();
const commonPage = new CommonPage();
const loginPage = new LoginPage();

Given('User opens sign in page', () => commonPage.openURL());

Then('User is navigated to "{}" page', (text: string) => commonPage.verifyUrlPage(text));

When('User change the language to "{}"', (text: string) => commonPage.changeLanguage(text));

Then('User sees the language is "{}"', (text: string) => commonPage.verifySelectedLanguage(text));

When('User clicks "{}" link', (text: string) => loginPage.clickSignUpLink(text));

Then('User is navigated to "{}" page', (text: string) => cy.url().should('include', text));

When('User enters user name to Username field', (username: string)=> signUpPage.fillUsername());

And('User enters random email to Email field', (email: string)=> signUpPage.fillEmail(email));

And('User enters "{}" to Password field', (password: string)=> signUpPage.fillPassword(password));

And('User enters "{}" to Confirm password field', (password: string)=> signUpPage.fillConfirmPassword(password));

And('User searchs and selects country code is "{}"', (country: string)=> signUpPage.searchCountryCode());

And('User enters "{}" to Phone number field', (phoneNumber: string)=> signUpPage.fillPhoneNumber(phoneNumber));

And('User enters "{}" to CPF field', (cpfCode: string)=> signUpPage.fillCPF(cpfCode));

And('User enters "{}" to Affiliate code field', (affCode: string)=> signUpPage.fillAffiliateCode(affCode));

And('User checks the Term of Use and Privacy Policy checkbox', ()=> signUpPage.checkTermAndPrivacyCheckbox());

And('User clicks "{}" button', (text: string) => commonPage.clickOnButton(text));

Then('User sees the successful message "{}"', (text: string) => signUpPage.verifySuccessSignUpMessage(text));

Then('User sees the error message "{}"', (text: string) => commonPage.verifyValidationTextContent(text))

Then('User sees the validation text "{}"', (text: string) => commonPage.verifyValidationTextContent(text))