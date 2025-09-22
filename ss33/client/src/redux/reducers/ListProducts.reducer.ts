
interface Product {
    id: number;
    name: string;
    images: string;
    quantity: number;
    info: string;
    price: number;
}
const initialProducts: Product[] = [
    {
        id: 1,
        name: "Product 1",
        images: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
        quantity: 10,
        info: "This is product 1",
        price: 20
    },
    {
        id: 2,
        name: "Product 2", 
        images: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
        quantity: 5,
        info: "This is product 2",
        price: 35
    }
];

interface ProductAction {
    type: string;
    payload?: unknown;
}

const infoReducer = (state: Product[] = initialProducts, action: ProductAction): Product[] => {
    switch (action.type) {
        case "LOG":
            console.log(state);
            return state;
        default:
            return state;
    }
};

export default infoReducer;