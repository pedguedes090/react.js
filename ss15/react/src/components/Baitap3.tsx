import React, { Component } from 'react'
interface Date{
    data:string;
}
interface State{
    date:Date;
    flag:boolean;
}
export default class Baitap3 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            date: { data: "" },
            flag: false
        }
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{

        const {value} = event.target;
        this.setState({date:{data:value}});
        this.setState({flag:false})
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state.date);
        this.setState({ flag: true });
    };
    render() {
        return (
            <div>
                <div>Ngày Sinh: {this.state.flag ? this.state.date.data : ""}</div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="date" name="date" id="" onChange={this.handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
  }
}
