Feature: Forgot Password
Background:
    Given User opens login page
    Then User is navigated to "login" page 
    When User opens language dropdown
    And User change the language to "English"
    Then User sees the language is "English"
    When User clicks "Forgot Password?" link
    Then User is navigated to Forgot Password page

Scenario: User successfully reset their password
    When User enters email
    And User clicks "Reset" button
    Then User sees the message "We have sent the link to reset your password to your email."
    
