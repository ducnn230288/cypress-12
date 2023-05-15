Feature: Sign up account
Background: User opens Sign up page
    Given User opens login page
    Then User is navigated to "login" page 
    When User opens language dropdown
    And User change the language to "English"
    Then User sees the language is "English"
    When User clicks "Sign Up" link
    Then User is navigated to "sign-up" page 
    And User opens language dropdown
    And User change the language to "English"
    Then User sees the language is "English"

Scenario Outline: User successfully sign up an account <testCaseTitle>
    # When User enters "<username>" to Username field
    And User enters "<email>" to Email field
    And User enters "<password>" to Password field
    And User enters "<confirmPassword>" to Confirm password field
    And User searchs and selects country code is "<countryCode>"
    And User enters "<phoneNumber>" to Phone number field
    And User enters "<cpfCode>" to CPF field
    And User enters "<affiliateCode>" to Affiliate code field
    And User checks the Term of Use and Privacy Policy checkbox
    And User clicks "Sign Up" button
    Then User sees the successful message "Register successfully! Please verify your email."

    
    
#     Examples:
#     | testCaseTitle                                                                             | username              | email                         | password          | confirmPassword       | countryCode       | phoneNumber       | cpfCode               | affiliateCode     |
#     | with valid username, email, password, phone number && CPF and Affiliate code blank        | new_account_1         | new_account_1@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        |
#     | with valid username, email, password, phone number, CPF and Affiliate code                | new_account_2         | new_account_2@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111112         | 733.007.549-33        | 1234567890        |
#     | with valid username, email, password, phone number, CPF &&  Affiliate code blank          | new_account_3         | new_account_3@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111113         | 499.059.500-95        | 1234567890        |
#     | with valid username, email, password, phone number, Affiliate code &&  CPF code blank     | new_account_4         | new_account_4@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111114         | 779.799.740-34        | 1234567890        |

# Scenario: Verify that user sign up an account unsuccessfully with existing username

#     When User enters "new_user_2" to Username field
#     And User enters "new_user_5@getnada.com" to Email field
#     And User enters "Crypto2512!" to Password field
#     And User enters "Crypto2512!" to Confirm password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the error message "A user with that username already exists."   

# Scenario: Verify that user sign up an account unsuccessfully with existing email

#     When User enters "new_user_5" to Username field
#     And User enters "new_user_2@getnada.com" to Email field
#     And User enters "Crypto2512!" to Password field
#     And User enters "Crypto2512!" to Confirm password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the error message "Email already exists."

# Scenario: Verify that user sign up an account unsuccessfully with existing username and email

#     When User enters "new_user_2" to Username field
#     And User enters "new_user_2@getnada.com" to Email field
#     And User enters "Crypto2512!" to Password field
#     And User enters "Crypto2512!" to Confirm password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the error message "A user with that username already exists."
#     Then User sees the error message "Email already exists."

# Scenario: Verify that user sign up an account unsuccessfully when leaving all fields blank

#     And User clicks "Sign Up" button
#     Then User sees the validation text "Please input your username"
#     Then User sees the validation text "Please input your email"
#     Then User sees the validation text "Password must not be empty"
#     Then User sees the validation text "Confirm password must not be empty"
#     Then User sees the validation text "Please input your phone number"
#     Then User sees the validation text "Please read carefully and agree with the terms and conditions before using Our Service"

# Scenario: Verify that user sign up an account unsuccessfully when leaving username field blanks

#     And User enters "new_user_5@getnada.com" to Email field
#     And User enters "Crypto2512!" to Password field
#     And User enters "Crypto2512!" to Confirm password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the validation text "Please input your username"

# Scenario: Verify that user sign up an account unsuccessfully when leaving email field blanks

#     When User enters "new_user_5" to Username field
#     And User enters "Crypto2512!" to Password field
#     And User enters "Crypto2512!" to Confirm password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the validation text "Please input your email"

# Scenario: Verify that user sign up an account unsuccessfully when leaving password field blanks

#     When User enters "new_user_5" to Username field
#     And User enters "new_user_5@getnada.com" to Email field
#     And User enters "Crypto2512!" to Confirm password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the validation text "Password must not be empty"    

# Scenario: Verify that user sign up an account unsuccessfully with Confirm password field blanks

#     When User enters "new_user_5" to Username field
#     And User enters "new_user_5@getnada.com" to Email field
#     And User enters "Crypto2512!" to Password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the validation text "Confirm password must not be empty"

# Scenario: Verify that user sign up an account unsuccessfully with Phone number field blanks

#     When User enters "new_user_5" to Username field
#     And User enters "new_user_5@getnada.com" to Email field
#     And User enters "Crypto2512!" to Password field
#     And User enters "Crypto2512!" to Confirm password field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User checks the Term of Use and Privacy Policy checkbox
#     And User clicks "Sign Up" button
#     Then User sees the validation text "Please input your phone number"    

# Scenario: Verify that user sign up an account unsuccessfully with Terms and Privacy uncheck

#     When User enters "new_user_5" to Username field
#     And User enters "new_user_5@getnada.com" to Email field
#     And User enters "Crypto2512!" to Password field
#     And User enters "Crypto2512!" to Confirm password field
#     And User searchs and selects country code is "Vietnam"
#     And User enters "987654321" to Phone number field
#     And User enters "596.822.141-06" to CPF field
#     And User enters "1234567890" to Affiliate code field
#     And User clicks "Sign Up" button
#     Then User sees the validation text "Please read carefully and agree with the terms and conditions before using Our Service"
   
Scenario Outline: Verify that user sign up an account unsuccessfully <testCaseTitle>

    When User enters "<username>" to Username field
    And User enters "<email>" to Email field
    And User enters "<password>" to Password field
    And User enters "<confirmPassword>" to Confirm password field
    And User searchs and selects country code is "<countryCode>"
    And User enters "<phoneNumber>" to Phone number field
    And User enters "<cpfCode>" to CPF field
    And User enters "<affiliateCode>" to Affiliate code field
    And User checks the Term of Use and Privacy Policy checkbox
    And User clicks "Sign Up" button
    Then User sees the validation text "<validationText>"

    Examples:
    | testCaseTitle                                          | username              | email                         | password          | confirmPassword       | countryCode       | phoneNumber       | cpfCode               | affiliateCode     | validationText                                            |
    | with invalid username                                  | !$%^&*'""'            | new_account_5@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Username container letters, digits and @/./+/-/_ only.    |
    | with invalid email format                              | new_account_5         | new_account_5@getnada.        | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Invalid email format                                      |
    | with invalid email format                              | new_account_5         | new_account_5@getnada         | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Enter a valid email address.                                      |
    | with invalid email format                              | new_account_5         | new_account_5@                | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Invalid email format                                      |
    | with invalid email format                              | new_account_5         |              @getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Invalid email format                                      |
    | with invalid email format                              | new_account_5         | new_account_5@getnada,com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Invalid email format                                      |
    | with invalid email format                              | new_account_5         | new_account_5@.com            | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Invalid email format                                      |
    | with invalid email format                              | new_account_5         | new_account_5@@.getnada.com   | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Invalid email format                                      |
    | with less than 8 character password                    | new_account_5         | new_account_5@getnada.com     | Cryto1@           | Cryto1@               | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Password must be at least 8 characters                    |
    | with password does not contain 1 Uppercase             | new_account_5         | new_account_5@getnada.com     | crypto12345!      | crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Password must contain at least 1 uppercase                |
    | with password does not contain special character       | new_account_5         | new_account_5@getnada.com     | Crypto123456      | Crypto123456          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Password must contain special character                   |
    | with password does not contain number                  | new_account_5         | new_account_5@getnada.com     | Cryptotrade!      | Cryptotrade!          | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | Password must contain at least one number                 |
    | with Repeat password does not match the Password       | new_account_5         | new_account_5@getnada.com     | Crypto12345!      | Crypto123456789!      | Vietnam           | 984111111         | 596.822.141-06        | 1234567890        | The two passwords that you entered do not match!          |
    | with invalid phone number by phone area code           | new_account_5         | new_account_5@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 9                 | 596.822.141-06        | 1234567890        | invalid phone number                                      |
    | with CPF less than 12 number                           | new_account_5         | new_account_5@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-0         | 1234567890        | invalid CPF value                                         |
    | with CPF more than 12 number                           | new_account_5         | new_account_5@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-067       | 1234567890        | invalid CPF value                                         |
    | with more than 10 character Affiliate code             | new_account_5         | new_account_5@getnada.com     | Crypto12345!      | Crypto12345!          | Vietnam           | 984111111         | 596.822.141-06        | 12345678910       | Maximum 10 characters allowed                             |
