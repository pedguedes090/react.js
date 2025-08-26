import { Component } from 'react'
import CartItem from './CartItem'
import '../css/Cart.css'

interface CartItemType {
    id: number, name: string, price: number, image: string, quantity: number
}

interface CartProps {
    items: CartItemType[], onUpdateQuantity: (id: number, newQuantity: number) => void, onRemoveItem: (id: number) => void, onClose: () => void
}

export default class Cart extends Component<CartProps> {
    getTotalPrice = (): number => {
        return this.props.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    formatPrice = (price: number): string => {
        return price.toLocaleString('vi-VN') + ' ₫';
    }

    render() {
        return (
            <div className="cart-overlay">
                <div className="cart-container">
                    <div className="cart-header">
                        <h2>Cart</h2>
                        <button className="close-btn" onClick={this.props.onClose}>✕</button>
                    </div>
                    
                    <div className="cart-content">
                        {this.props.items.length === 0 ? (
                            <div className="empty-cart">Giỏ hàng trống</div>
                        ) : (
                            this.props.items.map(item => (
                                <CartItem 
                                    key={item.id}
                                    item={item}
                                    onUpdateQuantity={this.props.onUpdateQuantity}
                                    onRemoveItem={this.props.onRemoveItem}
                                />
                            ))
                        )}
                    </div>
                    
                    {this.props.items.length > 0 && (
                        <div className="cart-footer">
                            <div className="total-price">
                                Tổng tiền: {this.formatPrice(this.getTotalPrice())}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}