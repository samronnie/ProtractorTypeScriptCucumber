# QA Engineer Assessment Solution
# Automation Framework
Framework created using protractor, typescript and cucumber

# E2E Test Framework created using Protractor + Typescript + Cucumber + Proctractor cucumber report.

The tech stack used for this framework creation are:

1. Typescript and Javascript as the programming language for writing test code
2. npm for downloading and configuring the dependencies
4. VSCode as the preferred IDE for writing javascript code.

## Cloning & Importing the Project
1. Clone the project using 'Clone repository' option in VSCode
2. Import the project in VSCode

#### Features Files,

Created 2 Features files based on the given requirement.

```
Feature: Search for a Star Wars characters,
Feature: Search for a Star Wars planets,

```

#### Step Definitions

Used Cucumber feature files to write test cases. 

Example File,
```
import { Given } from "cucumber";
import { common } from "../utils/common.util";
import { search } from "../pages/search.page";

const commonStep: common = new common();
const searchPage: search = new search();

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (domain: string) => {

    await commonStep.navigateTo(domain);
    await commonStep.validateElementDisplayed(searchPage.searchTextBox);
});


```

## Page Objects

Design pattern, popularly used in test automation that creates Object Repository for web UI elements.The advantage of the model is that it reduces code duplication and improves test maintenance.

Under this model, for each web page in the application, there should be a corresponding Page Class. 
This Page class will identify the WebElements of that web page and also contains Page methods which perform operations on those WebElements.

```
import { $ } from "protractor";

export class SearchPageObject {
    public inputTextBox: ElementFinder;
    public peopleRadioButton: ElementFinder;
    public planetsRadioButton: ElementFinder;
    public searchButton: ElementFinder;
    public notFound: ElementFinder;

    constructor() {
         this.inputTextBox = element(by.id('query'));
        this.peopleRadioButton = element(by.id('people'));
        this.planetsRadioButton = element(by.id('planets'));
    }
}

```

## Page Objects

Logs for steps are created using Log4js, Which helps in looking into step logs for debugging purpose.

### cucumber Hooks

Before, After, AfterAll

Above Hooks are used for taking screenshot,quitting the browser etc.

### Report In html using protractor-multiple-cucumber-html-reporter

Report with failure screenshots are generated after the test run using 

protractor-multiple-cucumber-html-reporter

### Bugs or anomalies

````
Scenario: When you search for either a character or a planet and you get one or more results for it, clear the “Search form” and hit the Search button again, you should then get an empty result list (previous search results are removed). - Failed.

Actual - Search results are not cleared.

Expected - Search results should be cleared.

````

### Name and optionally contact information

Raja Samuel David Pradeepkumar
smrj47@gmail.com


## Remarks 

...
