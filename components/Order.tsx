import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { formatDate } from "@/app/utils/date.formater"


type OrderCardProps = {
  orderId: string;
  createdAt: string;
  orderPrice: number;
};

const formatPrice = (price: number) =>
  new Intl.NumberFormat("uz-UZ").format(price) + " so'm";

const OrderCard = ({ orderId, createdAt, orderPrice }: OrderCardProps) => {
  return (
    <Link
      href={`/orders/${orderId}`}
      className={`flex items-center justify-between pb-1 px-1 pt-4 border-b border-b-gray-300 hover:bg-gray-50 transition`}
    >
      <div className="flex flex-col">
        <span className="text-base font-semibold ">#{orderId}</span>
        <span className="text-xs text-black">{formatDate(createdAt)}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[15px] font-normal">{formatPrice(orderPrice)}</span>
        <ChevronRight className="w-5 h-5 text-black" />
      </div>
    </Link>
  );
};

export default OrderCard;
