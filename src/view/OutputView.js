import { CONSOLE_MESSAGE, format } from "../constants/ConsoleMessage.js";
import { Console } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";
import { SETTING } from "../constants/Setting.js";

const OutputView = {
  printIntro() {
    Console.print(CONSOLE_MESSAGE.intro_messgae);
  },

  printpreview(date) {
    Console.print(format(CONSOLE_MESSAGE.preview_message, date));
  },

  printMenuList(menuList) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_menu);
    menuList.forEach((menu) => {
      Console.print(
        format(CONSOLE_MESSAGE.output_menuList, menu.name, menu.count)
      );
    });
  },

  printBeforeDiscount(price) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_before_discount);
    Console.print(price.toLocaleString("ko-KR") + CONSOLE_MESSAGE.price_unit);
  },

  printFreeMenu(price) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_free_menu);
    if (price !== 0) Console.print(SETTING.free_menu_name);
    if (price === 0) Console.print(CONSOLE_MESSAGE.none_event);
  },

  printChristmasDiscount(price) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_benefit);
    if (price !== 0)
      Console.print(
        format(
          CONSOLE_MESSAGE.output_christmas_discount,
          price.toLocaleString("ko-KR")
        )
      );
  },

  printWeekDiscount(price) {
    if (price !== 0)
      Console.print(
        format(
          CONSOLE_MESSAGE.output_week_discount,
          price.toLocaleString("ko-KR")
        )
      );
  },

  printWeekendDiscount(price) {
    if (price !== 0)
      Console.print(
        format(
          CONSOLE_MESSAGE.output_weekend_discount,
          price.toLocaleString("ko-KR")
        )
      );
  },

  printSpecialDiscount(price) {
    if (price !== 0)
      Console.print(
        format(
          CONSOLE_MESSAGE.output_special_discount,
          price.toLocaleString("ko-KR")
        )
      );
  },

  printFreeMenuDiscount(price) {
    if (price !== 0) Console.print(CONSOLE_MESSAGE.ouput_free_menu_price);
  },

  printNoneEvent(price) {
    if (price === 0) Console.print(CONSOLE_MESSAGE.none_event);
  },

  printTotalBenefitPrice(price) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_discount_price);
    if (price === 0)
      Console.print(price.toLocaleString("ko-KR") + CONSOLE_MESSAGE.price_unit);
    if (price !== 0)
      Console.print(price.toLocaleString("ko-KR") + CONSOLE_MESSAGE.price_unit);
  },

  printPayment(price) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_after_discount);
    Console.print(price.toLocaleString("ko-KR") + CONSOLE_MESSAGE.price_unit);
  },

  printBadge(badge) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_event_badge);
    Console.print(badge);
  },
};

export default OutputView;
