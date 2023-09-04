const { $ } = require("@wdio/globals");

class LearnDetailPage {
  // Elements
  get pageTitle() {
    return $("h1");
  }

  get carImage() {
    return $(".img-thumbnail");
  }

  get carName() {
    return $("#car_name");
  }

  get carID() {
    return $("#car_id");
  }

  get carBodyType() {
    return $("#car_body_type");
  }

  get carModelType() {
    return $("#car_model_type");
  }

  // Page Methods
  async getPageTitleText() {
    return this.pageTitle.getText();
  }

  async getCarImageSource() {
    return this.carImage.getAttribute("src");
  }

  async getCarNameText() {
    return this.carName.getText();
  }

  async getCarIDText() {
    return this.carID.getText();
  }

  async getCarBodyTypeText() {
    return this.carBodyType.getText();
  }

  async getCarModelTypeText() {
    return this.carModelType.getText();
  }
}

module.exports = new LearnDetailPage();
