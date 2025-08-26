import { Component } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import Header from './Header'
import '../css/ShoppingCart.css'

interface Product {
    id: number, name: string, price: number, image: string
}

interface CartItem {
    id: number, name: string, price: number, image: string, quantity: number
}

interface State {
    products: Product[], cartItems: CartItem[], cartVisible: boolean
}

export default class ShoppingCart extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'Điện thoại Samsung Galaxy', price: 20000000, image: '/samsung1.jpg' },
                { id: 2, name: 'Điện thoại Iphone14 Promax', price: 20500000, image: '/iphone14.jpg' },
                { id: 3, name: 'Điện thoại Samsung Galaxy', price: 21000000, image: '/samsung2.jpg' },
                { id: 4, name: 'Điện thoại Iphone11 Promax', price: 21500000, image: '/iphone11.jpg' },
                { id: 5, name: 'Điện thoại Samsung Galaxy', price: 22000000, image: '/samsung3.jpg' },
                { id: 6, name: 'Điện thoại Samsung Galaxy', price: 22500000, image: '/samsung4.jpg' },
                { id: 7, name: 'Điện thoại Oppo A9', price: 23000000, image: '/oppo1.jpg' },
                { id: 8, name: 'Điện thoại Oppo V5', price: 23500000, image: '/oppo2.jpg' }
            ],
            cartItems: [],
            cartVisible: false
        }
    }

    addToCart = (product: Product): void => {
        const existingItem = this.state.cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            this.setState({
                cartItems: this.state.cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            });
        } else {
            this.setState({
                cartItems: [...this.state.cartItems, { ...product, quantity: 1 }]
            });
        }
    }

    updateQuantity = (id: number, newQuantity: number): void => {
        if (newQuantity === 0) {
            this.removeFromCart(id);
        } else {
            this.setState({
                cartItems: this.state.cartItems.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            });
        }
    }

    removeFromCart = (id: number): void => {
        this.setState({
            cartItems: this.state.cartItems.filter(item => item.id !== id)
        });
    }

    toggleCart = (): void => {
        this.setState({ cartVisible: !this.state.cartVisible });
    }

    getTotalItems = (): number => {
        return this.state.cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    render() {
        return (
            <div className="shopping-cart">
                <Header cartItemCount={this.getTotalItems()} onCartClick={this.toggleCart} />
                <ProductList products={this.state.products} onAddToCart={this.addToCart} />
                {this.state.cartVisible && (
                    <Cart 
                        items={this.state.cartItems}
                        onUpdateQuantity={this.updateQuantity}
                        onRemoveItem={this.removeFromCart}
                        onClose={this.toggleCart}
                    />
                )}
            </div>
        )
    }
}