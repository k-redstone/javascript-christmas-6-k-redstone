import { Console } from "@woowacourse/mission-utils";
import { validateVisitDate, validateMenu } from "../utils/Validation.js";
import { getDay, splitMenuInput } from "../utils/common.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Order from "../model/Order.js";

class OrderController {
  #orderList;

  async run() {
    OutputView.printIntro();
    const [visitDate, visitDay] = await this.#getVisitDate();
    const menu = await this.#getMenu();
    OutputView.printpreview(visitDate);
    this.#orderList = new Order(menu);
    OutputView.printMenuList(this.#orderList.getOrderList());
  }

  async #createOrder() {}

  async #getVisitDate() {
    try {
      const visitDate = await InputView.readDate();
      validateVisitDate(visitDate);
      const visitDay = getDay(visitDate);
      return [visitDate, visitDay];
    } catch (error) {
      Console.print(error.message);
      return await this.#getVisitDate();
    }
  }

  async #getMenu() {
    try {
      const orderMenu = await InputView.readMenu();
      validateMenu(orderMenu);
      return orderMenu;
    } catch (error) {
      Console.print(error.message);
      return await this.#getMenu();
    }
  }
}

export default OrderController;
