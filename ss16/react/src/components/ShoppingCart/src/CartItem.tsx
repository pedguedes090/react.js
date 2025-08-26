import { Component } from 'react'
import '../css/CartItem.css'

interface CartItemType {
    id: number, name: string, price: number, image: string, quantity: number
}

interface CartItemProps {
    item: CartItemType, onUpdateQuantity: (id: number, newQuantity: number) => void, onRemoveItem: (id: number) => void
}

export default class CartItem extends Component<CartItemProps> {
    formatPrice = (price: number): string => {
        return price.toLocaleString('vi-VN') + ' ₫';
    }

    render() {
        const { item } = this.props;
        
        return (
            <div className="cart-item">
                <div className="cart-item-image">
                    <img 
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60x60/cccccc/666666?text=No+Image';
                        }}
                    />
                </div>
                
                <div className="cart-item-info">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">{this.formatPrice(item.price)}</p>
                </div>
                
                <div className="cart-item-controls">
                    <div className="quantity-controls">
                        <button 
                            className="quantity-btn"
                            onClick={() => this.props.onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                            -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                            className="quantity-btn"
                            onClick={() => this.props.onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                    
                    <button 
                        className="remove-btn"
                        onClick={() => this.props.onRemoveItem(item.id)}
                    >
                        🗑️
                    </button>
                </div>
            </div>
        )
    }
}