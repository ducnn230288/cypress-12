Feature: Logout
Background: User login successfully
    Given User opens login page
    Then User is navigated to "login" page 
    And User opens language dropdown
    And User change the language to "English"
    Then User sees the language is "English"
    When User enters correct email "crypto_test" to Email field
    And User enters correct password "Crypto2512" to Password field
    And User clicks "Sign Me In" button
    Then User sees the "Home" page

Scenario: LOG_009 User can successfully log out
    When User opens the profile name "crypto_test"
    Then User sees the menu including "Logout" 
    And User click "Logout" in the menu
    Then User is navigated to "login" page 
    And User sees the text "Sign in your account"