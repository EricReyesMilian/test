import ProductCard from './ProductCard'
import products from '../assets/data/products'

const ProductsSection = ({ addToCart }) => {
  return (
    <section id="productos" className="products-section">
      <div className="container">
        <h2>Nuestros Productos</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection