"use client";
import { useState, useEffect, useCallback } from "react";
import uz from "../i18n/uz.json";
import ru from "../i18n/ru.json";
import eng from "../i18n/eng.json";

const translations: Record<string, any> = { uz, ru, eng };

const useTranslate = () => {
    const [lang, setLang] = useState("uz"); // default "uz", localStorage yo'q

    useEffect(() => {
        // localStorage faqat client side da o'qiladi
        const saved = localStorage.getItem("lang");
        if (saved) setLang(saved);

        const handleStorage = (e: StorageEvent) => {
            if (e.key === "lang" && e.newValue) {
                setLang(e.newValue);
            }
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    const setLanguage = useCallback((newLang: string) => {
        localStorage.setItem("lang", newLang);
        setLang(newLang);
    }, []);

    const t = useCallback((key: string): string => {
        const keys = key.split(".");
        let value: any = translations[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    }, [lang]);

    return { t, lang, setLanguage };
};

export default useTranslate;