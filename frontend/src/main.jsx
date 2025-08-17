import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import ProductCard from './components/ProductCard.jsx'
import ProductList from './components/ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <ProductList />
  </StrictMode>,
)
