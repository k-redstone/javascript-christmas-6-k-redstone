import Bill from "../../src/model/Bill.js";

const testData = [
  { name: "초코케이크", count: 1, price: 15000, type: "dessert" },
  { name: "아이스크림", count: 2, price: 5000, type: "dessert" },
  { name: "티본스테이크", count: 1, price: 55000, type: "mainCourse" },
];

const testDataOver = [
  { name: "제로콜라", count: 1, price: 3000, type: "beverage" },
  { name: "초코케이크", count: 1, price: 15000, type: "dessert" },
  { name: "티본스테이크", count: 1, price: 55000, type: "mainCourse" },
  { name: "해산물파스타", count: 2, price: 55000, type: "mainCourse" },
];
const testDataUnder = [
  { name: "아이스크림", count: 1, price: 5000, type: "dessert" },
];
const testDataNone = [
  { name: "타파스", count: 1, price: 5500, type: "appetizer" },
  { name: "제로콜라", count: 1, price: 3000, type: "beverage" },
];

const testDataAll = [
  { name: "타파스", count: 1, price: 5500, type: "appetizer" },
  { name: "제로콜라", count: 1, price: 3000, type: "beverage" },
  { name: "초코케이크", count: 1, price: 15000, type: "dessert" },
  { name: "티본스테이크", count: 2, price: 55000, type: "mainCourse" },
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

  test("평일 할인금액 적용 안됨", () => {
    const output = 0;
    const bill = new Bill(testData, 17, 5);

    expect(bill.getWeekDiscountPrice()).toEqual(output);
  });

  test("주말 할인금액", () => {
    const output = -6069;
    const bill = new Bill(testDataOver, 16, 5);

    expect(bill.getWeekendDiscountPrice()).toEqual(output);
  });

  test("주말 할인금액 적용 안됨", () => {
    const output = 0;
    const bill = new Bill(testDataOver, 16, 0);

    expect(bill.getWeekendDiscountPrice()).toEqual(output);
  });

  test("특별 할인금액", () => {
    const output = -1000;
    const bill = new Bill(testData, 31, 0);

    expect(bill.getSpecialDiscountPrice()).toEqual(output);
  });

  test("특별 할인금액 적용 안됨", () => {
    const output = 0;
    const bill = new Bill(testData, 11, 0);

    expect(bill.getSpecialDiscountPrice()).toEqual(output);
  });

  test("증정 메뉴 금액", () => {
    const output = -25000;
    const bill = new Bill(testDataOver, 31, 0);

    expect(bill.getFreeMenuDiscountPrice()).toEqual(output);
  });

  test("증정 메뉴 금액 적용 안됨", () => {
    const output = 0;
    const bill = new Bill(testDataUnder, 31, 0);

    expect(bill.getFreeMenuDiscountPrice()).toEqual(output);
  });

  test("혜택 적용 안됨", () => {
    const output = 0;
    const bill = new Bill(testDataNone, 3, 6);

    expect(bill.getTotalBenefitPrice()).toEqual(output);
  });

  test("총 혜택 금액 (주말)", () => {
    const output = -30846;
    const bill = new Bill(testDataAll, 9, 6);

    expect(bill.getTotalBenefitPrice()).toEqual(output);
  });

  test("총 혜택 금액 (평일)", () => {
    const output = -28423;
    const bill = new Bill(testDataAll, 5, 2);

    expect(bill.getTotalBenefitPrice()).toEqual(output);
  });

  test("총 혜택 금액 (평일 & 특별할인)", () => {
    const output = -29923;
    const bill = new Bill(testDataAll, 10, 0);

    expect(bill.getTotalBenefitPrice()).toEqual(output);
  });

  test("할인 후 예상 금액", () => {
    const output = 128577;
    const bill = new Bill(testDataAll, 10, 0);

    expect(bill.getpayment()).toEqual(output);
  });
});
