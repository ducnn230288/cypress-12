import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LogoutPage from "../page_objects/LogoutPage";
import LoginPage from "../page_objects/LoginPage";


const logoutPage = new LogoutPage();
const loginPage = new LoginPage ();

Given('User opens login page', () => cy.visit('/'));
And('User enters correct email "{}" to Email field', (text: string) =>loginPage.fillEmail(text));
And('User enters correct password "{}" to Password field', (text: string) => loginPage.fillPassword(text));
And('User clicks "{}" button', (text: string) => loginPage.clickOnSignMeInButton(text));
Then('User sees the "{}" page', (text: string) => loginPage.verifyPageTitle(text));

When('User opens the profile name "{}"', (menu:string) => logoutPage.openProfileMenu(menu));
Then('User sees the menu including "{}"', (menu: string) => logoutPage.verifyProfileMenuItem(menu));
And('User click "{}" in the menu', (text: string) => logoutPage.clickLogout(text));
Then('User is navigated to login page and sees the text "{}"', (text: string) => logoutPage.verifyNavigateToSigninPage(text));

