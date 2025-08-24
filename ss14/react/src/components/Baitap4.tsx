import React, { Component } from 'react'
interface Props {
    userName?: string
}

interface State {
    userName?: string
}
export default class Baitap4 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userName: props.userName
        };
    }
    handleChange = () => {
        this.setState({
            userName: this.state.userName === 'Hoc code de di lam' ? 'Hoc code se thanh cong' : 'Hoc code de di lam'
        })
    }
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        return nextState.userName !== this.state.userName;
    }
  render() {
    return (
      <div>
        <h1>Company: {this.state.userName}</h1>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}
