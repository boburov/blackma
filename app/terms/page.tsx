"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import useTranslate from "@/app/hooks/useTranslate";

export const TermsPage = () => {
  const { t } = useTranslate();

  const sections = [
    { title: t("terms.section1_title"), content: t("terms.section1_content") },
    { title: t("terms.section2_title"), content: t("terms.section2_content") },
    { title: t("terms.section3_title"), content: t("terms.section3_content") },
    { title: t("terms.section4_title"), content: t("terms.section4_content") },
    { title: t("terms.section5_title"), content: t("terms.section5_content") },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Back */}
        <Link href="/login" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {t("terms.back")}
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{t("terms.title")}</h1>
            <p className="text-xs text-gray-400">{t("terms.last_updated")}</p>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">{t("terms.intro")}</p>

          <div className="space-y-5">
            {sections.map((section, i) => (
              <div key={i} className="space-y-2">
                <h2 className="text-base font-semibold text-gray-800">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">{t("terms.contact_note")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};