import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PokemonItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    }
  }

  render() {
    const { id, name } = this.props.pokemon;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" 
          handleCaughtPokemon={this.props.handleCaughtPokemon}
          handlePokemonAddition={this.handlePokemonAddition}
          /> {' '}
          { name }      
        </p>
      </div>
    )
  }
}

// PropTypes
PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default PokemonItem