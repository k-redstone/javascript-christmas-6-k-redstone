import { CONSOLE_MESSAGE, format } from "../constants/ConsoleMessage.js";
import { Console } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

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
      Console.print(menu);
    });
  },
  printBeforeDiscountPrice(price) {
    Console.print(LINE_SEPARATOR + CONSOLE_MESSAGE.output_before_discount);
    Console.print(price + CONSOLE_MESSAGE.price_unit);
  },
};

export default OutputView;
