import {useTranslation} from "react-i18next";
import {ToggleButton} from "../../UI/Buttons/ToggleButton.tsx";
import ThemeToggle from "../../UI/Buttons/ThemeToggle.tsx";
import LangToggle from "../../UI/Buttons/LangToggle.tsx";

export function SidePanelDesktop() {
    const {t} = useTranslation();

    return (
        <div className="bg-white border-r-2 border-gray-200 pr-8 pb-8 w-xs">
            <div className="mb-8 p-8">MY BUDGET APP logo</div>
            <div className="text-gray-400 text-xs font-bold mb-4 pl-8">
                {t("general")}
            </div>
            <div className="mb-8">
                <div
                    className="flex rounded-tr-lg rounded-br-lg pl-8 py-4 font-bold text-gray-600 hover:text-shadow-violet-600 hover:bg-violet-100 cursor-pointer transition-colors duration-200">
                    <div className="icon"></div>
                    <div>{t("dashboard")}</div>
                </div>
                <div
                    className="flex rounded-tr-lg rounded-br-lg pl-8 py-4 font-bold text-gray-600 hover:text-shadow-violet-600 hover:bg-violet-100 cursor-pointer transition-colors duration-200">
                    <div className="icon"></div>
                    <div>{t("accounts")}</div>
                </div>
                <div
                    className="flex rounded-tr-lg rounded-br-lg pl-8 py-4 font-bold text-gray-600 hover:text-shadow-violet-600 hover:bg-violet-100 cursor-pointer transition-colors duration-200">
                    <div className="icon"></div>
                    <div>{t("analytics")}</div>
                </div>
                <div
                    className="flex rounded-tr-lg rounded-br-lg pl-8 py-4 font-bold text-gray-600 hover:text-shadow-violet-600 hover:bg-violet-100 cursor-pointer transition-colors duration-200">
                    <div className="icon"></div>
                    <div>{t("budget_planner")}</div>
                </div>

            </div>

            <div className="ml-8 mb-10 h-0.5 w-4xs border-t-2 border-gray-300"/>

            <div className="text-gray-400 text-xs font-bold mb-4 pl-8">
                {t("tools")}
            </div>

            <div className="mb-8">
                <div
                    className="flex rounded-tr-lg rounded-br-lg pl-8 py-4 font-bold text-gray-600 hover:text-shadow-violet-600 hover:bg-violet-100 cursor-pointer transition-colors duration-200">
                    <div className="icon"></div>
                    <div>{t("settings")}</div>
                </div>
                <div
                    className="flex rounded-tr-lg rounded-br-lg pl-8 py-4 font-bold text-gray-600 hover:text-shadow-violet-600 hover:bg-violet-100 cursor-pointer transition-colors duration-200">
                    <div className="icon"></div>
                    <div>{t("members")}</div>
                </div>
            </div>

            <div className="pl-8 mb-8">
                <ThemeToggle/>
            </div>

            <div className="pl-8 mb-8">
                <LangToggle/>
            </div>


        </div>
    )
}