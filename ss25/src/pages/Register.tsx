import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface User {
  id: number
  email: string
  password: string
}

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  const [errorMessage, setErrorMessage] = useState('')
  
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    setErrorMessage('')
    
    if (!email) {
      setErrorMessage('Email không được để trống')
      return
    }
    
    if (!password) {
      setErrorMessage('Mật khẩu không được để trống')
      return
    }
    
    if (!confirmPassword) {
      setErrorMessage('Xác nhận mật khẩu không được để trống')
      return
    }
    
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp')
      return
    }

    const savedUsers = localStorage.getItem('users')
    let userList: User[] = []
    
    if (savedUsers) {
      userList = JSON.parse(savedUsers)
    }

    const existingUser = userList.find((user: User) => user.email === email)
    if (existingUser) {
      setErrorMessage('Email đã tồn tại')
      return
    }
    const newUser: User = {
      id: Date.now(),
      email: email,
      password: password
    }
    userList.push(newUser)
    localStorage.setItem('users', JSON.stringify(userList))
    alert('Đăng ký thành công!')
    navigate('/login')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Đăng ký tài khoản</h1>
        
        {}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label htmlFor="email" className="font-medium">Email của bạn</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="font-medium">Mật khẩu</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*****"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="font-medium">Xác nhận mật khẩu</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="*****"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button 
            type="submit"
            className="bg-blue-600 text-white rounded py-2 mt-4 hover:bg-blue-700 font-semibold"
          >
            Tạo tài khoản
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Đã có tài khoản? {' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Đăng nhập tại đây
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}