const express = require('express');
const { pokemon, pokemons } = require('../controller/pokemon');
const rotas = express()

rotas.get('/pokemons', pokemons)
rotas.get('/pokemon/:idouNome', pokemon)

module.exports = rotas;