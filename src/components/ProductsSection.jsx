import ProductCard from './ProductCard'
import products from '../assets/data/products'
import CatalogCard from './CatalogCard'

const ProductsSection = ({ addToCart }) => {
  return (
    <section id="productos" className="products-section">
            <div id="a" className='line'></div>
      <div id="b" className='line'></div>
      <div id="c" className='line'></div>


      <div className="container">
        <h2>Nuestros Productos</h2>
        <div className="products-grid">
            <CatalogCard 
              srce="/src/assets/cover.png"
             name="Covers"
            />
            <CatalogCard 
              srce="/src/assets/cover.png"
             name="Micas"
            />
            <CatalogCard 
              srce="/src/assets/cover.png"
             name="Protectores de Camara"
            />
            <CatalogCard 
              srce="/src/assets/cover.png"
             name="Otros"
            />
      
        </div>
      </div>
    </section>
  )
}

export default ProductsSection