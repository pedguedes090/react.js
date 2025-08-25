import React, { Component } from 'react'
import type { ReactNode } from 'react'
import DetailPost from './DetailPost';

interface Props {
    id: number;
    title: string;
    Content: string;
    Author:string;
}
interface Post {
    id: number;
    title: string;
    Content: string;
    Author:string;
}
interface State {
   Post: Post;
}
export default class ListPost extends Component<Props, State> {
   constructor(props: Props) {
        super(props)

        this.state = {
           Post: {
               id: this.props.id,
               title: this.props.title,
               Content: this.props.Content,
               Author: this.props.Author
           }
        }
    }

    render(): ReactNode {
        return (
            <DetailPost id={this.state.Post.id} title={this.state.Post.title} Content={this.state.Post.Content} Author={this.state.Post.Author} />
        )
    }
}
