import { SETTING } from "../constants/Setting.js";
import { CONSOLE_MESSAGE, format } from "../constants/ConsoleMessage.js";

class Order {
  #orderList;

  constructor(menu) {
    this.#orderList = [];
    this.#splitMenuInput(menu);
  }

  getOrderList() {
    const orderList = [];
    this.#orderList.forEach((order) => {
      orderList.push(
        format(CONSOLE_MESSAGE.output_menuList, order.name, order.count)
      );
    });
    return orderList;
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
