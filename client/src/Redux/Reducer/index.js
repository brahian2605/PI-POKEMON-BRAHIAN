
import { FILTER_NAME, GET_ONE_POKEMON, CHANGE_SORT_ORDER, GET_POKEMONS, PAGINATE, LOADING_DETAILS, LOADING_POKEMONS, CLOSE_FILTER, GET_TYPES } from "../Actions/actions-types";

let initialState = {
    pokemons: [],
    pokemonsPage: [],
    currentPage: 0,
    pokefilter: [],
    onePokemon: [],
    loadingDetails: false,
    loadingPokemons: false,
    filter: false,
    types: [],
    sortOrder: false
};


function rootReducer(state = initialState, action) {

    const pokemons_Per_Page = 12
    let sortedPokemons;

    switch (action.type) {

        case CHANGE_SORT_ORDER:
            let updatedPokemonsPage = state.pokemons.slice(); 
            
            if (action.payload === 'asc') {
              updatedPokemonsPage.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === 'desc') {
              updatedPokemonsPage.sort((a, b) => b.name.localeCompare(a.name));
            } 
            
            const paginatedPokemonsAfterSort = updatedPokemonsPage.slice(
              state.currentPage * pokemons_Per_Page,
              (state.currentPage + 1) * pokemons_Per_Page
            );
            
            return {
              ...state,
              pokemonsPage: paginatedPokemonsAfterSort,
              sortOrder: action.payload,
            };
          
          case GET_POKEMONS:
            sortedPokemons = action.payload.slice().sort((a, b) => {
              if (state.sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
              } else if (state.sortOrder === 'desc') {
                return b.name.localeCompare(a.name);
              }
              return 0;
            });
          
            const paginatedPokemonsFirstPage = sortedPokemons.slice(0, pokemons_Per_Page);
          
            return {
              ...state,
              pokemons: sortedPokemons,
              currentPage: 0,
              pokemonsPage: paginatedPokemonsFirstPage,
              loadingPokemons: false,
            };
          
          case PAGINATE:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const totalPages = Math.ceil(state.pokemons.length / pokemons_Per_Page);
          
            if (action.payload === 'prev' && prev_page < 0) return { ...state };
            if (action.payload === 'next' && next_page >= totalPages) return { ...state };
          
            const newIndex =
              action.payload === 'next' ? next_page * pokemons_Per_Page : prev_page * pokemons_Per_Page;
          
            const paginatedPokemons = state.pokemons.slice(newIndex, newIndex + pokemons_Per_Page);
          
            return {
              ...state,
              currentPage: action.payload === 'next' ? next_page : prev_page,
              pokemonsPage: paginatedPokemons,
            };




        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case FILTER_NAME:
            return {
                ...state,
                pokefilter: action.payload,
                loadingPokemons: false,
                filter: true
            }



        case GET_ONE_POKEMON:
            return {
                ...state,
                onePokemon: action.payload,
                loadingDetails: false,
            }
        case LOADING_DETAILS:
            return {
                ...state,
                loadingDetails: action.payload
            }
        case LOADING_POKEMONS:
            return {
                ...state,
                loadingPokemons: action.payload
            }
        case CLOSE_FILTER:
            return {
                ...state,
                filter: action.payload
            }

        default: return { ...state }
    }
}

export default rootReducer;