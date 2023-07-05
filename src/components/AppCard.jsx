import React from 'react';
import Card from './Card';
import data from '../JSON/script.json';

const AppCard = () => {
  return (
    <div>
      {data.map((item, index) => (
        <Card
          key={index}
          imagen={item.imagen}
          artista={item.artista}
          lugar={item.lugar}
          fecha={item.fecha}
          entrada={item.entrada}
        />
      ))}
    </div>
  );
};

export default AppCard;