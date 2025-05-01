const Footer = () => {
    return (
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>info@iaccess.com</p>
              <p>+1 234 567 890</p>
            </div>
            <div className="footer-section">
              <h3>Horario</h3>
              <p>Lunes a Viernes: 9am - 6pm</p>
              <p>Sábado: 10am - 4pm</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} iAccess. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer