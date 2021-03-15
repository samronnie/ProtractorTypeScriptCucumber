Feature: Validate the search results are displayed properly when searching by characters

    @searchByStarWarsCharacter @Regression
    Scenario Outline: Validate details are displayed when searching using valid star wars character

        Given The app is open on "localhost"
        When User searches with star wars "people" with "Luke Skywalker"
        Then Total count of result data should be 1
        Then User should see the details "<Gender>" "<Birth year>" "<Eye color>" "<Skin color>" for the searched character
        When User searches with star wars "people" with "Pokemon"
        Then User should see message "Not found." in the search results

        Examples:
            | Gender | Birth year | Eye color | Skin color |
            | male   | 19BBY      | blue      | fair       |


    @searchByStarWarsCharacterAfterSwitch @Regression
    Scenario: Validate details are not displayed when switching to search by character after finding results from planet

        Given The app is open on "localhost"
        When User searches with star wars "planet" with "Alderaan"
        Then Total count of result data should be 1
        When User searches with star wars "people" with "Alderaan"
        Then Total count of result data should be 0
        Then User should see message "Not found." in the search results




