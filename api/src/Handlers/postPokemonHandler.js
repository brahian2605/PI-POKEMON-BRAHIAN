const { createPokemon } = require('../Controllers/postPokemon');

const postPokemonHandler = async (req, res) => {
  const { name, img, hp, attack, defense, speed, height, weight, types } = req.body;
  
  try {
    const response = await createPokemon(name, img, hp, attack, defense, speed, height, weight, types);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { postPokemonHandler };
