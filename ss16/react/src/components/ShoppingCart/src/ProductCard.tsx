import { Component } from 'react'
import '../css/ProductCard.css'

interface Product {
    id: number, name: string, price: number, image: string
}

interface ProductCardProps {
    product: Product, onAddToCart: (product: Product) => void
}

interface State {
    imageError: boolean
}

export default class ProductCard extends Component<ProductCardProps, State> {
    constructor(props: ProductCardProps) {
        super(props);
        this.state = {
            imageError: false
        }
    }

    formatPrice = (price: number): string => {
        return price.toLocaleString('vi-VN') + ' ₫';
    }

    handleImageError = (): void => {
        this.setState({ imageError: true });
    }

    render() {
        const { product } = this.props;
        
        return (
            <div className="product-card">
                <div className="product-image">
                    {this.state.imageError ? (
                        <div className="image-placeholder">
                            <div className="placeholder-icon">📷</div>
                            <div className="placeholder-text">Không có ảnh</div>
                        </div>
                    ) : (
                        <img 
                            src={product.image}
                            alt={product.name}
                            onError={this.handleImageError}
                        />
                    )}
                </div>
                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{this.formatPrice(product.price)}</p>
                    <button 
                        className="add-to-cart-btn"
                        onClick={() => this.props.onAddToCart(product)}
                    >
                        🛒 Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        )
    }
}