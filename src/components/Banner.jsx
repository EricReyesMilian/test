import { useState } from 'react';
const Banner = () => {
     const [animateMica, setAnimateMica] = useState(false);

  const handleClick = () => {
    setAnimateMica(true);
    setTimeout(() => setAnimateMica(false), 2000); // Duración 1 segundo
  };

    return (
      <section id="inicio" className="banner">
        <div 
            className='clickeable'
            onClick={handleClick}aria-hidden="true"
        />
        <div className="container">
          <h1>Accesorios Premium para <span className="IphoneSpan">iPhones</span></h1>
          <p>Contamos con una amplia variedad de covers para TODOS los modelos de iPhone, ademas de micas y protectores de camara</p>
          <a href="#productos" className="btn">Ver Catalogo</a>
        </div>
        <div className="micawrapper">
            <div className={`mica ${animateMica ? 'mica-animate' : ''}`}>
                <p className={`micaMensaje ${animateMica ? 'micaMensaje-animate' : ''}`}>Protege tu telefono con una Mica</p>
            </div>
        </div>
        <div className='barra'></div>
      </section>
    )
  }
  
  export default Banner