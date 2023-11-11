import Order from "../../src/model/Order.js";

describe("가격 테스트", () => {
  test("할인 전 총 주문 금액", () => {
    const testData = [
      { input: "해산물파스타-2,레드와인-1,초코케이크-1", output: 145000 },
      {
        input: "양송이수프-10,해산물파스타-1,초코케이크-1",
        output: 110000,
      },
    ];

    testData.forEach(({ input, output }) => {
      const order = new Order(input);
      expect(order.getBeforeDiscountPrice()).toEqual(output);
    });
  });
});
