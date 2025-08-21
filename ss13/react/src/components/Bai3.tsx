import React, { Component } from 'react'
interface User {
    id: number;
    name: string;
    age: number;
}
interface State {
    users: User[];
}
export default class Bai3 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: "John", age: 30 },
                { id: 2, name: "Mary", age: 25 },
                { id: 3, name: "Jane", age: 20 },
            ],
        };
    }

    render() {
        return (
            <div>
                <h2>Danh sách Users</h2>
                <table border={1} cellPadding={15} style={{ borderCollapse: "collapse", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}