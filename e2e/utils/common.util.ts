
import { browser, ExpectedConditions as EC } from 'protractor';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const log = require('../config/logging.config').defaults;

export class utilfunction {

    async navigateTo(url: string) {
        await browser.get('http://' + url + ':4200/');
        log.debug('URL : ' + url + ' is sucessfully opened');
    }

    async click(element: any) {
        try {
            await browser.wait(EC.elementToBeClickable(element));
            await element.click();
            log.debug('Click on ' + element.locator().toString() + ' is successful');
        } catch (err) {
            throw new Error(err);
        }
    };

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

    async validateElementDisplayed(element: any) {
        try {
            await expect(element.isDisplayed()).to.eventually.be.true;
            log.debug(element.locator().toString() + ' is displayed');
        } catch (err) {
            throw new Error(err);
        }
    };

    async validateTextPresentInElement(element: any, message: string) {
        try {
            await expect(element.getAttribute('innerText')).to.eventually.contain(message);
            log.debug(element.locator().toString() + ' with text ' + message + ' is present');
        } catch (err) {
            throw new Error(err);
        }
    };

    async browserSleep(seconds: number) {
        return browser.sleep(seconds);
    };


    async size(element: any) {
        let count = 0;
        try {
            count = await element.count();
        } catch (err) {
            log.debug('Element count is 0')
        }
        return count;
    };

    async validateLengthOfElement(actualCount: number, expectedCount: number) {
        try {
            await expect(actualCount).to.equal(expectedCount);
            log.debug('Count Matches');
        } catch (err) {
            throw new Error(err);
        }
    };
}