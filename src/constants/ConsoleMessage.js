export const CONSOLE_MESSAGE = Object.freeze({
  intro_messgae: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  preview_message: "12월 {0}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  input_date:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
  input_menu:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
  output_menu: "<주문 메뉴>",
  output_menuList: "{0} {1}개",
});

export function format(templateMessage, ...args) {
  return args.reduce(
    (message, arg, index) => message.replaceAll(`{${index}}`, arg),
    templateMessage
  );
}
