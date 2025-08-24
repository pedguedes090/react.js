import React, { Component } from 'react'
interface Props {
    userName?: string;
}
interface State {
    userName?: string;
}
export default class Baitap3 extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            userName: 'RikkeiSoft'
        }
    }
    handleChange = () => {
        this.setState({
            userName: this.state.userName === 'RikkeiSoft' ? 'Rikkei Academy' : 'RikkeiSoft'
        })
    }
    render() {
        return (
            <>
                <h1>Company: {this.state.userName}</h1>
                <button onClick={this.handleChange}>change state</button>

            </>
        )
    }
}
