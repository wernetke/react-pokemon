import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux'

import { CLICK, showPokemonAction, catchPokemonAction } from './store/action'
import fetchPokemons from './store/fetchPokemons'


import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from './components/loader'


const App = ({click, fetchPokemons, pending, showPokemon, pokemons, catchPokemon }) => {
  //faire fetchpokemons au chargement de l'app, et si cette fonction est modifié il se relance
  useEffect(() => {
    fetchPokemons()
  },[fetchPokemons])
  useEffect(() => {
    console.log(pokemons)
  },[pokemons])

  if(pending){
    return <Loader/>
  }
  return (
    <div className="App">
      {click}
      <button onClick={() => click()}>click</button>
      <GameBoy showPokemon={()=> showPokemon(pokemons)} catchPokemon={catchPokemon} />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({ pending, pokemons }) => {
  return{
    pending,
    pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return{
    //dispatch de la fonction fetchPokemons qui elle va dispatcher l'action
    fetchPokemons: () => dispatch(fetchPokemons()),
    click: () => dispatch({ type: CLICK }),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: () => dispatch(catchPokemonAction())

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
