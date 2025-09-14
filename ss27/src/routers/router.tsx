import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import Error from '../components/Error'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import ProductList from '../components/ProductList'
import ProductDetail from '../components/ProductDetail'
import TaskList from '../components/TaskList'
import TaskDetail from '../components/TaskDetail'
import BlogLayout from '../components/BlogLayout'
import Post from '../components/Post'
import PostDetail from '../components/PostDetails'
import Home2 from '../components/Home2'
import Product2 from '../components/Product2'
import Detail2 from '../components/Detail2'
import Register from '../components/Register'
import Login from '../components/Login'


const router = createBrowserRouter([
{
    path: "*",
    element: <Error />
},
{
    path: "/",
    element: <Home />
},
{
    path: "/about",
    element: <About />
},
{
    path: "/contact",
    element: <Contact />
},
{
    path: "/product",
    element: <ProductList />
},
{
    path: "product/:id",
    element: <ProductDetail />
},
{
    path: "tasklist",
    element: <TaskList />
},
{
    path: "taskdetail/:id",
    element: <TaskDetail />
},
{
    path: "blog",
    element: <BlogLayout />,
    children: [
        {
            path: "post",
            element: <Post />
        },
        {
            path: "posts/:id",
            element: <PostDetail />
        }
    ]
},
{
    path: "home2",
    element: <Home2 />
},
{
    path: "product2",
    element: <Product2 />
},
{
    path: "detail2",
    element: <Detail2 />
},
{
    path: "register",
    element: <Register />
},
{
    path: "login",
    element: <Login />
}
])

export default router
