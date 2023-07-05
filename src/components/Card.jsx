import React from 'react';
import '../styles/card.css';
const Card = ({ imagen, artista, lugar, fecha, entrada }) => {
  return (
    <div className='container'> 
      <div className="card">
      <img src={imagen} alt={artista} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{artista}</h2>
        <p className="card-details">Lugar: {lugar.sitio}</p>
        <p className="card-details">Fecha: {fecha.mes} {fecha.año} - {fecha.hora}</p>
        <a href={entrada} target="_blank" rel="noopener noreferrer" className="card-link">Entradas</a>
        </div>
 
      </div>
    </div>
  );
};

export default Card;