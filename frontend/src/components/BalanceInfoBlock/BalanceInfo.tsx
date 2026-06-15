import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import type {BalanceInfoType} from "../../types/BalanceInfoType.ts";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {fetchBalanceInfo} from "../../store/balanceInfoSlice.ts";
import BalanceInfoCardDesktop from "./BalanceInfoCardDesktop.tsx";
import BalanceInfoMobile from "./BalanceInfoMobile.tsx";

export default function BalanceInfo() {
    const dispatch = useAppDispatch();
    const {balanceInfo, loading, error} = useAppSelector(state => state.balanceInfo);

    const {t} = useTranslation();

    useEffect(() => {
        dispatch(fetchBalanceInfo());
    }, [dispatch]);

    if (loading) return <p>{t("loading")}...</p>;
    if (error) return <p>{t("error")}: {error}</p>;

    return (<>
        <div className="hidden md:grid grid-cols-3 gap-5 w-full h-auto py-6 border-gray-400">
            {balanceInfo.map((balanceInfo: BalanceInfoType) => (
                    <BalanceInfoCardDesktop key={balanceInfo.id}
                                            title={balanceInfo.name}
                                            amount={balanceInfo.amount}
                                            percent={balanceInfo.diffPrevMonth}
                                            currency={balanceInfo.currency}/>
                )
            )}
        </div>
        <div className="block md:hidden py-4">
            <BalanceInfoMobile balanceInfos={balanceInfo}/>
        </div>
    </>)
}