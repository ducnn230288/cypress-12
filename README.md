# Cypress

The project applies Page object model(POM) and uses the following:
- cypress-cucumber-preprocessor for Behavior Driven Development (BDD)
- multiple-cucumber-html-reporter for reporting


## Project Structure
![image](https://user-images.githubusercontent.com/32613878/218597358-58cbb890-4a6e-4c05-a972-b21f58755096.png)
- Depending on edits or additions of the page, the page object can be updated easily, they exist in cypress/support/page_objects.  
- New steps definations or editing existing ones, this can be done in cypress/support/step_definitions. This enables to create different type of steps.
- After that add test cases in cypress/e2e folder in feature files,  you can create new testcases based on older step definitions or newly created ones which are readable to stakeholders.

## Installation
Run this to install the project
<br />
`npm install`
 
## Usage

To run the project in headless mode:
<br />
`npx cypress run --spec cypress/e2e/spec.feature --browser chrome`
page object model (pom)
To run and select the browser you can use:
<br />
`npx cypress open`

Both will create the folder reports/cucumber-json, this will help in creating the html report in the next section.

## Generate reports
Only when reports/allure-results folder is generated, follow the next steps 

Also, you need to have Allure Framework installed
<br />
`https://docs.qameta.io/allure/#_installing_a_commandline`

Run the script (this depends on reports/allure-results folder)
<br />
`npm run post-test`

This will create report/allure-report, and auto open browser show reports

![image](https://user-images.githubusercontent.com/32613878/218597479-fd17b476-4ac6-4ab4-845d-7643b99c706c.png)


https://user-images.githubusercontent.com/32613878/218599553-4eec3c4f-947a-462c-ba26-de10ac7f21e9.mp4




