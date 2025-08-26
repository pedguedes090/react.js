import React, { Component } from 'react'
import './index.css'
type BaseButtonProps = {
    htmlType?: "button" | "reset"| "submit";
    id?:string;
    className?:string;
    type?: "primary" | "secondary" | "success"| "danger";
    size?: "small" | "medium" | "large";
    children?: React.ReactNode;
}
export default class Baitap3 extends Component<BaseButtonProps> {
  render() {
        return (
            <>
            <button
                className={`baseButton ${this.props.size === "large" ? "button-large" : this.props.size === "medium" ? "button-medium" : "button-small"}${this.props.type ? " button-" + this.props.type : ""}`}
                type={this.props.htmlType || "button"}
                id={this.props.id}
            >
                {this.props.children || "Button"}
            </button>
            </>
        )
    }
}