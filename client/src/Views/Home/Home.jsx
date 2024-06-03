import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokemons from '../../Components/Pokemons/Pokemons';
import {
  getPokemons,
  pokemonsPage,
  loadingPokemons,
  changeSortOrder
} from '../../Redux/Actions/index';
import './home.css';
import Searchbar from '../../Components/SearchBar/Searchbar';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonsPage);
  const pokefilter = useSelector((state) => state.pokefilter);
  const loading = useSelector((state) => state.loadingPokemons);
  const filter = useSelector((state) => state.filter);
  const sortOrder = useSelector((state) => state.sortOrder); // Nuevo selector para obtener el orden actual

  const paginate = (event) => {
    dispatch(pokemonsPage(event.target.name));
  };

  useEffect(() => {
    dispatch(loadingPokemons(true));
    dispatch(getPokemons());
  }, []);

  const handleSortOrderChange = (order) => {
    if (order === '') {
      dispatch(changeSortOrder(order)); // Dispatch de la acción para quitar el orden
    } else {
      dispatch(changeSortOrder(order)); // Dispatch de la acción para cambiar el orden
    }
  };

  return (
    <div className='total'>
      <Searchbar />
      <div className={filter ? 'div-container-filter' : 'div-container'}>
        {loading ? (
          <>
            <div className='div-loading'>
              <img
                className='loading-img'
                src='https://media.tenor.com/z7Zy8aEZSvsAAAAi/ash-now-loading-dark.gif'
                alt='Loading...'
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <div>
                <select onChange={(e) => handleSortOrderChange(e.target.value)}>
                  <option value="">Desactivado</option>
                  <option value="asc">Ascendente</option>
                  <option value="desc">Descendente</option>
                </select>
              </div>
            </div>
            <Pokemons
              nameOfClass={filter ? 'no-div' : 'div'}
              pokemons={filter ? pokefilter : pokemons}
              sortOrder={sortOrder}
            />
            {!filter ? (
              <>
                <div className='div-buttons'>
                  <button onClick={paginate} name='prev' className='left'>
                    ⇦
                  </button>
                  <button onClick={paginate} name='next' className='right'>
                    ⇨
                  </button>
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
