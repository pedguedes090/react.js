import React, { Component } from 'react'
interface Props {
    id: number;
    title: string;
    Content: string;
    Author: string;
}
interface State {
    id: number;
    title: string;
    Content: string;
    Author: string;
}
export default class DetailPost extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            Content: this.props.Content,
            Author: this.props.Author
        };
    }
    render() {
        return (
            <div>
                <h1>Danh sach bai viet</h1>
                <p>id: {this.props.id}</p>
                <p>title: {this.props.title}</p>
                <p>Content: {this.props.Content}</p>
                <p>Author: {this.props.Author}</p>
            </div>
        )
    }
}
