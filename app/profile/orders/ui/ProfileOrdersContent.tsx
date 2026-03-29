"use client";
import { useSearchParams } from "next/navigation";
import ProfileTopBar from "../../ui/TopBar";
import Tabs from "./Tabs";
import TabsContent from "./TabContent";

export default function ProfileOrdersContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "new";

  return (
    <div className="space-y-2">
      <ProfileTopBar title="Buyurtmalarim" path="/profile" />
      <Tabs activeTab={tab} />
      <br />
      <TabsContent activeTab={tab} />
    </div>
  );
}