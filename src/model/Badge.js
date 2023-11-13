import { SETTING } from "../constants/Setting.js";

class Badge {
  #badge;

  constructor(price) {
    this.#badge = this.#calcBadge(price);
  }

  #calcBadge(price) {
    if (Math.abs(price) >= 20000) {
      return SETTING.badge_santa;
    }
    if (Math.abs(price) >= 10000) {
      return SETTING.badge_treetree;
    }
    if (Math.abs(price) >= 5000) {
      return SETTING.badge_star;
    }
    return SETTING.badge_none;
  }

  getBadge() {
    return this.#badge;
  }
}

export default Badge;
