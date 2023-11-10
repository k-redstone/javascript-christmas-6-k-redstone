import { SETTING } from "../constants/Setting.js";
import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";

export const validateVisitDate = (date) => {
  if (!SETTING.dateReg.test(date)) throw new Error(ERROR_MESSAGE.date);
};
