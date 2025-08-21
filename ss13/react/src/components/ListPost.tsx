import React, { PureComponent } from 'react'
import DetailPost from './DetailPost';
class post {
    id: number;
    name: string;
    content: string;
    author: string
    constructor(id: number, name: string, content: string, author: string) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.author = author;
    }
}

export default class ListPost extends PureComponent {
    posts: post[] = [
        new post(1, "Tại sao nên học ReactJS ", "Học ReactJS để đi làm", "David"),
        new post(2, "Props trong ReactJS", "CProps giúp truyền dữ liệu từ component con xuống component cha", "Linda"),
        new post(3, "State trong ReactJS là gì?", "State giúp trữ trạng thái dữ liệu bên trong một component", "David"),
    ]
    render() {
        return (
            <div>
                {this.posts.map(post => (
                    <DetailPost
                        key={post.id}
                        id={post.id}
                        name={post.name}
                        content={post.content}
                        author={post.author}
                    />
                ))}
            </div>
        );
    }
}
