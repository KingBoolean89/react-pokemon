import React, { Component } from 'react'

export class PokemonCaughtView extends Component {
    render() {
        return (
             <li className="pokemon-item purchased">{this.props.pokemonText}</li>
        )
    }
}
export default PokemonCaughtView
