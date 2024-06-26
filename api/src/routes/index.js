const { Router } = require('express');
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');

const router = Router();

router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

module.exports = router;
