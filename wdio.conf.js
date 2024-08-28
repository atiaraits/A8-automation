export const config = {

    runner: 'local',


    specs: [
        // './test/specs/**/test.signup.js'
        './test/specs/**/test.login.js'
    ],

    suites: {

        registration: [
            './test/specs/**/test.signup.js',
        ],

        login: [
            './test/specs/**/test.login.js',
            
        ],

        regression: [
            './test/specs/**/test.signup.js',
            './test/specs/**/test.login.js',
        ]
    },


    exclude: [
        // 'path/to/excluded/files'
    ],

    before: function (capabilities, specs) {
        browser.maximizeWindow();
    },

    logLevel: 'error',
    bail: 0,
    capabilities: [
        {
            maxInstances: 10,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
        // {
        //     maxInstances: 10,
        //     browserName: 'firefox',
        //     acceptInsecureCerts: true
        // }
    ],


    waitforTimeout: 50000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],

    framework: 'mocha',

    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    baseUrl: 'http://localhost'
}
