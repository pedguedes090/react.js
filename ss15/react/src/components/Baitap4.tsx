import React, { Component } from 'react'
interface State {
  progress: string;
  flag: boolean;
}
export default class Baitap4 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      progress: "",
      flag: false
    }
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ progress: value });
    this.setState({ flag: false });
  };
  handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    this.setState({flag:true});
    console.log(this.state.progress);
  }
  render() {
    return (
      <div>
        <div>Tiến độ hoàn thành {this.state.flag?this.state.progress:""}</div>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="range" name="progress" id="" onChange={this.handleInputChange} />
            <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}
