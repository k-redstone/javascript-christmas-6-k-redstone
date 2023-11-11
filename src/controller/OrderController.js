import { Console } from "@woowacourse/mission-utils";
import { validateVisitDate, validateMenu } from "../utils/Validation.js";
import { getDay, splitMenuInput } from "../utils/common.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Order from "../model/Order.js";
import Bill from "../model/Bill.js";

class OrderController {
  #orderList;
  #billPaper;

  async run() {
    OutputView.printIntro();
    const [visitDate, visitDay] = await this.#getVisitDate();
    const menu = await this.#getMenu();
    OutputView.printpreview(visitDate);
    this.#orderList = new Order(menu);
    OutputView.printMenuList(this.#orderList.getOrderList());
    this.printBeforeDiscount();
    this.printFreeMenuAvailable();
    this.#billPaper = new Bill(
      this.#orderList.getOrderList(),
      visitDate,
      visitDay,
      this.#orderList.isFreeMenuAvailable()
    );
    OutputView.printChristmasDiscount(
      this.#billPaper.getChristmasDiscountPrice()
    );
    OutputView.printWeekDiscount(this.#billPaper.getWeekDiscountPrice());
    OutputView.printWeekendDiscount(this.#billPaper.getWeekendDiscountPrice());
    OutputView.printSpecialDiscount(this.#billPaper.getSpecialDiscountPrice());
    OutputView.printFreeMenuDiscount(
      this.#billPaper.getFreeMenuDiscountPrice()
    );
    OutputView.printNoneEvent(this.#billPaper.getTotalDiscountPrice());
    OutputView.printTotalBenefitPrice(this.#billPaper.getTotalBenefitPrice());
    OutputView.printPayment(
      this.#orderList.getBeforeDiscountPrice() -
        this.#billPaper.getTotalDiscountPrice()
    );
  }

  printFreeMenuAvailable() {
    OutputView.printFreeMenu(this.#orderList.isFreeMenuAvailable());
  }

  printBeforeDiscount() {
    OutputView.printBeforeDiscount(
      this.#orderList.getBeforeDiscountPrice().toLocaleString("ko-KR")
    );
  }
  async #createOrder() {}

  async #getVisitDate() {
    try {
      const visitDate = await InputView.readDate();
      validateVisitDate(visitDate);
      const visitDay = getDay(visitDate);
      return [parseInt(visitDate), parseInt(visitDay)];
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
