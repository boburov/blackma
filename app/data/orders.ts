import { Order } from "../../@types/order.type";
import { products } from "./products";

export const orders: Order[] = [
    {
        orderId: "10421",
        orderPrice: 0,
        createdAt: "2024-11-03T09:15:00Z",
        products: [...products],
        address: "Toshkent, Chilonzor tumani, 5-uy"
    },
    {
        orderId: "20853",
        orderPrice: 0,
        createdAt: "2024-12-17T14:30:00Z",
        products: [...products],
        address: "Samarqand, Registon ko'chasi, 12-uy"
    },
    {
        orderId: "31967",
        orderPrice: 0,
        createdAt: "2025-01-25T11:00:00Z",
        products: [...products],
        address: "Buxoro, Mustaqillik ko'chasi, 8-uy"
    },
    {
        orderId: "44128",
        orderPrice: 0,
        createdAt: "2025-02-08T16:45:00Z",
        products: [...products],
        address: "Namangan, Navoi ko'chasi, 3-uy"
    },
    {
        orderId: "55390",
        orderPrice: 0,
        createdAt: "2025-03-14T08:20:00Z",
        products: [...products],
        address: "Andijon, Bobur ko'chasi, 21-uy"
    }
]