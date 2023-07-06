import { getFormStorage } from "../../../utils/sessionStorage";
import LOCALES from "./i18n/constans";

export default {
  currency: getFormStorage("currency"),
  theme: getFormStorage("theme"),
  locale: getFormStorage("locale") || LOCALES.ENGLISH,
};
