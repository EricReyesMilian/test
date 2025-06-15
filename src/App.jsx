import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductSlider from './components/ProductSlider'
import ProductsSection from './components/ProductsSection'
import AboutSection from './components/AboutSection'
import MensajeriaSection from './components/MensajeriaSection'
import Footer from './components/Footer'
import './styles/App.css'
import '@fontsource/montserrat/100.css' // Peso normal
import '@fontsource/montserrat/200.css' // Peso normal
import '@fontsource/montserrat/300.css' // Peso normal

import '@fontsource/montserrat/400.css' // Peso normal
import '@fontsource/montserrat/500.css' // Medium
import '@fontsource/montserrat/600.css' // Semi-bold
import '@fontsource/montserrat/700.css' // Bold
import '@fontsource/montserrat/800.css' // Bold
import '@fontsource/montserrat/900.css' // Bold
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
      <ProductSlider/>
      <AboutSection />
      <MensajeriaSection />
      <Footer />
    </div>
  )
}

export default App