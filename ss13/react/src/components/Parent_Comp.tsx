import React, { Component } from 'react'
import Children_Comp from './Children_Comp';
export default class Parent_Comp extends Component {
  render() {
    return (
      <div>
        <Children_Comp name="Nguyen Van A" />
      </div>
    )
  }
}
