import { Console } from "@woowacourse/mission-utils";
import { validateVisitDate, validateMenu } from "../utils/Validation.js";
import { getDay } from "../utils/common.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Order from "../model/Order.js";
import Bill from "../model/Bill.js";
import Badge from "../model/Badge.js";

class OrderController {
  #orderList;
  #billPaper;

  async run() {
    await this.#selectDateAndMenu();
    this.#printEventPlanner();
    this.#printBadgeList();
  }

  async #selectDateAndMenu() {
    OutputView.printIntro();
    const [visitDate, visitDay] = await this.#getVisitDate();
    const menu = await this.#getMenu();
    OutputView.printpreview(visitDate);
    this.#createOrder(menu, visitDate, visitDay);
  }

  #printEventPlanner() {
    OutputView.printBeforeDiscount(this.#billPaper.getBeforeDiscountPrice());
    OutputView.printFreeMenu(this.#billPaper.getFreeMenuDiscountPrice());
    this.#printBenefitList();
    OutputView.printTotalBenefitPrice(this.#billPaper.getTotalBenefitPrice());
    OutputView.printPayment(this.#billPaper.getpayment());
  }

  #printBadgeList() {
    const badge = new Badge(this.#billPaper.getTotalBenefitPrice());
    OutputView.printBadge(badge.getBadge());
  }

  #printBenefitList() {
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
  }

  #createOrder(menu, visitDate, visitDay) {
    this.#orderList = new Order(menu);
    OutputView.printMenuList(this.#orderList.getOrderList());
    this.#billPaper = new Bill(
      this.#orderList.getOrderList(),
      visitDate,
      visitDay
    );
  }

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
