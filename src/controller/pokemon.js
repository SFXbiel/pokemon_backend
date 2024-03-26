const {listarPokemons, detalharPokemon} = require('utils-playground');

const pokemons = async (req, res) => {
    const { pagina } = req.query;

    const listarDePokemon = await listarPokemons(pagina ?? 1);

    return res.json(listarDePokemon)
}

const pokemon = async (req, res) => {
    const { idouNome } = req.params;

    const detalhesDePokemon = await detalharPokemon(idouNome)

    const {id, name, heigth, weigth, base_experience, forms, abilities, species} = detalhesDePokemon;
    
    return res.json({id, name, heigth, weigth, base_experience, forms, abilities, species})
}

module.exports = {
    pokemons,
    pokemon
}