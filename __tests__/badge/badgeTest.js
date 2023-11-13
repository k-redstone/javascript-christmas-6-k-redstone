import Badge from "../../src/model/Badge";

describe("이벤트 배지 테스트", () => {
  test("산타 배지", () => {
    const price = 20000;
    const output = "산타";
    const badge = new Badge(price);

    expect(badge.getBadge()).toEqual(output);
  });
  test("트리 배지", () => {
    const price = 11000;
    const output = "트리";
    const badge = new Badge(price);

    expect(badge.getBadge()).toEqual(output);
  });
  test("별 배지", () => {
    const price = 5000;
    const output = "별";
    const badge = new Badge(price);

    expect(badge.getBadge()).toEqual(output);
  });
  test("배지 없음", () => {
    const price = 4500;
    const output = "없음";
    const badge = new Badge(price);

    expect(badge.getBadge()).toEqual(output);
  });
});
