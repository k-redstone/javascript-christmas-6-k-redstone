import { SETTING } from "../constants/Setting.js";

function getDay(date) {
  const visitDay = new Date(`2023-12-${date}`).getDay();
  return visitDay;
}

function findMenu(menuName) {
  return SETTING.menuList.find((menu) => menu.name === menuName);
}

function setMenu(menuName, menuCount, menu) {
  orderList.push({
    name: menuName,
    count: parseInt(menuCount),
    price: menu.price,
    type: menu.type,
  });
}

function splitMenuInput(menu) {
  const splitMenu = menu.split(",");
  splitMenu.forEach((menu) => {
    const [menuName, menuCount] = menu.split("-");
    setMenu(menuName, menuCount, findMenu(menuName));
  });
}

export { getDay, splitMenuInput };
