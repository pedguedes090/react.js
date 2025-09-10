

import { NavLink, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Detail from './pages/Detail'
import CustomLink from './pages/CustomLink'
import HomePage from './pages/HomePage'
import ListUser from './pages/ListUser'
import UserDetail from './pages/UserDetail'


function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path='about' element={<About/>} />
      <Route path='login' element={<Login/>} />
      <Route path='*' element={<NotFound />} />
      <Route path='register' element={<Register/>} />
      <Route path='product' element={<Product/>} />
      <Route path='detail' element={<Detail/>} />
      <Route path='customlink' element={<CustomLink/>} />
      <Route path='customlink/homepage' element={<HomePage/>} />
      <Route path='listuser' element={<ListUser/>} /> 
      <Route path='userdetail/:id' element={<UserDetail/>} />
     </Routes>
     <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-red-500' : '')}>Home</NavLink> 
      <NavLink to="/product" className={({ isActive }) => (isActive ? 'bg-red-500' : '')}>Product</NavLink> 
      <NavLink to="/detail" className={({ isActive }) => (isActive ? 'bg-red-500' : '')}>Detail</NavLink>


    </>
  )
}

export default App
