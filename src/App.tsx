import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./i18n";
import "./App.css"
import HomePage from "./components/Pages/HomePage/HomePage.tsx";
import {SidePanelDesktop} from "./components/SidePanel/SidePanelDesktop.tsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="flex">
                    <SidePanelDesktop/>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                    </Routes>

                    {/*       <div>
                    <button onClick={() => switchLanguage("en")}>EN</button>
                    <button onClick={() => switchLanguage("ru")}>RU</button>

                    <p>{t("spent_on", {amount: 500, category: t("expense")})}</p>

                    <button>{t("add_transaction")}</button>
                </div>*/}
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
