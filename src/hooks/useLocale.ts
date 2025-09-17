// hooks/useLocale.ts
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {enUS, type Locale, ru} from 'date-fns/locale';

const localeMap: Record<string, Locale> = {
    en: enUS,
    ru: ru,
    // добавляем нужные языки
};

export function useLocale() {
    const { i18n } = useTranslation();

    const locale = useMemo(() => {
        return localeMap[i18n.language] || enUS;
    }, [i18n.language]);

    return { locale, language: i18n.language };
}
