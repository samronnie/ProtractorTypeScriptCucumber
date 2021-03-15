const { Before, After, AfterAll, Status } = require("cucumber");
import { browser } from "protractor";

const log = require('../config/logging.config').defaults;

declare let global: any;

Before(async function (scenario) {

    log.debug('Test execution for scenario ************ ' + scenario.pickle.name + ' ************* is started.');

});

After(async function (scenario) {

    if (scenario.result.status === Status.FAILED || Status.PASSED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }

    log.debug('Test execution for scenario ************ ' + scenario.pickle.name + ' ************ is completed.')
});


AfterAll({}, async () => {
    await browser.quit();
});

export const tcname = global.tcname;