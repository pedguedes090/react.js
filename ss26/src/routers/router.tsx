import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import Student from '../components/Student'
import Student2 from '../components/Student2'
import Account from '../components/Account'
import Login from '../components/Login'
import PrivateRouter from '../components/PrivateRoute'
import Team from "../components/Team";
import Teams from "../components/Teams";
import TeamsIndex from "../components/TeamsIndex";
import LazyLoadComp from '../components/LazyLoadComp'
const router = createBrowserRouter([
  {
        path: "/",
        element: <h1>đây là trong chủ </h1>
    },
    {
        path: "/product/:id",
        element: <ProductDetail />
    },
    {
        path: "/student/:name",
        element: <Student />
    },
    {
        path: "/student2",
        element: <Student2 />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/account",
        element: <Account />
    },
    {
        path: "/PrivateRouter",
        element: <PrivateRouter />
    },
    {
        path: "/teams",
        element: <Teams />,
        children: [
            {
                path: "",
                element: <TeamsIndex />
            },
            {
                path: ":teamId",
                element: <Team />
            }
        ]
    },
    {
        path: "/lazy",
        element: <LazyLoadComp />
    }
])

export default router
