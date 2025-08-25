import React, { Component } from 'react'
interface Email {
    email: string;
}
interface State {
    Email: Email;
}
export default class Baitap1 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            Email: { email: "" }
        }
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        this.setState({ Email: { email: value } });
    };

    render() {
        return (
            <div>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    console.log(this.state.Email);
                }}>
                    <h1>Form</h1>
                    <h3>Email</h3>
                    <div>
                        <input type="email" name="email" onChange={this.handleInputChange} />
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
