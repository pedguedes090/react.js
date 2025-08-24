import React, { Component } from 'react'
interface User {
    name: string,
    email: string,
    password: string,
    phone: string
}

export default class Baitap7 extends Component<object, User> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: ''
        };
    }
    validate = (): boolean => {
        const { name, email, password, phone } = this.state;
        if (name.length === 0) return false
        if (email.length === 0) return false
        if (password.length === 0) return false
        if (phone.length === 0) return false
        return true;
    }

    isDuplicate = (email: string): boolean => {
        const data = localStorage.getItem('users')
        if (!data) return false
        const users = JSON.parse(data)
        return users.some((user: User) => user.email === email)
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone
        }
        console.log(newUser);
        if (!this.validate()) {
            console.log('Vui lòng nhập đầy đủ Tên, Email và Mật khẩu!');
            return
        }
        if (this.isDuplicate(newUser.email)) {
            console.log(`Email không được trùng`);
            return
        }
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        this.setState({
            name: ``,
            email: ``,
            password: ``,
            phone: ``
        })
        alert(`Đăng ký tài khoản thành công`)
    }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        this.setState({ [name]: value } as Pick<User, keyof User>)
    }


    render() {
        return (
            <div className='formContainer'>
                <h2>Đăng ký tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Tên sinh viên</label>
                        <br />
                        <input type="text" name="name" id="name" value={this.state.name} autoFocus onChange={this.handleInput} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleInput} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Mật khẩu</label>
                        <br />
                        <input type="text" name="password" id="password" value={this.state.password} onChange={this.handleInput} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <br />
                        <input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleInput} />
                    </div>
                    <br />
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        )
    }
}