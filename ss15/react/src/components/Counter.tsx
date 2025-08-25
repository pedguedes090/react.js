import React, { Component } from 'react'
interface State {
    count: number;
}
export default class Counter extends Component<object, State> {
    private timerID?: number;

    constructor(props: object) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.timerID = window.setInterval(() => {
            this.setState(prev => ({
                count: prev.count === 10 ? 0 : prev.count + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
            </div>
        );
    }
}