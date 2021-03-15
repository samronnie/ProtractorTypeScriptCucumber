import { When, Then } from "cucumber";
import { search } from "../pages/search.page";
const searchPage: search = new search();
import { utilfunction } from "../utils/common.util";
const utilFunction: utilfunction = new utilfunction();


When('User searches with star wars {string} with {string}', { timeout: 25 * 1000 }, async (detail: string, searchText: string) => {
    if (detail == 'people')
        await searchPage.chooseSearchByPeople();
    else if (detail == 'planet')
        await searchPage.chooseSearchByPlanet();
    await searchPage.enterSearchTextAndPerformSearch(searchText);
});

Then('Total count of result data should be {int}', { timeout: 25 * 1000 }, async (count: number) => {
    let actualCount = await searchPage.lengthOfSearchResult();
    await utilFunction.validateLengthOfElement(actualCount, count);
});
Then('User should see the details {string} {string} {string} {string} for the searched character', { timeout: 25 * 1000 }, async (gender: string, birthYear: string, eyeColor: string, skinColor: string) => {
    await searchPage.validateResultData(gender, birthYear, eyeColor, skinColor);
});

Then('User should see message {string} in the search results', { timeout: 25 * 1000 }, async (message: string) => {
    await utilFunction.validateTextPresentInElement(searchPage.noSearchResultFound, message);
});
Then('User should see the details {string} {string} {string} for the searched planet', { timeout: 25 * 1000 }, async (population: string, climate: string, gravity: string) => {
    await searchPage.validateResultDataPlanet(population, climate, gravity);
});


