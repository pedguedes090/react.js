import React, { Component } from 'react'

interface Color{
    Color:string;
}
interface State{
    Color:Color;
    flag:boolean;
}
export default class Baitap2 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            Color: { Color: "" },
            flag: false
        }
    }
    handleInputChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = event.target;
        this.setState({Color:{Color:value}});
        this.setState({flag:false})
    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ flag: true });
        console.log(this.state.Color);
    };
    render() {
        return (
            <div>
                <div>Color: {this.state.flag ? this.state.Color.Color : ""}</div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="color" name="Color" id="" onChange={this.handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
    )
  }
}
