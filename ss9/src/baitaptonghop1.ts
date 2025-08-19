class Customer {
    id: number;
    name: string;
    email: string;
    shippingAddress: string;
    constructor(id: number, name: string, email: string, shippingAddress: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `Customer ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Shipping Address: ${this.shippingAddress}`;
    }
}
abstract class Product {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity: number): number {
        if (quantity <= this.stock) {
            this.stock -= quantity;
            return this.price * quantity;
        }
        return 0;
    }
    restock(quantity: number): void {
        if (quantity > 0) {
            this.stock += quantity;
        }
    }
    abstract getProductInfo(): string;
    abstract getShippingCost(): number;
    abstract getCategory(): string;
}
class ElectronicsProduct extends Product{
    warrantyPeriod : number;
    ship:number;
    constructor(id: number, name: string, price: number, stock: number, warrantyPeriod: number) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
        this.ship = 50000;
    }
    getProductInfo(){
        return `Electronics Product - ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Warranty: ${this.warrantyPeriod} months, Shipping Cost: ${this.ship}`;
    }
    getShippingCost(): number {
        return this.ship;
    }
    getCategory(): string {
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    size: string;
    ship:number;
    constructor(id: number, name: string, price: number, stock: number, size: string) {
        super(id, name, price, stock);
        this.size = size;
        this.ship = 25000;
    }
    getProductInfo() {
        return `Clothing Product - ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Size: ${this.size}, Shipping Cost: ${this.ship}`;
    }
    getShippingCost(): number {
        return this.ship;
    }
    getCategory(): string {
        return "Clothing";
    }
}
class Order{
    orderID:number;
    customer:string;
    products: { product: Product, quantity: number }[];
    totalAmount: number;
    constructor(orderID: number, customer: string, products: { product: Product, quantity: number }[], totalAmount: number) {
        this.orderID = orderID;
        this.customer = customer;
        this.products = products;
        this.totalAmount = totalAmount;
    }
    getDetails(): string {
        let productDetails = this.products.map(p => `${p.product.name} (x${p.quantity})`).join(", ");
        return `Order ID: ${this.orderID}, Customer: ${this.customer}, Products: ${productDetails}, Total Amount: ${this.totalAmount}`;
    }
}
class Store{
    products: Product[];
    customers: Customer[];
    orders: Order[];
    constructor(products: Product[], customers: Customer[], orders: Order[]) {
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }
    addProduct(product: Product): void{
        this.products.push(product);
    }
    addCustomer(name: string, email: string, address: string) : void{
        const newCustomer = new Customer(this.customers.length + 1, name, email, address);
        this.customers.push(newCustomer);
    }
    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null{
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) return null;
        const productOrder: { product: Product, quantity: number }[] = [];
        for (const pq of productQuantities) {
            const product = this.products.find(p => p.id === pq.productId);
            if (product && pq.quantity > 0 && product.stock >= pq.quantity) {
                productOrder.push({ product: product, quantity: pq.quantity });
                product.stock -= pq.quantity;
            } else {
                return null;
            }
        }
        
        const totalAmount = productOrder.reduce((total, pq) => {
            return total + pq.product.sell(pq.quantity);
        }, 0);
        
        const newOrder = new Order(this.orders.length + 1, customer.name, productOrder, totalAmount);
        this.orders.push(newOrder);
        return newOrder;
    }
    cancelOrder(orderId: number): void{
        const orderIndex = this.orders.findIndex(o => o.orderID === orderId);
        if (orderIndex !== -1) {
            const order = this.orders[orderIndex];
            if (order) {
                for (const pq of order.products) {
                    pq.product.restock(pq.quantity);
                }
            }
            this.orders.splice(orderIndex, 1);
        }
    }
    listAvailableProducts(): void{
        this.products.filter(p => p.stock > 0).forEach(p => {
            console.log(p.getProductInfo());
        });
    }
    listCustomerOrders(customerId: number): void {
        const customerOrders = this.orders.filter(order => {
            const customer = this.customers.find(c => c.name === order.customer);
            return customer && customer.id === customerId;
        });
        
        if (customerOrders.length === 0) {
            console.log(`No orders found for customer ID: ${customerId}`);
            return;
        }
        
        console.log(`Orders for customer ID ${customerId}:`);
        customerOrders.forEach(order => {
            console.log(order.getDetails());
        });
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((total, order) => total + order.totalAmount, 0);
    }

    countProductsByCategory(): void {
        const categoryCount = this.products.reduce((count, product) => {
            const category = product.getCategory();
            count[category] = (count[category] || 0) + 1;
            return count;
        }, {} as { [key: string]: number });

        console.log("Products by category:");
        Object.entries(categoryCount).forEach(([category, count]) => {
            console.log(`${category}: ${count} products`);
        });
    }

    updateProductStock(productId: number, newStock: number): void {
        const productIndex = this.products.findIndex(p => p.id === productId);
        if (productIndex !== -1 && this.products[productIndex]) {
            this.products[productIndex]!.stock = newStock;
            console.log(`Updated stock for product ID ${productId} to ${newStock}`);
        } else {
            console.log(`Product with ID ${productId} not found`);
        }
    }

    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(entity => entity.id === id);
    }
}
const sampleProducts: Product[] = [
    new ElectronicsProduct(1, "Laptop Dell", 15000000, 5, 24),
    new ElectronicsProduct(2, "iPhone 15", 25000000, 3, 12),
    new ClothingProduct(3, "Áo thun Nike", 500000, 10, "M"),
    new ClothingProduct(4, "Quần jeans", 800000, 8, "L")
];

const sampleCustomers: Customer[] = [
    new Customer(1, "Nguyễn Văn A", "nva@email.com", "123 Đường ABC, TP.HCM"),
    new Customer(2, "Trần Thị B", "ttb@email.com", "456 Đường XYZ, Hà Nội")
];

const store = new Store(sampleProducts, sampleCustomers, []);

function displayMenu(): void {
    console.log("\n=== HỆ THỐNG QUẢN LÝ CỬA HÀNG ===");
    console.log("1. Thêm khách hàng mới");
    console.log("2. Thêm sản phẩm mới");
    console.log("3. Tạo đơn hàng mới");
    console.log("4. Hủy đơn hàng");
    console.log("5. Hiển thị sản phẩm còn hàng");
    console.log("6. Hiển thị đơn hàng của khách hàng");
    console.log("7. Tính tổng doanh thu");
    console.log("8. Thống kê sản phẩm theo danh mục");
    console.log("9. Cập nhật tồn kho sản phẩm");
    console.log("10. Tìm kiếm theo ID");
    console.log("11. Xem thông tin chi tiết sản phẩm");
    console.log("12. Thoát chương trình");
    console.log("=====================================");
}

function addNewCustomer(): void {
    const name = prompt("Nhập tên khách hàng:") || "";
    const email = prompt("Nhập email:") || "";
    const address = prompt("Nhập địa chỉ:") || "";
    
    store.addCustomer(name, email, address);
    console.log("Đã thêm khách hàng thành công!");
}

function addNewProduct(): void {
    console.log("Chọn loại sản phẩm:");
    console.log("1. Đồ điện tử");
    console.log("2. Quần áo");
    
    const type = prompt("Nhập lựa chọn (1 hoặc 2):") || "1";
    const id = store.products.length + 1;
    const name = prompt("Nhập tên sản phẩm:") || "";
    const price = parseInt(prompt("Nhập giá:") || "0");
    const stock = parseInt(prompt("Nhập số lượng:") || "0");
    
    if (type === "1") {
        const warranty = parseInt(prompt("Nhập thời gian bảo hành (tháng):") || "12");
        const product = new ElectronicsProduct(id, name, price, stock, warranty);
        store.addProduct(product);
    } else {
        const size = prompt("Nhập size:") || "M";
        const product = new ClothingProduct(id, name, price, stock, size);
        store.addProduct(product);
    }
    
    console.log("Đã thêm sản phẩm thành công!");
}

function createNewOrder(): void {
    console.log("Danh sách khách hàng:");
    store.customers.forEach(c => console.log(`${c.id}. ${c.name}`));
    
    const customerId = parseInt(prompt("Chọn ID khách hàng:") || "0");
    
    console.log("Danh sách sản phẩm:");
    store.products.forEach(p => console.log(`${p.id}. ${p.name} - Còn: ${p.stock}`));
    
    const productQuantities: { productId: number, quantity: number }[] = [];
    let addMore = true;
    
    while (addMore) {
        const productId = parseInt(prompt("Nhập ID sản phẩm:") || "0");
        const quantity = parseInt(prompt("Nhập số lượng:") || "0");
        
        productQuantities.push({ productId, quantity });
        
        const continueStr = prompt("Thêm sản phẩm khác? (y/n):") || "n";
        addMore = continueStr.toLowerCase() === "y";
    }
    
    const order = store.createOrder(customerId, productQuantities);
    if (order) {
        console.log("Tạo đơn hàng thành công!");
        console.log(order.getDetails());
    } else {
        console.log("Không thể tạo đơn hàng. Vui lòng kiểm tra lại thông tin.");
    }
}

function cancelOrder(): void {
    console.log("Danh sách đơn hàng:");
    store.orders.forEach(o => console.log(`${o.orderID}. ${o.customer} - ${o.totalAmount}`));
    
    const orderId = parseInt(prompt("Nhập ID đơn hàng cần hủy:") || "0");
    store.cancelOrder(orderId);
    console.log("Đã hủy đơn hàng thành công!");
}

function searchById(): void {
    console.log("Tìm kiếm theo:");
    console.log("1. Khách hàng");
    console.log("2. Sản phẩm");
    
    const type = prompt("Chọn loại (1 hoặc 2):") || "1";
    const id = parseInt(prompt("Nhập ID:") || "0");
    
    if (type === "1") {
        const customer = store.findEntityById(store.customers, id);
        if (customer) {
            console.log("Thông tin khách hàng:");
            console.log(customer.getDetails());
        } else {
            console.log("Không tìm thấy khách hàng.");
        }
    } else {
        const product = store.findEntityById(store.products, id);
        if (product) {
            console.log("Thông tin sản phẩm:");
            console.log(product.getProductInfo());
        } else {
            console.log("Không tìm thấy sản phẩm.");
        }
    }
}

function viewProductDetails(): void {
    console.log("Danh sách sản phẩm:");
    store.products.forEach(p => console.log(`${p.id}. ${p.name}`));
    
    const productId = parseInt(prompt("Nhập ID sản phẩm:") || "0");
    const product = store.products.find(p => p.id === productId);
    
    if (product) {
        console.log("Thông tin chi tiết:");
        console.log(product.getProductInfo());
        
        if (product instanceof ElectronicsProduct) {
            console.log(`Bảo hành: ${product.warrantyPeriod} tháng`);
        } else if (product instanceof ClothingProduct) {
            console.log(`Size: ${product.size}`);
        }
    } else {
        console.log("Không tìm thấy sản phẩm.");
    }
}

function updateStock(): void {
    console.log("Danh sách sản phẩm:");
    store.products.forEach(p => console.log(`${p.id}. ${p.name} - Tồn kho: ${p.stock}`));
    
    const productId = parseInt(prompt("Nhập ID sản phẩm:") || "0");
    const newStock = parseInt(prompt("Nhập số lượng tồn kho mới:") || "0");
    
    store.updateProductStock(productId, newStock);
}

function runStore(): void {
    let running = true;
    
    while (running) {
        displayMenu();
        const choice = prompt("Chọn chức năng (1-12):") || "12";
        
        switch (choice) {
            case "1":
                addNewCustomer();
                break;
            case "2":
                addNewProduct();
                break;
            case "3":
                createNewOrder();
                break;
            case "4":
                cancelOrder();
                break;
            case "5":
                console.log("Sản phẩm còn hàng:");
                store.listAvailableProducts();
                break;
            case "6":
                const customerId = parseInt(prompt("Nhập ID khách hàng:") || "0");
                store.listCustomerOrders(customerId);
                break;
            case "7":
                const revenue = store.calculateTotalRevenue();
                console.log(`Tổng doanh thu: ${revenue.toLocaleString()} VND`);
                break;
            case "8":
                store.countProductsByCategory();
                break;
            case "9":
                updateStock();
                break;
            case "10":
                searchById();
                break;
            case "11":
                viewProductDetails();
                break;
            case "12":
                console.log("Cảm ơn bạn đã sử dụng hệ thống!");
                running = false;
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
        
        if (running) {
            prompt("Nhấn Enter để tiếp tục...");
        }
    }
}

// Start the application
runStore();