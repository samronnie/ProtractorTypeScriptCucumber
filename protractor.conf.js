// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    strict: true,
    tags: '@searchByStarWarsCharacterAfterSwitch',
    require: [
      './e2e/**/*.steps.ts','./e2e/**/*.util.ts'
    ],
    format: [
      'json:e2e/test-reports/cucumber-test-results.json'
    ]
  },
  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: {
        args: ['disable-infobars']
    },
    metadata: {
        browser: {
            name: 'chrome',
            version: '89'
        },
        device: 'MacBook Air',
        platform: {
            name: 'OSX',
            version: '14'
        }
    }
}],
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  },

  plugins: [
    {
      package: "protractor-multiple-cucumber-html-reporter-plugin",
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
      }
    }
  ]

};
