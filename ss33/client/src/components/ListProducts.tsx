import { useSelector, useDispatch } from "react-redux";
interface Product {
    id: number;
    name: string;
    images: string;
    quantity: number;
    info: string;
    price: number;
}
interface CartItem {
    id: number;
    name: string;
    images: string;
    quantity: number;
    price: number;
}
interface RootState {
    info: Product[];
    cart: CartItem[];
}
function ListProducts() {
    const products = useSelector((state: RootState) => state.info);
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const getCartQuantity = (productId: number) => {
        const cartItem = cart.find(item => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };

    const addToCart = (product: Product) => {
        const cartQuantity = getCartQuantity(product.id);
        if (cartQuantity >= product.quantity) {
            return;
        }
        const cartItem = {
            id: product.id,
            name: product.name,
            images: product.images,
            quantity: 1,
            price: product.price
        };
        
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
    };

    return (
        <div>
            <h2 className="text-2xl mb-6 text-blue-600">List Products</h2>
            <div className="space-y-4">
                {products.map((product: Product) => {
                    const cartQuantity = getCartQuantity(product.id);
                    const canAdd = cartQuantity < product.quantity;
                    
                    return (
                        <div key={product.id} className='flex items-center border border-gray-200 rounded-lg p-4 gap-4 '>
                            <img src={product.images} alt={product.name} className="w-24 h-24 rounded-lg" />
                            <div className="flex-1">
                                <h4 className="text-lg">{product.name}</h4>
                                <p className="text-gray-600 text-sm">{product.info}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 mb-2">{product.quantity}</p>
                                <div className="flex items-center gap-3">
                                    
                                    <button 
                                        onClick={() => addToCart(product)}
                                        disabled={!canAdd}
                                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${canAdd ? 'bg-orange-500 text-white': 'bg-gray-300 text-gray-500 '
                                        }`}
                                    >
                                        {canAdd ? `${product.price} USD` : 'Sold Out'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ListProducts