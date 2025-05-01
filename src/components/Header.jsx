const Header = ({ cartCount }) => {
    return (
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <img src="/src/assets/images/logo.png" alt="Logo" />
          </a>
          {/* <nav>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav> */}
          <div className="cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header