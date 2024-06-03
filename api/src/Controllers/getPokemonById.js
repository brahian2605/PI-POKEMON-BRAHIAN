const { Pokemon } = require('../db');
const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (id) => {
  if (isNaN(id)) {
    const response = await Pokemon.findOne({ where: { id } });
    return response
  }
  const res = (await axios.get(`${url}/${id}`)).data
  return {
    id: res.id,
    name: res.name,
    img: res.sprites.other.dream_world.front_default,
    hp: res.stats[0].base_stat,
    attack: res.stats[1].base_stat,
    defense: res.stats[2].base_stat,
    speed: res.stats[5].base_stat,
    height: res.height,
    weight: res.weight,
    types: res.types.map((t) => {
      return {
        name: t.type.name,
      }
    })
  }
}
module.exports = { getPokemonById };