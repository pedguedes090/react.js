import React, { Component } from 'react'
type typeState = {
    id: number
    name: string
    date: string
    adress: string
}
export default class Bai2 extends Component<object, typeState> {
    constructor(props: object) {
        super(props)
        this.state = {
            id: 1,
            name: 'Nguyen Van Son',
            date: '20/12/2023',
            adress: 'Thanh Xuan, Ha Noi'
        }
    }
    render() {
        return (
            <>
                <h2>Thong tin ca nhan</h2>
                <p>id: {this.state.id}</p>
                <p>ten: {this.state.name}</p>
                <p>ngay sinh: {this.state.date}</p>
                <p>dia chi: {this.state.adress}</p>
            </>
        )
    }
}