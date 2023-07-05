import React, { useState } from 'react';
import Card from './Card';
import data from '../JSON/script.json';

const FilteredCards = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [filterArtista, setFilterArtista] = useState('');
  const [filterLugar, setFilterLugar] = useState('');
  const [filterMes, setFilterMes] = useState('');

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    if (name === 'artista') {
      setFilterArtista(value);
    } else if (name === 'lugar') {
      setFilterLugar(value);
    } else if (name === 'mes') {
      setFilterMes(value);
    }
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();

    const filtered = data.filter((item) => {
      const matchArtista = filterArtista === '' || item.artista.toLowerCase().includes(filterArtista.toLowerCase());
      const matchLugar = filterLugar === '' || item.lugar.sitio.toLowerCase().includes(filterLugar.toLowerCase());
      const matchMes = filterMes === '' || item.fecha.mes.toLowerCase().includes(filterMes.toLowerCase());
        console.log("holaaaa");
      return matchArtista && matchLugar && matchMes;
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <form onSubmit={handleFilterSubmit}>
        <input
          type="text"
          name="artista"
          value={filterArtista}
          placeholder="Filtrar por artista"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="lugar"
          value={filterLugar}
          placeholder="Filtrar por lugar"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="mes"
          value={filterMes}
          placeholder="Filtrar por mes"
          onChange={handleFilterChange}
        />
        <button type="submit">Filtrar</button>
      </form>

      {filteredData.map((item, index) => (
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

export default FilteredCards;