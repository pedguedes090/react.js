import React, { useMemo } from 'react'
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function Baitap1() {
  const cartItems: CartItem[] = useMemo(() => [
    { id: 1, name: 'Item 1', price: 100, quantity: 1 },
    { id: 2, name: 'Item 2', price: 200, quantity: 3 },
    { id: 3, name: 'Item 3', price: 300, quantity: 5 },
  ], []);

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Total Amount: ${totalAmount}</h3>
    </div>
  )
}

export default Baitap1
