"use client";
import { useSearchParams } from "next/navigation";
import ProfileTopBar from "../../ui/TopBar";
import Tabs from "./Tabs";
import TabsContent from "./TabContent";
import useTranslate from "@/app/hooks/useTranslate";

export default function ProfileOrdersContent() {
  const { t } = useTranslate();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "new";

  return (
    <div className="space-y-2 container">
      <ProfileTopBar title={t("orders.my_orders")} path="/profile" />
      <Tabs activeTab={tab} />
      <br />
      <TabsContent activeTab={tab} />
    </div>
  );
}