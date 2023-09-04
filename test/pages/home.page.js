const { $ } = require("@wdio/globals");

class HomePage {
  get navigationBar() {
    return $(".navbar");
  }

  get bodyTypeSelect() {
    return $("#bodyTypeSelect");
  }

  get emptyFilterText() {
    return $(".empty_filter_text");
  }

  get carouselItems() {
    return $$(".react-multi-carousel-item");
  }

  get carouselLeftButton() {
    return $("#carousel_left");
  }

  get carouselRightButton() {
    return $("#carousel_right");
  }

  // select dropdown value
  async selectBodyType(bodyType) {
    await this.bodyTypeSelect.selectByAttribute("value", bodyType);
  }

  // get items count
  async getItemCountInCarousel() {
    const items = await this.carouselItems;
    return items.length;
  }

  // function to move carousel
  async moveCarousel(direction) {
    if (direction === "left" || direction === "right") {
      const button =
        direction === "left"
          ? this.carouselLeftButton
          : this.carouselRightButton;
      // clisking button
      await button.click();
    } else {
      throw new Error(`Invalid direction argument. Use 'left' or 'right'.`);
    }
  }

  // get button by ID
  async getButtonForItem(buttonId) {
    const myButton = await $(`#${buttonId}`);
    return myButton;
  }
}

module.exports = new HomePage();
