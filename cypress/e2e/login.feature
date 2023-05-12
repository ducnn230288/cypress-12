Feature: Login
Background: User is on login page
    Given User opens login page
    # And User change the language to "English"
Scenario: LOG_001 Verify that user can successfully login with correct email and password 
    When User enters correct email "crypto_test" to Email field
    And User enters correct password "Crypto2512" to Password field
    And User clicks "Fazer Login" button
    Then User sees the "Subscription expired" page

Scenario: LOG_003 Verify that user cannot successfully login with correct email and incorrect password 
    When User enters correct email "crypto_test" to Email field
    And User enters incorrect password "Crypto2512abcd" to Password field
    And User clicks "Fazer Login" button
    Then User sees the info validation text "E-mail ou senha incorretos."

Scenario: LOG_004 Verify that user cannot successfully login with incorrect email and correct password 
    When User enters incorrect email "crypto_test1234" to Email field
    And User enters correct password "Crypto2512" to Password field
    And User clicks "Fazer Login" button
    Then User sees the info validation text "E-mail ou senha incorretos."

Scenario: LOG_005 Verify that user cannot successfully login with incorrect email and password 
    When User enters incorrect email "crypto_test1234" to Email field
    And User enters incorrect password "Crypto2512" to Password field
    And User clicks "Fazer Login" button
    Then User sees the info validation text "E-mail ou senha incorretos."

Scenario: LOG_006 Verify that user cannot successfully when leaving all fields blank
    When User leaves all fields blank and clicks "Fazer Login" button
    Then User sees "2" validation texts
    Then User sees the validation text "Por favor insira seu e-mail." below Email field
    Then User sees the validation text "Por favor, coloque sua senha." below Password field

Scenario: LOG_007 Verify that user cannot successfully when leaving Email field blanks
    When User enters correct password "Crypto2512" to Password field
    And User clicks "Fazer Login" button
    Then User sees the validation text "Por favor insira seu e-mail." below Email field

Scenario: LOG_008 Verify that user cannot successfully when leaving Password field blanks
    When User enters correct email "crypto_test" to Email field
    And User clicks "Fazer Login" button
    Then User sees the validation text "Por favor, coloque sua senha." below Password field


