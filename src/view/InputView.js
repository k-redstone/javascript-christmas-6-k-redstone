import { CONSOLE_MESSAGE } from "../constants/ConsoleMessage.js";
import { Console } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      CONSOLE_MESSAGE.input_date + LINE_SEPARATOR
    );
    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(
      CONSOLE_MESSAGE.input_menu + LINE_SEPARATOR
    );
    return input;
  },
};

export default InputView;
