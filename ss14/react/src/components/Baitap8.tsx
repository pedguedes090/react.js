import React, { Component } from 'react'
interface User{
    email:string,
    password:string
}
export default class Baitap8 extends Component<object, User> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  validate = ():boolean => {
        const {email,password} = this.state;
        if(email.length === 0) return false
        if(password.length === 0) return false
        return true;
    }

    isDuplicate = (email: string,password:string): boolean => {
        const data = localStorage.getItem('users')
        if (!data) return false
        const users = JSON.parse(data)
        return users.some((user: User) => user.email === email && user.password === password)
    }
    
    handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if(!this.validate()){
        alert('Vui lòng nhập đầy đủ Email và Mật khẩu!');
        return
      }
      if(!this.isDuplicate(this.state.email,this.state.password)){
        alert(`Đăng nhập thất bại`);
        return
      }
      this.setState({
        email:``,
        password:``
      })
      alert(`Đăng nhập tài khoản thành công`)
    }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        this.setState({ [name]: value } as Pick<User, keyof User>)
    }


  render() {
    return (
      <div className='formContainer'>
            <h2>Đăng nhập tài khoản</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleInput}/>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Mật khẩu</label>
                    <br />
                    <input type="text" name="password" id="password" value={this.state.password} onChange={this.handleInput}/>
                </div>
                <br />
                <button type="submit">Đăng nhập</button>
            </form>
      </div>
    )
  }
}