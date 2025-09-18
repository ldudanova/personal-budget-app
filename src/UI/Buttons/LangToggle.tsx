import i18n from "i18next";
import {useState} from "react";
import {useTranslation} from "react-i18next";

// TODO: подумать
export default function LangToggle() {
    const [lang, setLang] = useState(i18n.language || "en");
    const {t} = useTranslation();

    const switchLanguage = (newLang: string) => {
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };

    return (
        <fieldset>
            <legend>{t("language")}</legend>

            <div>
                <input type="radio"
                       id="englishLang"
                       name="LangBtn"
                       value="english"
                       checked={lang === "en"}
                       onChange={() => switchLanguage("en")}/>
                <label htmlFor="englishLang">English</label>
            </div>

            <div>
                <input type="radio"
                       id="russianLang"
                       name="langBtn"
                       value="ru"
                       checked={lang === "ru"}
                       onChange={() => switchLanguage("ru")}
                />
                <label htmlFor="russianLang">Русский</label>
            </div>

        </fieldset>

    )
}