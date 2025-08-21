import React, { PureComponent } from 'react'

interface Props {
    id: number;
    name: string;
    content: string;
    author: string;
}

export default class DetailPost extends PureComponent<Props> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="detail-post">
                <h3>{this.props.id}</h3>
                <h2>{this.props.name}</h2>
                <p>{this.props.content}</p>
                <p>{this.props.author}</p>
            </div>
        )
    }
}
