// app/profile/components/tabs.tsx
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { PROFILE_TABS } from "./tab-config";

export default function Tabs({ activeTab }: { activeTab: string }) {
  const router = useRouter();
  const params = useSearchParams();

  const changeTab = (tab: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("tab", tab);

    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex gap-2 justify-between">
      {PROFILE_TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => changeTab(t.key)}
          className={`px-4 py-2 flex-1 rounded-full ${
            activeTab === t.key ? "bg-black text-white" : "bg-gray-100"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
