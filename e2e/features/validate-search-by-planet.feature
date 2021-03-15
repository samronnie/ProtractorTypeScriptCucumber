Feature: Validate the search results are displayed properly when searching by characters

    @searchByStarWarsPlanet
    Scenario Outline: Validate details are displayed when searching using valid star wars character

        Given The app is open on "localhost"
        When User searches with star wars "planet" with "Alderaan"
        Then Total count of result data should be 1
        Then User should see the details "<Population>" "<Climate>" "<Gravity>" for the searched planet
        When User searches with star wars "planet" with "pn"
        Then User should see message "Not found." in the search results

        Examples:
            | Population | Climate   | Gravity    |
            | 2000000000 | temperate | 1 standard |

