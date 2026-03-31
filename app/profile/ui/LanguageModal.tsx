"use client"
import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import useTranslate from "@/app/hooks/useTranslate";

const LANGUAGES = [
    { code: "uz", label: "O'zbekcha", flag: "🇺🇿" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "eng", label: "English", flag: "🇬🇧" },
];

export default function LanguageModal({ isOpen, onClose }: any) {
    const { t, lang: currentLang, setLanguage } = useTranslate();
    const [selected, setSelected] = useState("uz");

    useEffect(() => {
        setSelected(currentLang);
    }, [currentLang]);

    const handleSelect = (code: string) => {
        setSelected(code);
        setLanguage(code);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
            onClick={onClose}
        >
            <div
                className="w-full max-w-lg bg-white rounded-t-2xl p-6 space-y-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-xl Nunito_Sans_SemiBold">{t("profile.select_language")}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-slate-100 transition"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-2">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className="w-full flex items-center justify-between py-4 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{lang.flag}</span>
                                <span className="text-lg Nunito_Sans_SemiBold">{lang.label}</span>
                            </div>
                            {selected === lang.code && (
                                <Check size={20} className="text-green-500" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}