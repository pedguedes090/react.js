import  { Component } from 'react'
import './Bai5.css'
export default class Baitap5_page extends Component {
 page:number[]=[1,2,3,4]
  render() {
    return (
      <div className='page'>
        <div>prev</div>
        {this.page.map((p,index)=>{
            return <div key={index}>{p}</div>
        })}
        <div>next</div>
      </div>
    )
  }
}