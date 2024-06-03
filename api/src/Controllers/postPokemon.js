const { Pokemon, Type } = require('../db');

const createPokemon = async (name, img, hp, attack, defense, speed, height, weight, types = []) => {
  if (!name || !img || !hp || !attack || !defense) {
    throw Error('Campos obligatorios están vacíos');
  }

  const pokemon = await Pokemon.create({ name, img, hp, attack, defense, speed, height, weight });

  console.log('Tipos recibidos:', types);

  for (const typeObj of types) {
    const typeName = typeObj.name;
    console.log('Buscando tipo:', typeName);
    const typeRecord = await Type.findOne({ where: { name: typeName } });
    if (!typeRecord) {
      console.log('Tipo no encontrado, creando uno nuevo:', typeName);
      // Si el tipo no existe, créalo antes de asociarlo al Pokémon
      const newType = await Type.create({ name: typeName });
      await pokemon.addType(newType);
    } else {
      console.log('Tipo encontrado en la base de datos:', typeName);
      await pokemon.addType(typeRecord);
    }
  }

  return pokemon;
};

module.exports = { createPokemon };