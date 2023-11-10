import { SETTING } from "../constants/Setting.js";
import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";

const setMenuValidate = (input) => {
  let menuNameList = [];
  let countList = [];
  const menuList = input.split(",");
  menuList.forEach((menu) => {
    const [menuName, menuCount] = menu.split("-");
    menuNameList.push(menuName);
    countList.push(menuCount);
  });
  return [menuNameList, countList];
};

const validateMenuCount = (countList) => {
  let count = 0;
  countList.forEach((number) => {
    if (!SETTING.countReg.test(number)) throw new Error(ERROR_MESSAGE.order);
    count += parseInt(number);
    if (count > 20) throw new Error(ERROR_MESSAGE.order);
  });
};

const validateMenuName = (menuNameList) => {
  const uniqueMenuList = new Set(menuNameList);
  let count = 0;
  if (uniqueMenuList.size !== menuNameList.length)
    throw new Error(ERROR_MESSAGE.order);

  uniqueMenuList.forEach((menu) => {
    if (!SETTING.menuList.some((paper) => paper.name === menu))
      throw new Error(ERROR_MESSAGE.order);
    if (
      SETTING.menuList.find((paper) => paper.name === menu).type === "beverage"
    ) {
      count += 1;
    }
    if (uniqueMenuList.size === count) throw new Error(ERROR_MESSAGE.order);
  });
};

export const validateVisitDate = (date) => {
  if (!SETTING.dateReg.test(date)) throw new Error(ERROR_MESSAGE.date);
};

export const validateMenu = (input) => {
  const [menuNameList, countList] = setMenuValidate(input);
  validateMenuCount(countList);
  validateMenuName(menuNameList);
};
