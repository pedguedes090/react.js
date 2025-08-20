import { Component } from 'react'
import './UserLayout.css'
export default class UserLayout extends Component {
    render() {
        return (
            <div className="Wrapper">
                <div className='full'>
                    <div className='Header'>
                        <div className='headerName'>Header</div>
                        <div className='headerNav'>Navigation</div>
                    </div>
                    <div className='Content'>
                        <div className='Menu'>Menu</div>
                        <div className='CartGrid'>
                            {Array.from({ length: 16 }).map((_, i) => (
                                <span className='cart' key={i}>Cart</span>
                            ))}
                        </div>
                        <div className='Article'>Article</div>
                    </div>
                </div>
            </div>
        )
    }
}
