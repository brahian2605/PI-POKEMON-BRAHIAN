import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

const Pokemon = ({ id, name, img, types, className }) => {
  const typeColors = {
    fire: '#fd7d24',
    water: '#4592c4',
    grass: '#9bcc50',
    bug: '#729f3f',
    electric: '#FFD700',
    psychic: '#FF1493',
    rock: '#A88C32',
    ghost: '#705898',
    dragon: '#6F35FC',
    fairy: '#EE99AC',
    ground: '#E0C068',
    fighting: '#800000',
    poison: '#800080',
    flying: '#A080FF',
    normal: '#A1A1A1',
    ice: '#98D8D8',
    steel: '#B4B4B4',
    dark: '#333333',
    fairy: '#FF69B4',
    unknown: '#000000',
    
    
  };

  const typeLabels = types && types.map((t, index) => {
    const backgroundColor = typeColors[t.name.toLowerCase()] || 'gray'; // Color por defecto

    const typeStyle = {
      backgroundColor,
      margin: '2px', // Agrega un margen inferior entre los labels de los tipos
    };

    return (
      <div key={index} className="type-label" style={typeStyle}>
        <label className='tipos'>
        <span>{t.name.charAt(0).toUpperCase() + t.name.slice(1)}</span>
        </label>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="div-name">
        <p className="name">{name && name[0].toUpperCase().concat(name.slice(1))}</p>
      </div>
      {className ? (
        <>
          <Link to={`/detail/${id}`}>
            <img className={className} src={img} alt={`Imagen de ${name}`} />
          </Link>
          <div className="div-type">
            {typeLabels}
          </div>
          <div className='circle'></div>
        </>
      ) : (
        <>

          <img className={className} src={img} alt={`Imagen de ${name}`} />
          <div className="div-type">
            {typeLabels}
          </div>
          <div className='circle'></div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
