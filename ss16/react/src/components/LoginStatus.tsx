import React, { Component } from 'react'
interface State {
    isLoggedIn: boolean;
}
export default class LoginStatus extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleToggle = () => {
        this.setState(prev => ({ isLoggedIn: !prev.isLoggedIn }));
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <div>
                <h2>
                    {isLoggedIn ? 'Xin chao, User!' : 'Vui long dang nhap de tiep tuc.'}
                </h2>
                <button onClick={this.handleToggle}>
                    {isLoggedIn ? 'Dang xuat' : 'Dang nhap'}
                </button>
            </div>
        );
    }
}