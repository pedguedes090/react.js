import { Component } from 'react'
import '../css/Header.css'

interface HeaderProps {
    cartItemCount: number, onCartClick: () => void
}

export default class Header extends Component<HeaderProps> {
    render() {
        return (
            <div className="header">
                <div className="header-nav">
                    <span className="nav-item">Trang chủ</span>
                    <span className="nav-item">Danh sách sản phẩm</span>
                </div>
                <div className="cart-button" onClick={this.props.onCartClick}>
                    🛒 {this.props.cartItemCount}
                </div>
            </div>
        )
    }
}
