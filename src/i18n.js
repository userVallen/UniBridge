import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationKO from "./locales/ko/translation.json";

const resources = {
  en: { translation: translationEN },
  ko: { translation: translationKO },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already escapes any interpolated content
    },
  });

export default i18n;
