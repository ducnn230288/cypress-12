Feature: Add email
Scenario: Add email
    Given User opens Getnada page
    When User clicks "Add inboxe" button
    And User enters username "new_user_1"
    And User selects domain "@getnada.com"
    And User clicks "Add now!" button
    And User clicks to view the mail detail "Activate your email"
    And User click "Verify Now" button
