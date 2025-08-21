import React, { PureComponent } from 'react'

interface Props {
    id: number;
    ProductName: string;
    Price: string;
    Quantity: number;
}


export default class Child extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Product Details</h2>
                <p>ID: {this.props.id}</p>
                <p>Name: {this.props.ProductName}</p>
                <p>Price: {this.props.Price}</p>
                <p>Quantity: {this.props.Quantity}</p>
            </div>
        )
    }

}

