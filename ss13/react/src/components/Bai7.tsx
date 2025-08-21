import React, { Component } from 'react'
interface State{
    theme: string
    language: string
}
export default class Bai7 extends Component<object,State> {
    constructor(props:object){
        super(props)

        this.state={
            theme: 'dark',
            language:'vietnamese'
        }
    }
  render() {
    const {theme, language}=this.state
    const backgroundColor = theme==='light'?'#ffffff' : '#333333'
    const color = theme === 'light' ? '#000000' : '#ffffff'
    let textTheme: string
    let textLanguage:string
    if(theme==='light'){
        textTheme='Nen: Sang'
    }else{
        textTheme='Nen: Toi'
    }
    if(language==='english'){
        textLanguage='Ngon ngu: Tieng Anh'
    }else{
        textLanguage='Ngon ngu: Tieng Viet'
    }
    return (
      <>
      <div style={{backgroundColor,color,height:300,padding: 100}}>
        <h1>{textTheme}</h1>
        <h1>{textLanguage}</h1>
      </div>
      </>
    )
  }
}