
interface CartItem {
    id: number;
    name: string;
    images: string;
    quantity: number;
    price: number;
}

const initialCart: CartItem[] = [];

interface AddToCartAction {
    type: "ADD_TO_CART";
    payload: CartItem;
}

interface RemoveFromCartAction {
    type: "REMOVE_FROM_CART";
    payload: { id: string | number };
}

type CartAction = AddToCartAction | RemoveFromCartAction;

const cartReducer = (state: CartItem[] = initialCart, action: CartAction): CartItem[] => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const newItem = action.payload;
            const existingItemIndex = state.findIndex(item => item.id === newItem.id);
            if (existingItemIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + newItem.quantity
                };
                return updatedCart;
            } else {
                return [...state, newItem];
            }
        }
        
        case "REMOVE_FROM_CART": {
            const itemIdToRemove = action.payload.id;

            return state.filter(item => item.id !== itemIdToRemove);
        }
        default:
            return state;
    }
};

export default cartReducer;
