import AllOrders from "./tabs/AllOrders";
import NewOrders from "./tabs/NewOrders";

export default function TabsContent({ activeTab }: { activeTab: string }) {
  switch (activeTab) {
    case "new":
      return <NewOrders />;
    case "all":
      return <AllOrders />;
  }
}
