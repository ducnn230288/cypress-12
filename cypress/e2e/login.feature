Feature: Login
Background: User is on login page
    Given User opens login page
    And User opens language dropdown
    And User change the language to "English"

Scenario: LOG_001 Verify that user can successfully login with correct email and password 
    When User enters correct email "crypto_test" to Email field
    And User enters correct password "Crypto2512" to Password field
    And User clicks "Sign Me In" button
    Then User sees the "Home" page

Scenario: LOG_003 Verify that user cannot successfully login with correct email and incorrect password 
    When User enters correct email "crypto_test" to Email field
    And User enters incorrect password "Crypto2512abcd" to Password field
    And User clicks "Sign Me In" button
    Then User sees the info validation text "Wrong email or password."

Scenario: LOG_004 Verify that user cannot successfully login with incorrect email and correct password 
    When User enters incorrect email "crypto_test12" to Email field
    And User enters correct password "Crypto2512" to Password field
    And User clicks "Sign Me In" button
    Then User sees the info validation text "Wrong email or password."

Scenario: LOG_005 Verify that user cannot successfully login with incorrect email and password 
    When User enters incorrect email "crypto_test12" to Email field
    And User enters incorrect password "Crypto2512" to Password field
    And User clicks "Sign Me In" button
    Then User sees the info validation text "Wrong email or password."

Scenario: LOG_006 Verify that user cannot successfully when leaving all fields blank
    When User leaves all fields blank and clicks "Sign Me In" button
    Then User sees "2" validation texts
    Then User sees the validation text "Please input your email" below Email field
    Then User sees the validation text "please input your password" below Password field

Scenario: LOG_007 Verify that user cannot successfully when leaving Email field blanks
    When User enters correct password "Crypto2512" to Password field
    And User clicks "Sign Me In" button
    Then User sees the validation text "Please input your email" below Email field

Scenario: LOG_008 Verify that user cannot successfully when leaving Password field blanks
    When User enters correct email "crypto_test" to Email field
    And User clicks "Sign Me In" button
    Then User sees the validation text "please input your password" below Password field


