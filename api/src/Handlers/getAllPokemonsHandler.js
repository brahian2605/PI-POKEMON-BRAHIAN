const { getAllPokemons, getPokemonByName } = require('../Controllers/getAllpokemonByApi');

const getAllPokemonsHandler = async (req, res) => {
  const { name } = req.query;  
  try {
    if (name) {
      const response = await getPokemonByName(name);
      return res.status(200).json(response);
    } else {
      const response = await getAllPokemons();
      return res.status(200).json(response);
    }
  }
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }

};

module.exports = { getAllPokemonsHandler };
