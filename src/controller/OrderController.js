import { Console } from "@woowacourse/mission-utils";
import { validateVisitDate } from "../utils/Validation.js";
import { getDay } from "../utils/common.js";
import InputView from "../view/InputView.js";

class OrderController {
  async run() {
    await this.#getVisitDate();
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
      return { visitDate, visitDay };
    } catch (error) {
      Console.print(error.message);
      await this.#getVisitDate();
    }
  }
}

export default OrderController;
