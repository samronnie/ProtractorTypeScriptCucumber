
import { browser, ExpectedConditions as EC } from 'protractor';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const log = require('../config/logging.config').defaults;

export class utilfunction {

    /**
     * To navigate to the specified url
     * @param url - url to navigate
     */
    async navigateTo(url: string) {
        await browser.get('http://' + url + ':4200/');
        log.debug('URL : ' + url + ' is sucessfully opened');
    }

    /**
     * To click on the specified element
     * @param element - element to perform click on
     */
    async click(element: any) {
        try {
            await browser.wait(EC.elementToBeClickable(element));
            await element.click();
            log.debug('Click on ' + element.locator().toString() + ' is successful');
        } catch (err) {
            throw new Error(err);
        }
    };

    /**
     * To type into an input field
     * @param element - element to type in text
     * @param character - text to type in
     */

    async type(element: any, character: string) {

        try {
            await browser.wait(EC.presenceOf(element));
            await element.clear();
            await element.sendKeys(character);
            log.debug('Succesfully typed ' + character + ' in ' + element.locator().toString());
        } catch (err) {
            throw new Error(err);
        }

    };

    /**
     * To  validate element contains the specified text
     * @param element - element to validate text
     * @param character - text to verify
     */

    async validateElementContainsText(element: any, character: string) {
        try {
            await browser.wait(EC.presenceOf(element));
            let searchText = await element.getText();
            await expect(searchText).to.contains(character);
            log.debug(element.locator().toString() + ' containing ' + character + " is successfully verified");
        } catch (err) {
            throw new Error(err);
        }
    };

    /**
     * to verify element is present in the page
     * @param element - element to be verfied
     */

    async validateElementDisplayed(element: any) {
        try {
            await expect(element.isDisplayed()).to.eventually.be.true;
            log.debug(element.locator().toString() + ' is displayed');
        } catch (err) {
            throw new Error(err);
        }
    };

    /**
     * To validate text is present in element
     * @param element - element to validat the text
     * @param message - text to be validated
     */

    async validateTextPresentInElement(element: any, message: string) {
        try {
            await expect(element.getAttribute('innerText')).to.eventually.contain(message);
            log.debug(element.locator().toString() + ' with text ' + message + ' is present');
        } catch (err) {
            throw new Error(err);
        }
    };

    /**
     * To perform no action
     * @param seconds - millisends to perform no action
     */
    async browserSleep(seconds: number) {
        return browser.sleep(seconds);
    };

    /**
     * To get the number of times element is present
     * @param element - element to get the count
     */

    async size(element: any) {
        let count = 0;
        try {
            count = await element.count();
        } catch (err) {
            log.debug('Element count is 0')
        }
        return count;
    };

    /**
     * To validate the element count is matching as expected
     * @param actualCount - Actual element count
     * @param expectedCount - Expected element count
     */
    async validateLengthOfElement(actualCount: number, expectedCount: number) {
        try {
            await expect(actualCount).to.equal(expectedCount);
            log.debug('Count Matches , acutal : '+ actualCount + ' with expected : ' + expectedCount);
        } catch (err) {
            throw new Error(err);
        }
    };
}