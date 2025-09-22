import React from 'react'
import { useSelector, useDispatch } from "react-redux";


interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}
function YourCart() {
  interface RootState {
    cart: CartItem[];
  }
  const cartItems = useSelector((state: RootState) => state.cart || []);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  return (
    <div>
      <h2 className=" text-red-600">Your Cart</h2>
      
      <div>
        <table>
          <thead>
              <tr className="border-b bg-gray-50">
                  <th className="p-2 text-left">STT</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Price</th>
                  <th className="p-2 text-left">Quantity</th>
                  <th className="p-2 text-left">Action</th>
              </tr>
          </thead>
          <tbody>
              {cartItems.map((item: CartItem, index: number) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2 text-orange-500">{item.price} USD</td>
                      <td className="p-2">
                        <span>
                          {item.quantity}
                        </span>
                      </td>
                      <td className="p-2">
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                          >
                            Delete
                          </button>
                      </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>

      {cartItems.length === 0 && (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">
            There are <span className=" text-blue-600">{cartItems.length}</span> items in your shopping cart
        </p>
        <p className="text-xl  text-red-600">
          Total: {cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0)} USD
        </p>
      </div>

      {cartItems.length > 0 && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-center">
          Add to cart successfully
        </div>
      )}
    </div>
  )
}

export default YourCart;
