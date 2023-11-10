import { Console } from "@woowacourse/mission-utils";
import { validateVisitDate, validateMenu } from "../utils/Validation.js";
import { getDay, splitMenuInput } from "../utils/common.js";
import InputView from "../view/InputView.js";

class OrderController {
  async run() {
    await this.#getVisitDate();
    await this.#getMenu();
  }

  async createOrder() {
    try {
    } catch (error) {}
  }

  async #getVisitDate() {
    try {
      const visitDate = await InputView.readDate();
      validateVisitDate(visitDate);
      const visitDay = getDay(visitDate);
      return [visitDate, visitDay];
    } catch (error) {
      Console.print(error.message);
      await this.#getVisitDate();
    }
  }

  async #getMenu() {
    try {
      const orderMenu = await InputView.readMenu();
      validateMenu(orderMenu);
    } catch (error) {
      Console.print(error.message);
      await this.#getMenu();
    }
  }
}

export default OrderController;
