import { Component } from 'react'
import ProductCard from './ProductCard'
import '../css/ProductList.css'

interface Product {
    id: number, name: string, price: number, image: string
}

interface ProductListProps {
    products: Product[], onAddToCart: (product: Product) => void
}

export default class ProductList extends Component<ProductListProps> {
    render() {
        return (
            <div className="product-list">
                <div className="products-grid">
                    {this.props.products.map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            onAddToCart={this.props.onAddToCart}
                        />
                    ))}
                </div>
            </div>
        )
    }
}