import { orders } from "./data/orders"
import { inter } from "./orders/[order_id]/layout"
import Order from "@/components/Order"
import { calculateOrderPrice } from "./utils/order.price.calculator"
import BottomNavigation from "@/components/BottomNavigation"

const page = () => {
  return (
    <section className="container">
      <center>
        <h1 className={`font-bold text-2xl mt-5 mb-6 ${inter.className}`}>Buyurtmalarim</h1>
      </center>

      <section className="flex flex-col w-full gap-y-4">
        {orders.map((order) => {
          return <Order key={order.orderId} orderId={order.orderId} createdAt={order.createdAt} orderPrice={calculateOrderPrice(order)} />
        })}
      </section>

      <BottomNavigation />
    </section>
  )
}

export default page
