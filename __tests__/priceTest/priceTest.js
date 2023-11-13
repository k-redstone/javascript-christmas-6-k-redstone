import Bill from "../../src/model/Bill.js";

const testData = [
  { name: "초코케이크", count: 1, price: 15000, type: "dessert" },
  { name: "아이스크림", count: 2, price: 5000, type: "dessert" },
  { name: "티본스테이크", count: 1, price: 55000, type: "mainCourse" },
];

describe("가격 테스트", () => {
  test("할인 전 총 주문 금액", () => {
    const output = 80000;
    const bill = new Bill(testData, 19, 0);

    expect(bill.getBeforeDiscountPrice()).toEqual(output);
  });

  test("크리스마스 할인 금액 성공", () => {
    const output = -2800;
    const bill = new Bill(testData, 19, 0);

    expect(bill.getChristmasDiscountPrice()).toEqual(output);
  });

  test("크리스마스 할인 금액 실패", () => {
    const output = 0;
    const bill = new Bill(testData, 26, 0);

    expect(bill.getChristmasDiscountPrice()).toEqual(output);
  });

  test("평일 할인금액", () => {
    const output = -6069;
    const bill = new Bill(testData, 17, 0);

    expect(bill.getWeekDiscountPrice()).toEqual(output);
  });

  test("주말 할인금액", () => {
    const testData = [
      { name: "제로콜라", count: 1, price: 3000, type: "beverage" },
      { name: "초코케이크", count: 1, price: 15000, type: "dessert" },
      { name: "티본스테이크", count: 1, price: 55000, type: "mainCourse" },
      { name: "해산물파스타", count: 2, price: 55000, type: "mainCourse" },
    ];
    const output = -6069;

    const bill = new Bill(testData, 16, 5, false);

    expect(bill.getWeekendDiscountPrice()).toEqual(output);
  });

  test("특별 할인금액", () => {
    const output = -1000;
    const bill = new Bill(testData, 31, 0);

    expect(bill.getSpecialDiscountPrice()).toEqual(output);
  });

  test("증정 메뉴 금액", () => {
    const testData = [
      { name: "티본스테이크", count: 1, price: 55000, type: "mainCourse" },
      { name: "해산물파스타", count: 2, price: 55000, type: "mainCourse" },
    ];
    const output = -25000;

    const bill = new Bill(testData, 31, 0, true);

    expect(bill.getFreeMenuDiscountPrice()).toEqual(output);
  });
});
