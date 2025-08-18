import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import ProductList from './components/ProductList.jsx'
import FilterBar from './components/FilterBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <FilterBar />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
    <ProductList />
  </StrictMode>,
)
