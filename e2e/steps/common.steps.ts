
import { Given } from "cucumber";
import { utilfunction } from "../utils/common.util";
import { search } from "../pages/search.page";

const utilFunction: utilfunction = new utilfunction();
const searchPage: search = new search();

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (domain: string) => {

    await utilFunction.navigateTo(domain);
    await utilFunction.validateElementDisplayed(searchPage.searchTextBox);
});


