export const SETTING = Object.freeze({
  dateReg: /^([1-9]|[1-2][0-9]|3[0-1])$/,
  countReg: /^([1-9]|[1-2][0-9])$/,
  free_menu_threshold: 120000,
  free_menu_name: "샴페인 1개",
  free_menu_price: 25000,
  menuList: [
    { name: "양송이수프", price: 6000, type: "appetizer" },
    { name: "타파스", price: 5500, type: "appetizer" },
    { name: "시저샐러드", price: 8000, type: "appetizer" },

    { name: "티본스테이크", price: 55000, type: "mainCourse" },
    { name: "바비큐립", price: 54000, type: "mainCourse" },
    { name: "해산물파스타", price: 35000, type: "mainCourse" },
    { name: "크리스마스파스타", price: 25000, type: "mainCourse" },

    { name: "초코케이크", price: 15000, type: "dessert" },
    { name: "아이스크림", price: 5000, type: "dessert" },

    { name: "제로콜라", price: 3000, type: "beverage" },
    { name: "레드와인", price: 60000, type: "beverage" },
    { name: "샴페인", price: 25000, type: "beverage" },
  ],
});
