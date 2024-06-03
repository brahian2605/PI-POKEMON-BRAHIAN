  const { Pokemon, Type } = require("../db");
  const axios = require("axios");
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const getPokemonsDb = async () => {
    try {
      const response = await Pokemon.findAll({
        include: {
          attributes: ['name'],
          model: Type,
          through: {
            attributes: [],
          },
        },
      });
      return response;
    } catch (error) {
      console.error("Error fetching Pokémon data from DB:", error);
      return [];
    }
  };



  const getPokemonApi = async () => {
    try {
      let allPokemonsApi = [];
      const infoApi = (await axios.get(`${url}?limit=100`)).data.results;
      const allPokemonsProm = infoApi.map((p) => axios.get(p.url));
  
      const pokemonResponses = await Promise.all(allPokemonsProm);
      allPokemonsApi = pokemonResponses.map((p) => ({
        id: p.data.id,
        name: p.data.name,
        img: p.data.sprites.other.dream_world.front_default, 
        hp: p.data.stats[0].base_stat,
        attack: p.data.stats[1].base_stat,
        defense: p.data.stats[2].base_stat,
        speed: p.data.stats[5].base_stat,
        height: p.data.height,
        weight: p.data.weight,
        types: p.data.types.map((t) => ({
          name: t.type.name,
        })),
      }));
  
      return allPokemonsApi;
    } catch (error) {
      console.error('Error al obtener los Pokémon', error);
      return [];
    }
  };
  

  const getAllPokemons = async () => {
    try {
      const pokemonApi = await getPokemonApi();
      const pokemonDb = await getPokemonsDb();
      return [...pokemonApi, ...pokemonDb];
    } catch (error) {
      console.error("Error fetching all Pokémon data:", error);
      return [];
    }
  };

  const getPokemonByName = async (name) => {
    try {
      // Buscar en la base de datos local
      const pokemonFromDB = await Pokemon.findOne({ where: { name } });
  
      if (pokemonFromDB) {
        return [pokemonFromDB]; // Devolver el Pokémon encontrado en la base de datos
      } else {
        // Si no se encuentra en la base de datos, buscar en la API externa
        const res = (await axios.get(`${url}/${name.toLowerCase()}`)).data;
  
        if (res && res.id) {
          return [{
            id: res.id,
            name: res.name,
            img: res.sprites.other.dream_world.front_default,
            hp: res.stats[0].base_stat,
            attack: res.stats[1].base_stat,
            defense: res.stats[2].base_stat,
            speed: res.stats[5].base_stat,
            height: res.height,
            weight: res.weight,
            types: res.types.map((t) => ({
              name: t.type.name,
            })),
          }];
        } else {
          throw new Error('No se encontró un Pokémon con ese nombre');
        }
      }
    } catch (error) {
      console.error('Error al obtener información del Pokémon:', error.message);
      throw new Error('Error al obtener información del Pokémon');
    }
  };

  module.exports = { getAllPokemons, getPokemonByName };
