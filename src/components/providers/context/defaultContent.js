import { getFormStorage } from "../../../utils/sessionStorage";
import LOCALES from "./i18n/constans";

export default {
  currency: "UAH",
  theme: getFormStorage("theme") || "light",
  locale: LOCALES.ENGLISH,
};
