import { CONSOLE_MESSAGE } from "../constants/ConsoleMessage.js";
import { Console } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      CONSOLE_MESSAGE.inputDate + LINE_SEPARATOR
    );
    return input;
  },
};

export default InputView;
