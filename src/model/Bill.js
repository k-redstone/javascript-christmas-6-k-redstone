import { SETTING } from "../constants/Setting.js";

class Bill {
  #orderList;
  #visitDate;
  #visitDay;

  constructor(orderList, visitDate, visitDay) {
    this.#orderList = orderList;
    this.#visitDate = visitDate;
    this.#visitDay = visitDay;
  }

  #setIsDiscountAvailable() {
    if (this.getBeforeDiscountPrice() < SETTING.discount_threshold)
      return false;
    return true;
  }

  getBeforeDiscountPrice() {
    return this.#orderList.reduce((acc, cur) => {
      return (acc += cur.price * cur.count);
    }, 0);
  }

  getChristmasDiscountPrice() {
    if (!this.#setIsDiscountAvailable()) return 0;
    if (this.#visitDate <= SETTING.end_christmas_event_day) {
      return (
        SETTING.default_christmas_discount +
        (this.#visitDate - 1) * SETTING.day_christmas_discount * -1
      );
    }
    return 0;
  }

  getWeekDiscountPrice() {
    if (!this.#setIsDiscountAvailable()) return 0;
    if (this.#visitDay >= 0 && this.#visitDay <= 4) {
      const discountList = this.#orderList.filter(
        (menu) => menu.type === SETTING.week_discount_type
      );
      return discountList.reduce((acc, cur) => {
        return (acc += cur.count * SETTING.event_discount * -1);
      }, 0);
    }
    return 0;
  }

  getWeekendDiscountPrice() {
    if (!this.#setIsDiscountAvailable()) return 0;
    if (this.#visitDay === 5 || this.#visitDay === 6) {
      const discountList = this.#orderList.filter(
        (menu) => menu.type === SETTING.weekend_discount_type
      );
      return discountList.reduce((acc, cur) => {
        return (acc += cur.count * SETTING.event_discount * -1);
      }, 0);
    }
    return 0;
  }

  getSpecialDiscountPrice() {
    if (!this.#setIsDiscountAvailable()) return 0;
    if (SETTING.special_discount_day.includes(this.#visitDate)) {
      return SETTING.special_discount * -1;
    }
    return 0;
  }

  getFreeMenuDiscountPrice() {
    if (!this.#setIsDiscountAvailable()) return 0;
    if (this.getBeforeDiscountPrice() >= SETTING.free_menu_threshold)
      return SETTING.free_menu_price * -1;
    return 0;
  }

  getTotalDiscountPrice() {
    return (
      this.getChristmasDiscountPrice() +
      this.getWeekDiscountPrice() +
      this.getWeekendDiscountPrice() +
      this.getSpecialDiscountPrice()
    );
  }

  getTotalBenefitPrice() {
    return (
      this.getChristmasDiscountPrice() +
      this.getWeekDiscountPrice() +
      this.getWeekendDiscountPrice() +
      this.getSpecialDiscountPrice() +
      this.getFreeMenuDiscountPrice()
    );
  }

  getpayment() {
    return this.getBeforeDiscountPrice() + this.getTotalDiscountPrice();
  }
}

export default Bill;
