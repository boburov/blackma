import OrderCard from "./ui/OrderCard";

export default function AllOrders() {
  const allOrders = [
    {
      id: 1523,
      date: "13.10.2025",
      price: "546 900",
    },
    {
      id: 532,
      date: "12.12.2025",
      price: "1 250 000",
    },
    {
      id: 531,
      date: "12.12.2025",
      price: "1 250 000",
    },
    {
      id: 1524,
      date: "13.10.2025",
      price: "546 900",
    },
    {
      id: 820,
      date: "12.12.2025",
      price: "1 250 000",
    },
  ];

  return (
    <div>
      {allOrders.map((o) => (
        <OrderCard key={o.id} order={o} />
      ))}
    </div>
  );
}
