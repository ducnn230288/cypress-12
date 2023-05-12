Feature: Logout
Background: User login successfully
    Given User opens login page
    When User enters correct email "crypto_test" to Email field
    And User enters correct password "Crypto2512" to Password field
    And User clicks "Fazer Login" button
    Then User sees the "Subscription expired" page

Scenario: LOG_009 User can successfully log out
    When User opens the profile name "crypto_test"
    Then User sees the menu including "Logout" 
    And User click "Logout" in the menu
    Then User is navigated to login page and sees the text "Faça login na sua conta"