import type { Order } from "@/@types/order.type";

export const calculateOrderPrice = (order: Order): number => {
    return order.products.reduce((total, product) => total + product.price, 0);
};