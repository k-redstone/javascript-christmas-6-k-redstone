import { SETTING } from "../constants/Setting.js";

class Bill {
  #orderList;
  #visitDate;
  #visitDay;
  #isFreeMenu;

  constructor(orderList, visitDate, visitDay, isFreeMenu) {
    this.#orderList = orderList;
    this.#visitDate = visitDate;
    this.#visitDay = visitDay;
    this.#isFreeMenu = isFreeMenu;
  }

  getChristmasDiscountPrice() {
    if (this.#visitDate <= SETTING.end_christmas_event_day) {
      return (
        SETTING.default_christmas_discount +
        (this.#visitDate - 1) * SETTING.day_christmas_discount
      );
    }
    return 0;
  }

  getWeekDiscountPrice() {
    if (this.#visitDay >= 0 && this.#visitDay <= 4) {
      const discountList = this.#orderList.filter(
        (menu) => menu.type === SETTING.week_discount_type
      );
      return discountList.reduce((acc, cur) => {
        return (acc += cur.count * SETTING.event_discount);
      }, 0);
    }
    return 0;
  }

  getWeekendDiscountPrice() {
    if (this.#visitDay === 5 || this.#visitDay === 6) {
      const discountList = this.#orderList.filter(
        (menu) => menu.type === SETTING.weekend_discount_type
      );
      return discountList.reduce((acc, cur) => {
        return (acc += cur.count * SETTING.event_discount);
      }, 0);
    }
    return 0;
  }

  getSpecialDiscountPrice() {
    if (SETTING.special_discount_day.includes(this.#visitDate)) {
      return SETTING.special_discount;
    }
    return 0;
  }

  getFreeMenuDiscountPrice() {
    if (this.#isFreeMenu) {
      return SETTING.free_menu_price;
    }
    return 0;
  }

  getTotalDiscountPrice() {
    return (
      this.getChristmasDiscountPrice() +
      this.getWeekDiscountPrice() +
      this.getWeekendDiscountPrice() +
      this.getSpecialDiscountPrice() +
      this.getFreeMenuDiscountPrice()
    );
  }
}

export default Bill;
