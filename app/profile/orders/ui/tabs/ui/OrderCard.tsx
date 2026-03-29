import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function OrderCard({
  order,
}: {
  order: { id: number; date: string; price: string };
}) {
  return (
    <Link
      href={`/orders/${order.id}`}
      className="flex items-center justify-between py-2 border-b border-slate-200"
    >
      <div>
        <p className="text-lg">#{order.id}</p>
        <p className="text-xs">{order.date}</p>
      </div>
      <p className="flex items-center gap-2">
        {order.price} <ChevronRight />
      </p>
    </Link>
  );
}
