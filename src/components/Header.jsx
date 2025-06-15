import { useState, useRef, useEffect } from 'react';

const Header = ({ cartCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const menuRef = useRef(null);

    // Manejar la animación de salida
    useEffect(() => {
        if (isMenuOpen) {
            setShouldRender(true);
        } else if (!isMenuOpen && shouldRender) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 300); // Duración de la animación de salida
            return () => clearTimeout(timer);
        }
    }, [isMenuOpen, shouldRender]);

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header" ref={menuRef}>
            <div className="container">
                <a href="#" className="logo">
                    <img src="/src/assets/logo.png" alt="Logo" />
                </a>
                
                <div 
                    className="menu-toggle" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="dropdown-menu"
                >
                    <span className="toggle-icon">{isMenuOpen ? '×' : '='}</span>
                </div>
            </div>
        
            {shouldRender && (
                <div 
                    className={`list ${isMenuOpen ? 'open' : 'close'}`}
                    id="dropdown-menu"
                    onAnimationEnd={() => {
                        if (!isMenuOpen) {
                            setShouldRender(false);
                        }
                    }}
                >
                    <nav>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#productos">Productos</a></li>
                            <li><a href="#nosotros">Nosotros</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;