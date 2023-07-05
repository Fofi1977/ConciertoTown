import React from 'react';
import "../styles/header.css"


const Header = () => {
  return (
    
        <div className="header-container">
        <div className="title-container">
          <h1>ConciertoTown</h1>
        </div>
        
        <div className="subtitle-container">
          <div className="subtitle">"No te pierdas ni un solo concierto de tus artistas favoritos. Nosotros te mantendremos siempre actualizado con las fechas y ubicaciones de los eventos más emocionantes."</div>
        </div>
      </div>
  );
};

export default Header;