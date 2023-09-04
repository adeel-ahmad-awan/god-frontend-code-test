exports.config = {
  runner: "local",
  specs: ["./tests/*.test.js"],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {},
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost:3000",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  before: function (capabilities, specs) {
    // Set up any necessary configuration or environment here
  },
  afterTest: function (test, context, { error, result, duration, passed }) {
    // Perform any cleanup or reporting after each test
  },
};
