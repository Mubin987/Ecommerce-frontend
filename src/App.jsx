import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Automotive from './pages/automotive'
import Electronics from './pages/electronics'
import MensFashion from './pages/mfashion'
import WomensFashion from './pages/wfashion'
import Cart from './pages/cart'
import Header from './components/header'
import Footer from './components/footer'
import Product from './pages/Product/index'
import MensShoes from './pages/beforeDynamic/mensshoes'
import {CartContainer} from './context/cartcontext'
import Layout from './components/layout'
import AddProduct from './pages/addProduct'

const router = createBrowserRouter([
  {
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/automotive',
        element:<Automotive />
      },
      {
        path:'/electronics',
        element:<Electronics />
      },
      {
        path:'/mensfashion',
        element:<MensFashion />
      },
      {
        path:'/womensfashion',
        element:<WomensFashion />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/electronics/:subcategory',
        element:<Product category={"electronics"}/>
      },
      {
        path:'/automotive/:subcategory',
        element:<Product category={"automotive"} />
      },
      {
        path:'/mensfashion/:subcategory',
        element:<Product category={"mensfashion"} />
       },
      // {
      //   path:'/mensfashion/mensshoes',
      //   element:<MensShoes />
      // },
      {
        path:'/womensfashion/:subcategory',
        element:<Product category={"womensfashion"} />
      },
      {
        path:'/addproduct',
        element:<AddProduct />
      },
    ],
  },
])


function App() {
  return (
    <>
      <CartContainer>
        <RouterProvider router={router} />
      </CartContainer>
    </>
  )
}

export default App
