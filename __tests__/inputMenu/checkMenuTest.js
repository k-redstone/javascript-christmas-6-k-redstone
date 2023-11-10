import { validateMenu } from "../../src/utils/Validation.js";
import { ERROR_MESSAGE } from "../../src/constants/ErrorMessage.js";

describe("메뉴 입력 테스트", () => {
  test("메뉴 유효성 테스트", () => {
    const menuList = [
      "해산물파스-2,레드와인-1,초코케이크-1",
      "해산물파스타-2,해산물파스타-1,초코케이크-1",
    ];

    menuList.forEach((menu) => {
      expect(() => {
        validateMenu(menu);
      }).toThrow(ERROR_MESSAGE.order);
    });
  });

  test("최대 주문갯수 초과 테스트", () => {
    const menuList = ["해산물파스타-19,레드와인-2,초코케이크-1"];

    menuList.forEach((menu) => {
      expect(() => {
        validateMenu(menu);
      }).toThrow(ERROR_MESSAGE.order);
    });
  });

  test("음료수만 주문 테스트 ", () => {
    const menuList = ["레드와인-1,샴페인-2"];

    menuList.forEach((menu) => {
      expect(() => {
        validateMenu(menu);
      }).toThrow(ERROR_MESSAGE.order);
    });
  });
});
