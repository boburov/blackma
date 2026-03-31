"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import PageHeading from "./ui/PageHeading";
import ProfileTopBar from "./ui/TopBar";
import { ChevronRight } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { orders } from "../data/orders";
import LanguageModal from "./ui/LanguageModal";

const LANG_LABELS = {
  uz: "O'zbekcha",
  en: "English",
  ru: "Русский",
};

type Lang = keyof typeof LANG_LABELS; // "uz" | "en" | "ru"

export default function ProfilePage() {
  useAuth();
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Lang>("uz");
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in LANG_LABELS) setCurrentLang(saved);
  }, []);

  const handleModalClose = () => {
    setLangModalOpen(false);

    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in LANG_LABELS) setCurrentLang(saved);
  };

  return (
    <div className="space-y-2 container">
      <ProfileTopBar title="Profil" path="/" />
      <PageHeading>Shaxsiy kabinet</PageHeading>

      <div>
        <Link
          href="/profile/info"
          className="flex items-center justify-between py-4 border-b border-slate-200"
        >
          <p className="text-lg Nunito_Sans_SemiBold">Profilim</p>
          <p className="flex items-center gap-2 Nunito_Sans_SemiBold">
            Ibrat <ChevronRight />
          </p>
        </Link>
        <Link
          href="/profile/orders"
          className="flex items-center justify-between py-4 border-b border-slate-200"
        >
          <p className="text-lg Nunito_Sans_SemiBold">Buyurtmalarim</p>
          <p className="flex items-center gap-2 Nunito_Sans_SemiBold">
            {orders.length} <ChevronRight />
          </p>
        </Link>
      </div>

      <br />
      <PageHeading>Sozlamalar</PageHeading>

      <div>
        <button
          onClick={() => setLangModalOpen(true)}
          className="w-full flex items-center justify-between py-4 border-b border-slate-200 Nunito_Sans_SemiBold"
        >
          <p className="text-lg">Til</p>
          <p className="flex items-center gap-2">
            {LANG_LABELS[currentLang]} <ChevronRight />
          </p>
        </button>
        <Link
          href="https://t.me/balckme_support"
          target="_blank"
          className="flex items-center justify-between py-4 border-b border-slate-200 Nunito_Sans_SemiBold"
        >
          <p className="text-lg">Yordam</p>
          <p className="flex items-center gap-2">
            Telegram Support <ChevronRight />
          </p>
        </Link>
      </div>

      <LanguageModal isOpen={langModalOpen} onClose={handleModalClose} />
    </div>
  );
}