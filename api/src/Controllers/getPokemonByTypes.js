const { Type } = require('../db');
const axios = require('axios');

const getTypes = async () => {
  try {
    const types = (await axios.get('https://pokeapi.co/api/v2/type')).data.results.map((t) => {
      return { name: t.name };
    });

    if (types.length) {
      await Type.bulkCreate(types, { ignoreDuplicates: true });
    }

    return await Type.findAll();
  } catch (error) {
    // Si hay un error al obtener desde la API, intenta obtener desde la base de datos
    console.error('Error al obtener tipos desde la API:', error.message);

    const typesFromDB = await Type.findAll();
    return typesFromDB;
  }
};

module.exports = {
  getTypes
};
