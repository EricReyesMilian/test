import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductsSection from './components/ProductsSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <Banner />
      <ProductsSection addToCart={addToCart} />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App