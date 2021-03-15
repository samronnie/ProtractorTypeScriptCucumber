import { by, element, ElementArrayFinder, ElementFinder } from 'protractor';
import { utilfunction } from "../utils/common.util";
const utilFunction: utilfunction = new utilfunction();
const log = require('../config/logging.config').defaults;
export class search {

    public searchTextBox: ElementFinder;
    public buttonSearch: ElementFinder;
    public searchResults: ElementArrayFinder;
    public noSearchResultFound: ElementFinder;
    public searchByPeople: ElementFinder;
    public searchByPlanet: ElementFinder;
    public resultData: ElementArrayFinder;

    constructor() {
        this.searchTextBox = element(by.id('query'));
        this.buttonSearch = element(by.buttonText('Search'));
        this.searchResults = element.all(by.css('.row')).all(by.css('.col-sm-10'));
        this.noSearchResultFound = element(by.xpath("//*[contains(text(), 'Not found.')]"));
        this.searchByPeople = element(by.id('people'));
        this.searchByPlanet = element(by.id('planets'));
        this.resultData = element.all(by.xpath("//h6[@class='card-subtitle mb-2 text-muted']/parent::*"));

    }

    async chooseSearchByPeople() {
        await utilFunction.click(this.searchByPeople);
        log.debug('Selected Search by People');
    }

    async enterSearchTextAndPerformSearch(searchText: string) {

        await utilFunction.type(this.searchTextBox, searchText);
        await utilFunction.click(this.buttonSearch);
        log.debug('Search text is entered and search click on search button');
    }

    async chooseSearchByPlanet() {
        await utilFunction.click(this.searchByPlanet);
    }

    async lengthOfSearchResult() {

        let countOfItems = await utilFunction.size(this.resultData);
        log.debug('Count ' + countOfItems);
        return countOfItems;
    }

    async validateResultData(gender: string, birthYear: string, eyeColor: string, skinColor: string) {
        await utilFunction.validateElementContainsText(this.searchResults, gender);
        await utilFunction.validateElementContainsText(this.searchResults, birthYear);
        await utilFunction.validateElementContainsText(this.searchResults, eyeColor);
        await utilFunction.validateElementContainsText(this.searchResults, skinColor);
        log.debug('Validation of search results for star wars character is successful');
    }

    async validateResultDataPlanet(population: string, climate: string, gravity: string) {
        await utilFunction.validateElementContainsText(this.searchResults, population);
        await utilFunction.validateElementContainsText(this.searchResults, climate);
        await utilFunction.validateElementContainsText(this.searchResults, gravity);
        log.debug('Validation of search results for star wars planet is successful');

    }

};