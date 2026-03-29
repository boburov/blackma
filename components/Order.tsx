import Link from "next/link"
import { ChevronRight } from "lucide-react"

type OrderCardProps = {
    orderId: string
    createdAt: string
    orderPrice: number
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat("uz-UZ").format(price) + " so’m"

const OrderCard = ({ orderId, createdAt, orderPrice }: OrderCardProps) => {
    return (
        <Link
            href={`/orders/${orderId}`}
            className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition"
        >
            {/* Left */}
            <div className="flex flex-col">
                <span className="text-lg font-semibold">#{orderId}</span>
                <span className="text-sm text-gray-500">{createdAt}</span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <span className="text-base font-medium">
                    {formatPrice(orderPrice)}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
        </Link>
    )
}

export default OrderCard