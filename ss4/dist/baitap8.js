"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateOrderTotal(order) {
    return order.items.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    const fmt = new Intl.NumberFormat('vi-VN');
    console.log(`Đơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (const item of order.items) {
        const lineTotal = item.product.price * item.quantity;
        console.log(`- ${item.product.name} × ${item.quantity} → ${fmt.format(lineTotal)} VND`);
    }
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${fmt.format(total)} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const sampleOrder = {
    orderId: "#ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: { id: "p1", name: "Áo sơ mi", price: 250_000 }, quantity: 2 },
        { product: { id: "p2", name: "Quần tây", price: 400_000 }, quantity: 1 },
    ],
    note: "Giao sau 18h",
};
printOrder(sampleOrder);
