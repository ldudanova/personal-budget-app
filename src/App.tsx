import {useTranslation} from "react-i18next";
import "./i18n";
import "./App.css"
import HomePage from "./components/Pages/HomePage/HomePage.tsx";

function App() {
    const {t, i18n} = useTranslation();

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <HomePage/>
            <div>
                <button onClick={() => switchLanguage("en")}>EN</button>
                <button onClick={() => switchLanguage("ru")}>RU</button>

                <p>{t("spent_on", { amount: 500, category: t("expense") })}</p>

                <button>{t("add_transaction")}</button>
            </div>
        </>
    )
}

export default App
