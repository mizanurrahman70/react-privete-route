import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Home from './Components/Home/Home';
import Navber from './Components/Navber/Navber';
import Regester from './Components/Regester.jsg/Regester';
import Login from './Components/Login/Login';
import AuthContext from './Components/AuthContext/AuthContext';
import List from './Components/List/List';
import PrivetRout from './Components/PrivetRout/PrivetRout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:([
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/nav",
        element:<Navber></Navber>
      },{
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/reg',
        element:<Regester></Regester>
      },
      {
        path:'/li',
        element:<PrivetRout><List></List></PrivetRout>
      }
    ])
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <AuthContext>
  <RouterProvider router={router} />
  </AuthContext>
</React.StrictMode>
)
