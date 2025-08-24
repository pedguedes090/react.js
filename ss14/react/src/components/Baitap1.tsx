import React, { Component } from 'react'

interface State {
    userName: string;
}
export default class Baitap1 extends Component<object, State> {
  constructor(props: object) {
        super(props);
        this.state = {
            userName: "hi",
        };
    }

    render() {
        return (
            <div >
                Xin chào, tôi là: {this.state.userName}
            </div>
        );
    }
}