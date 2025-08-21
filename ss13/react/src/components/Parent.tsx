import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        id: 1,
            ProductName:`Bưởi ba roi`,
            Price:`12.000đ`,
            Quantity: 6
    }

    render() {
        return (
            <Child {...this.state}></Child>
        )
    }
}
