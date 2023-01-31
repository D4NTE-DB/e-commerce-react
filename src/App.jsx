import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'
import ProductCard from './components/ProductCard'
import { useDispatch } from 'react-redux'
import { getProducts } from './store/slices/products.slice'
import ProductDetails from './components/ProductDetails'
import Purchases from './components/Purchases'
import Login from './components/Login'
import AppNavbar from './components/AppNavbar'


function App() {

  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <HashRouter>
        <AppNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/product' element={<ProductCard />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/product/:id' element={<ProductDetails/>}/>

      </Routes>
    </HashRouter>
  )
}

export default App
