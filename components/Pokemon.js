import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    return this.props.pokemon.map((pokemon) => (
      <PokemonItem key={pokemon.id} pokemon={pokemon}   />
    ));
  }
}

// PropTypes
Pokemon.propTypes = {
  pokemon: PropTypes.array.isRequired,
  markCaught: PropTypes.func.isRequired
  
}

export default Pokemon;