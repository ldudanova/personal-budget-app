import {format as fnsFormat,} from "date-fns";
import {localesMap} from "../../locales/localMap.ts";

export function dateFormatYearMonthDayString(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export function dateFormat(date: Date, format: string, locale?: string): string
export function dateFormat(date: undefined, format: string, locale?: string): undefined
export function dateFormat(date: Date | undefined, format: string, locale?: string): string | undefined
export function dateFormat(date: Date | undefined, format: string, locale?: string): string | undefined
{
    if (date === undefined) {
        return undefined
    }
    return fnsFormat(date, format, {
        locale: locale ? localesMap[locale] : undefined,
        weekStartsOn: 1,
    })
}