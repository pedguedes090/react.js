import React, { Component } from 'react'
type typeState = {
    name: string
}
export default class Bai1 extends Component<object, typeState> {
    constructor(props: object) {
        super(props)
        this.state = {
            name: 'Nguyen Van A'
        }
    }
    render() {
        return (
            <h1>Ho va ten: {this.state.name}</h1>
        )
    }
}