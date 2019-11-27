import React, { Component } from 'react'

export class PokemonItemView extends Component {

    state = {
        id : null,
        isCaught : false,
        pokemonText : ""
    }

    onPokemonItemCaught = (e) => {			  
	
        var id = e.target.id;
        var isCaught = !this.props.isCaught;
        var pokemonText    = this.props.pokemonText;
        
        var updatedPokemonItem = {
        id : id,
        isCaught : isCaught,
        pokemonText : pokemonText
        };
        
        this.setState(updatedPokemonItem);
        this.props.handleCaughtPokemon(updatedPokemonItem);			  			 
        this.setState({id : null, isCaught : false, pokemonText : ""});
        return;
      }

    render() {
        return (
            <div>
                <li className="pokemon-item">
					<input onChange={this.onPokemonItemCaught} id={this.props.id} type="checkbox"/> {this.props.pokemonText}
				</li>
            </div>
        )
    }
}

export default PokemonItemView
