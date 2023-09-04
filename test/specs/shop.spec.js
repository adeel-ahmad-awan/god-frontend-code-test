const ShopDetailPage = require("../pages/shop.page");

// Set the base URL
const baseUrl = "http://localhost:3000/";

describe("Shop Detail Page Test", function () {
  // Common setup for all tests
  beforeEach(function () {
    // Navigate to the shop detail page before each test
    browser.url(`${baseUrl}/shop/xc90-recharge`);
  });

  it("should display the correct page title", async function () {
    // Verify that the page title is displayed and matches the expected text
    const pageTitle = await ShopDetailPage.getPageTitleText();
    expect(pageTitle).toEqual("Shop Detail Page");
  });

  it("should display the car image", async function () {
    // Verify that the car image is displayed
    const imageSource = await ShopDetailPage.getCarImageSource();
    expect(imageSource).toContain("/images/xc90_recharge.jpg");
  });

  it("should display the car name", async function () {
    // Verify that the car name is displayed and matches the expected text
    const carName = await ShopDetailPage.getCarNameText();
    expect(carName).toContain("Car Name: XC90 Recharge");
  });

  it("should display the car ID", async function () {
    // Verify that the car ID is displayed and matches the expected text
    const carID = await ShopDetailPage.getCarIDText();
    expect(carID).toContain("ID: xc90-recharge");
  });

  it("should display the car body type", async function () {
    // Verify that the car body type is displayed and matches the expected text
    const bodyType = await ShopDetailPage.getBodyTypeText();
    expect(bodyType).toContain("Body Type: suv");
  });

  it("should display the car model type", async function () {
    // Verify that the car model type is displayed and matches the expected text
    const modelType = await ShopDetailPage.getModelTypeText();
    expect(modelType).toContain("Model Type: plug-in hybrid");
  });
});
