"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PROFILE_TABS } from "./tab-config";
import useTranslate from "@/app/hooks/useTranslate";

export default function Tabs({ activeTab }: { activeTab: string }) {
  const router = useRouter();
  const params = useSearchParams();

  const { t } = useTranslate(); // ✅ SHU YER YETISHMAYAPTI

  const changeTab = (tab: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("tab", tab);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex gap-2 justify-between">
      {PROFILE_TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => changeTab(tab.key)}
          className={`px-4 py-2 flex-1 rounded-full ${activeTab === tab.key ? "bg-black text-white" : "bg-gray-100"
            }`}
        >
          {t(tab.key)}
        </button>
      ))}
    </div>
  );
}