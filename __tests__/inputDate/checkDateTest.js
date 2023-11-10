import { validateVisitDate } from "../../src/utils/Validation.js";
import { getDay } from "../../src/utils/common.js";
import { ERROR_MESSAGE } from "../../src/constants/ErrorMessage.js";

describe("날짜 입력 테스트", () => {
  test("날짜 유효성 테스트", () => {
    const dates = ["01", "1.", "35", "0", "a", "일", "one"];

    dates.forEach((date) => {
      expect(() => {
        validateVisitDate(date);
      }).toThrow(ERROR_MESSAGE.date);
    });
  });

  test("요일 테스트", () => {
    const dates = [1, 31, 25];
    const output = [5, 0, 1];

    dates.reduce((acc, cur, idx) => {
      expect(getDay(cur)).toEqual(output[idx]);
    }, 0);
  });
});
