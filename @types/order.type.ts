import { products } from "../app/data/products";

export interface Order {
    orderId: string;
    orderPrice: number;
    createdAt: string;
    products: typeof products;
    address: string;
}