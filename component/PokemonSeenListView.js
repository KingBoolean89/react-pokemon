import React, { Component } from 'react'
import PokemonItemView from '/Users/admin/pokemon/src/component/PokemonItemView'

class PokemonSeenListView extends Component {
    
    render() {

        var pokemonItems = this.props.seenPokemon.map(function(item){
            return <PokemonItemView
            handleCaughtPokemon={this.props.handleCaughtPokemon} 
             id={item.id} pokemonText={item.pokemonText} key={item.id} 
             isCaught={item.isCaught}/>
          }.bind(this));			
           
       if(pokemonItems.length < 1){
                pokemonItems = [<li className="pokemon-item empty">Seen Pokemon...</li>];
          }
        return (
           
                <div className="list-container">
				<h3>Seen</h3>
				<ul>
				   {pokemonItems}
				</ul>
			
            </div>
        )
    }
}

export default PokemonSeenListView
