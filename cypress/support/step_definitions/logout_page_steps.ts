import LoginPage from "../page_objects/LoginPage";
import CommonPage from '../page_objects/commonPage';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';



const commonPage = new CommonPage();
const loginPage = new LoginPage ();

Given('User opens login page', () => commonPage.openURL());

Then('User is navigated to "{}" page', (text: string) => commonPage.verifyUrlPage(text));

And('User enters correct email "{}" to Email field', (text: string) =>loginPage.fillEmail(text));

And('User enters correct password "{}" to Password field', (text: string) => loginPage.fillPassword(text));

And('User clicks "{}" button', (text: string) => commonPage.clickOnButton(text));

Then('User sees the "{}" page', (text: string) => commonPage.verifyPageTilte(text));

When('User opens the profile name "{}"', (menu:string) => commonPage.openProfileMenu(menu));

And('User click "{}" in the menu', (text: string) => commonPage.clickValueOnProfileDropdown(text));

Then('User is navigated to "{}" page', (text: string) => commonPage.verifyUrlPage(text));


