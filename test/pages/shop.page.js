const { $ } = require("@wdio/globals");

class ShopDetailPage {
  get pageTitle() {
    return $("h1");
  }

  get carImage() {
    return $("img.img-thumbnail");
  }

  get carName() {
    return $("#car_name");
  }

  get carID() {
    return $("#car_id");
  }

  get bodyType() {
    return $("#car_body_type");
  }

  get modelType() {
    return $("#car_model_type");
  }

  // methods
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

  async getBodyTypeText() {
    return this.bodyType.getText();
  }

  async getModelTypeText() {
    return this.modelType.getText();
  }
}

module.exports = new ShopDetailPage();
