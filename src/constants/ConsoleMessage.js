import { SETTING } from "./Setting.js";

export const CONSOLE_MESSAGE = Object.freeze({
  intro_messgae: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  preview_message: "12월 {0}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  input_date:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
  input_menu:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
  output_menu: "<주문 메뉴>",
  output_menuList: "{0} {1}개",
  output_before_discount: "<할인 전 총주문 금액>",
  output_free_menu: "<증정 메뉴>",
  output_benefit: "<혜택 내역>",
  output_discount_price: "<총혜택 금액>",
  output_after_discount: "<할인 후 예상 결제 금액>",
  output_event_badge: "<12월 이벤트 배지>",
  output_christmas_discount: "크리스마스 디데이 할인: -{0}원",
  output_week_discount: "평일 할인: -{0}원",
  output_weekend_discount: "주말 할인: -{0}원",
  output_special_discount: "특별 할인: -{0}원",
  ouput_free_menu_price: `증정 이벤트: -${SETTING.free_menu_price.toLocaleString(
    "ko-KR"
  )}원`,
  count_unit: "개",
  price_unit: "원",
  none_event: "없음",
});

export function format(templateMessage, ...args) {
  return args.reduce(
    (message, arg, index) => message.replaceAll(`{${index}}`, arg),
    templateMessage
  );
}
