const HomePage = require("../pages/home.page");

// Set the base URL
const baseUrl = "http://localhost:3000/";

describe("Home Page Test", function () {
  // Common setup for all tests
  beforeEach(function () {
    // Navigate to the home page before each test
    browser.url(baseUrl);
  });

  // Global timeout configuration
  const timeoutConfig = {
    timeout: 20000,
    timeoutMsg: "Items did not load within the specified time",
  };

  it("should display all items on the home page", async function () {
    // Verify that all items are displayed on the home page
    const itemCount = await browser.waitUntil(async () => {
      const count = await HomePage.getItemCountInCarousel();
      return count === 8; // Expecting 8 items on the home page
    }, timeoutConfig);

    // Log the number of items for reference
    console.log(`Number of items in the carousel: ${itemCount}`);
  });

  it("should filter and display SUV items", async function () {
    // Select "SUV" from the dropdown
    await HomePage.selectBodyType("SUV");

    // Verify that the correct number of SUV items are displayed
    const itemCount = await browser.waitUntil(async () => {
      const count = await HomePage.getItemCountInCarousel();
      return count === 4; // Expecting 4 SUV items
    }, timeoutConfig);

    // Log the number of SUV items for reference
    console.log(`Number of SUV items in the carousel: ${itemCount}`);
  });

  it("should filter and display Sedan items", async function () {
    // Select "Sedan" from the dropdown
    await HomePage.selectBodyType("sedan");

    // Verify that the correct number of Sedan items are displayed
    const itemCount = await browser.waitUntil(async () => {
      const count = await HomePage.getItemCountInCarousel();
      return count === 2; // Expecting 2 Sedan items
    }, timeoutConfig);

    // Log the number of Sedan items for reference
    console.log(`Number of Sedan items in the carousel: ${itemCount}`);
  });

  it("should filter and display Estate items", async function () {
    // Select "Estate" from the dropdown
    await HomePage.selectBodyType("estate");

    // Verify that the correct number of Estate items are displayed
    const itemCount = await browser.waitUntil(async () => {
      const count = await HomePage.getItemCountInCarousel();
      return count === 2; // Expecting 2 Estate items
    }, timeoutConfig);

    // Log the number of Estate items for reference
    console.log(`Number of Estate items in the carousel: ${itemCount}`);
  });
});

describe("Carousel Button moves carousel", function () {
  // Common setup for all tests
  beforeEach(function () {
    // Navigate to the home page before each test
    browser.url(baseUrl);
  });

  it("Check if carousel right and left button as moving", async function () {
    // move carousel right and left button
    await HomePage.moveCarousel("left");
    await HomePage.moveCarousel("right");
  });
});

describe("Redirect on clicking learn and shop button", function () {
  // Common setup for all tests
  beforeEach(function () {
    // Navigate to the home page before each test
    browser.url(baseUrl);
  });

  it("Check if Learn button is clicked and navigate to learn page", async function () {
    // Getting buttons
    const buttonId = "learn_xc90-recharge";
    const learnButton = await HomePage.getButtonForItem(buttonId);

    // Get the current URL before clicking the Learn button
    const beforeUrl = await browser.getUrl();

    // Click the Learn button
    await learnButton.click();

    // Wait for the navigation to complete with a retry mechanism
    const afterUrl = await browser.waitUntil(
      async () => {
        const newUrl = await browser.getUrl();
        return newUrl !== beforeUrl ? newUrl : null;
      },
      { timeout: 5000, timeoutMsg: "Navigation to Learn page timed out" }
    );

    const expectedUrl = "http://localhost:3000/learn/xc90-recharge";

    // Assert that the current URL matches the expected URL
    expect(afterUrl).toEqual(expectedUrl);
  });

  it("Check if Shop button is clicked and navigate to shop page", async function () {
    // Getting buttons
    const buttonId = "shop_xc90-recharge";
    const shopButton = await HomePage.getButtonForItem(buttonId);

    // Get the current URL before clicking the Learn button
    const beforeUrl = await browser.getUrl();

    // Click the Learn button
    await shopButton.click();

    // Wait for the navigation to complete with a retry mechanism
    const afterUrl = await browser.waitUntil(
      async () => {
        const newUrl = await browser.getUrl();
        return newUrl !== beforeUrl ? newUrl : null;
      },
      { timeout: 5000, timeoutMsg: "Navigation to Learn page timed out" }
    );

    const expectedUrl = "http://localhost:3000/shop/xc90-recharge";

    // Assert that the current URL matches the expected URL
    expect(afterUrl).toEqual(expectedUrl);
  });
});
