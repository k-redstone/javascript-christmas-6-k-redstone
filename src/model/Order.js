import { SETTING } from "../constants/Setting.js";

class Order {
  #orderList;

  constructor(menu) {
    this.#orderList = [];
    this.#splitMenuInput(menu);
  }

  getOrderList() {
    return this.#orderList;
  }

  getBeforeDiscountPrice() {
    return this.#orderList.reduce((acc, cur) => {
      return (acc += cur.price * cur.count);
    }, 0);
  }

  isFreeMenuAvailable() {
    if (this.getBeforeDiscountPrice() >= SETTING.free_menu_threshold)
      return true;
    return false;
  }

  #splitMenuInput(menu) {
    const splitMenu = menu.split(",");
    splitMenu.forEach((menu) => {
      const [menuName, menuCount] = menu.split("-");
      this.#orderList.push(
        this.#setMenu(menuName, menuCount, this.#findMenu(menuName))
      );
    });
  }

  #findMenu(menuName) {
    return SETTING.menuList.find((menu) => menu.name === menuName);
  }

  #setMenu(menuName, menuCount, menu) {
    return {
      name: menuName,
      count: parseInt(menuCount),
      price: menu.price,
      type: menu.type,
    };
  }
}

export default Order;
