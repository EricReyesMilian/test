import { useState, useEffect, useRef } from 'react';
import '../ProductSlider.css';
import '../styles/App.css';

const ProductSlider = () => {
  const [activeCategory, setActiveCategory] = useState('iPhone 15');
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  // Datos de ejemplo
  const productsData = {
    'iPhone 15': Array(15).fill().map((_, i) => ({
      id: i + 1,
      name: `Cover iPhone 15 ${i + 1}`,
      price: 29.99 + i,
      image: `https://placehold.co/300x300/0071e3/white?text=Cover+${i + 1}`
    })),
    'iPhone 14': Array(8).fill().map((_, i) => ({
      id: i + 1,
      name: `Cover iPhone 14 ${i + 1}`,
      price: 24.99 + i,
      image: `https://placehold.co/300x300/0071e3/white?text=Cover+${i + 1}`
    })),
    'iPhone X': Array(15).fill().map((_, i) => ({
        id: i + 1,
        name: `Cover iPhone 16 ${i + 1}`,
        price: 29.99 + i,
        image: `https://placehold.co/300x300/0071e3/white?text=Cover+${i + 1}`
      })), 'iPhone 8': Array(15).fill().map((_, i) => ({
        id: i + 1,
        name: `Cover iPhone 16 ${i + 1}`,
        price: 29.99 + i,
        image: `https://placehold.co/300x300/0071e3/white?text=Cover+${i + 1}`
      })),
      'iPhone XR': Array(15).fill().map((_, i) => ({
        id: i + 1,
        name: `Cover iPhone 16 ${i + 1}`,
        price: 29.99 + i,
        image: `https://placehold.co/300x300/0071e3/white?text=Cover+${i + 1}`
      })),
  };

  const currentProducts = productsData[activeCategory] || [];
  const sliderWidth = sliderRef.current?.offsetWidth || 0;
  const cardWidth = cardRef.current?.offsetWidth || 300; // Ancho estimado si no está renderizado
  const visibleCards = Math.floor(sliderWidth / cardWidth);
  const totalWidth = currentProducts.length * cardWidth;
  const maxScroll = totalWidth - sliderWidth;

  const scrollTo = (position) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: position,
      behavior: 'smooth'
    });
    setScrollPosition(position);
  };

  const scrollNext = () => {
    const newPosition = Math.min(scrollPosition + (visibleCards * cardWidth), maxScroll);
    scrollTo(newPosition);
  };

  const scrollPrev = () => {
    const newPosition = Math.max(scrollPosition - (visibleCards * cardWidth), 0);
    scrollTo(newPosition);
  };

  useEffect(() => {
    // Resetear scroll al cambiar categoría
    scrollTo(0);
  }, [activeCategory]);

  return (
    <section className="products-slider">
      <h2>NUESTROS COVERS</h2>
      
      <div className="category-selector">
        {Object.keys(productsData).map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
  
      <div className="slider-wrapper">
       

        <div className="slider-container" ref={sliderRef}>
          <div 
            className="slider-track" 
            style={{ width: `${totalWidth}px` }}
          >
            {currentProducts.map(product => (
              <div 
                key={product.id} 
                className="product-card"
                ref={cardRef}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button className="btn">Añadir al carrito</button>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ProductSlider;