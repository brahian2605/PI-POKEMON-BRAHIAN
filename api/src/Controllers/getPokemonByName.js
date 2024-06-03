// const axios = require("axios");
// const { Pokemon, Type } = require('../db');
// const url = "https://pokeapi.co/api/v2/pokemon/";

// const getPokemonByName = async (name) => {
//   let pokemons = [];

//   if (!name) throw new Error('PLEASE ENTER A VALID NAME');

//     name = name.toLowerCase();

//   try {
//     const pokemonCreated = await Pokemon.findAll({
//       where: {
//         name: name,
//       },
//       include: {
//         model: Type,
//         attributes: {
//           exclude: ["id"],
//         },
//         through: {
//           attributes: [],
//         },
//       },
//     });

//     if (pokemonCreated.length) return pokemonCreated;

//     const { data } = await axios(url + name);

//     const pokemonName = {
//       id: data.id,
//       name: data.name,
//       image: data.sprites.other.home.front_default,
//       hp: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
//       attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
//       defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
//       speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
//       height: data.height,
//       weight: data.weight,
//       types: data.types.map((type) => type.type.name),
//     };

//     return pokemonName;
//   } catch (error) {
//     if(pokemons.length === 0 && !pokemonName) throw new Error("POKEMON NOT FOUND");
//   }
// };

// module.exports = { getPokemonByName };
