
const { Router } = require('express');
const { getTypesHandler } = require('../Handlers/getPokemonTypesHandler.js');

const typeRouter = Router();

typeRouter.get('/', getTypesHandler);

module.exports = typeRouter;
