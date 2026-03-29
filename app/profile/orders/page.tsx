"use client";
import { useSearchParams } from "next/navigation";
import ProfileTopBar from "../ui/TopBar";
import Tabs from "./ui/Tabs";
import TabsContent from "./ui/TabContent";

export default function ProfileOrdersPage() {
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
