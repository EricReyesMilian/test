const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button onClick={addToCart} className="btn">Añadir al carrito</button>
    </div>
  )
}

export default ProductCard