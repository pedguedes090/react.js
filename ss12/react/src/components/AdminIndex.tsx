import { Component } from 'react'
import './AdminIndex.css';
export default class AdminIndex extends Component {
    render() {
        return (
            <div>
                <div className="admin-layout">
                    <header className="admin-header">Header</header>
                    <div className="admin-body">
                        <aside className="admin-menu">Menu</aside>
                        <main className="admin-main">Main</main>
                    </div>
                    <footer className="admin-footer">Footer</footer>
                </div>
            </div>
        )
    }
}
