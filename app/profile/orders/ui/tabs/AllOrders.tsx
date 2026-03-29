import OrderCard from "./ui/OrderCard";

export default function AllOrders() {
  const allOrders = [
    {
      id: 1523,
      date: "13.10.2025",
      price: "546 900 so'm",
    },
    {
      id: 532,
      date: "12.12.2025",
      price: "1 250 000 so'm",
    },
    {
      id: 531,
      date: "12.12.2025",
      price: "1 250 000 so'm",
    },
    {
      id: 1524,
      date: "13.10.2025",
      price: "546 900 so'm",
    },
    {
      id: 820,
      date: "12.12.2025",
      price: "1 250 000 so'm",
    },
  ];

  return (
    <div>
      {allOrders.map((o) => (
        <OrderCard order={o} />
      ))}
    </div>
  );
}
