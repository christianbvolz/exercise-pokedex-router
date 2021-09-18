import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';

class Home extends React.Component {
  render() {
    return (
      <div>
         <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default Home;