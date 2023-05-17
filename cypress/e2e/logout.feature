Feature: Logout
Background: User login successfully
    Given User opens login page
    Then User is navigated to "login" page 
    When User change the language to "English"
    Then User sees the language is "English"
    When User enters correct email "crypto_test" to Email field
    And User enters correct password "Crypto2512" to Password field
    And User clicks "Sign Me In" button
    Then User sees the "Home" page

Scenario: LOG_009 User can successfully log out
    When User opens the profile name "crypto_test"
    And User click "Logout" in the menu
    Then User is navigated to "login" page 
