export const CLICK = 'Click'
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS"
export const FETCH_POKEMON_PENDING = "FETCH_POKEMON_PENDING"
export const SHOW_POKEMON = "SHOW_POKEMON"
export const CATCH_POKEMON = "CATCH_POKEMON"

export const fetchPokemonSuccess = pokemons => ({
    type: FETCH_POKEMON_SUCCESS,
    pokemons
})

export const fetchPokemonPending = pokemons => ({
    type: FETCH_POKEMON_PENDING
})

export const showPokemonAction = pokemons => {
    const filteredPokemons = pokemons.filter(pokemon => !pokemon.isCatch)
    const max = filteredPokemons.length
    const random = Math.floor(Math.random()*max)
    const onScreen = filteredPokemons[random]
    return dispatch => {
        dispatch({type: SHOW_POKEMON, onScreen})
    }
}

export const catchPokemonAction = () => {
    //il y a 255 pokemons
    const random = Math.floor(Math.random()*255)
    return dispatch => {
        dispatch({type: CATCH_POKEMON, random})
    }
}