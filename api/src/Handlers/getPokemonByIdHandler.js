const { getPokemonById } = require('../Controllers/getPokemonById')

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {    
    const pokeById = await getPokemonById(id);

    return res.status(200).json(pokeById)

  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al obtener los Pokémon.' });
  }
};

module.exports = { getPokemonByIdHandler };
