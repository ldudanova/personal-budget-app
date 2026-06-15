import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18n
    .use(initReactI18next) // подключаем React
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru }
        },
        lng: "ru",           // язык по умолчанию
        fallbackLng: "en",   // если перевод не найден
        interpolation: {
            escapeValue: false // React сам экранирует
        }
    });

export default i18n;
