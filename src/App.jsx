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
import Cellphone from './pages/electronics/cellphone'
import Computer from './pages/electronics/computer'
import MicrofiberClothes from './pages/automotive/microfiberclothes'
import GlassCare from './pages/automotive/glasscare'
import MensShoes from './pages/mensfashion/mensshoes'
import MensWatches from './pages/mensfashion/menswatches'
import WomensShoes from './pages/womensfashion/womensshoes'
import WomensWatches from './pages/womensfashion/womenswatches'

const router = createBrowserRouter([
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
    path:'/mfashion',
    element:<MensFashion />
  },
  {
    path:'/wfashion',
    element:<WomensFashion />
  },
  {
    path:'/cart',
    element:<Cart />
  },
  {
    path:'/cellphone',
    element:<Cellphone />
  },
  {
    path:'/computer',
    element:<Computer />
  },
  {
    path:'/glasscare',
    element:<GlassCare />
  },
  {
    path:'/microfiberclothes',
    element:<MicrofiberClothes />
  },
  {
    path:'/menswatches',
    element:<MensWatches />
  },
  {
    path:'/mensshoes',
    element:<MensShoes />
  },
  {
    path:'/womenswatches',
    element:<WomensWatches />
  },
  {
    path:'/womensshoes',
    element:<WomensShoes />
  },
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
