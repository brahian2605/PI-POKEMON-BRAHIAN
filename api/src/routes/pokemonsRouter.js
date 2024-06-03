const express = require('express');
const { getAllPokemonsHandler } = require('../Handlers/getAllPokemonsHandler');
const { getPokemonByIdHandler } = require('../Handlers/getPokemonByIdHandler');
const { postPokemonHandler } = require('../Handlers/postPokemonHandler');

const router = express.Router();

router.get('/', getAllPokemonsHandler);
router.get('/:id', getPokemonByIdHandler);
router.post('/', postPokemonHandler);

module.exports = router;
