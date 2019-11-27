import React, { Component } from 'react'
import PokemonCaughtView from '/Users/admin/pokemon/src/component/PokemonCaughtView'

export class PokemonCaughtListView extends Component {

    
    render() {
        var pokemonItems = this.props.caughtPokemon.map(function(item){
            return <PokemonCaughtView v={this} pokemonText={item.pokemonText} key={item.id} isCaught={item.isCaught}/>
          }.bind(this));	
          
      if(pokemonItems.length < 1){
                pokemonItems = [<li className="pokemon-item empty">Pokemon already caught will show here...</li>];
          }
        return (
            <div className="list-container">
				<h3>Caught</h3>
				<ul>
				   {pokemonItems}
				</ul>
			</div>
        )
    }
}

export default PokemonCaughtListView
