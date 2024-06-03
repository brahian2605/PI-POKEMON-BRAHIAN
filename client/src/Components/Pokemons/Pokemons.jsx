import React from 'react';
import './pokemons.css';
import Pokemon from '../Pokemon/Pokemon';

const Pokemons = ({ pokemons, nameOfClass, sortOrder }) => {
  // Función para ordenar los Pokémon según sortOrder
  const getSortedPokemons = () => {
    if (sortOrder === 'asc') {
      return [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'desc') {
      return [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
    }
    // Si sortOrder es `false` (desactivado), se devuelve la lista sin ordenar
    return pokemons;
  };

  const sortedPokemons = getSortedPokemons();

  return (
    <div className={nameOfClass}>
      {sortedPokemons.map((p) => (
        <Pokemon
          key={p.id}
          id={p.id}
          name={p.name}
          img={p.img}
          types={p.types}
          className={'imagen'}
        />
      ))}
    </div>
  );
};

export default Pokemons;

