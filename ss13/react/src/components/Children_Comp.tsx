import React, { Component } from 'react'

interface Props {
    name: string;
}
interface State {
    userName?: string
}
export default class Children_Comp extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userName: props.name
        };
    }
    render() {
        return (
            <div>
                <h1>Họ và tên component Cha {this.props.name}</h1>
                <h1>Họ và tên component Con {this.state.userName}</h1>
            </div>
        )
    }
}
