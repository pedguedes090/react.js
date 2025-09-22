import { combineReducers, createStore } from "redux";
import infoReducer from "../reducers/ListProducts.reducer";
import cartReducer from "../reducers/YourCart.reducer";
const rootReducer = combineReducers({
    info: infoReducer,
    cart: cartReducer
});

const store = createStore(rootReducer);

export default store;