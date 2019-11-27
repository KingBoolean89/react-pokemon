
import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
import PokemonSeenListView from './component/PokemonSeenListView';
import PokemonCaughtListView from './component/PokemonCaughtListView';
import PokemonAddForm from './component/PokemonAddForm';
import axios from 'axios';

import './App.css';

class App extends Component {
	state = {
		pokemon: [],
		seenPokemon : [],
		 caughtPokemon : []
	};

	handlePokemonAddition = (pokemonItem) => {	
		var allPokemon = this.state.seenPokemon.concat([pokemonItem]);
		this.setState({seenPokemon: allPokemon});				
	}

	handleCaughtPokemon = (updatedPokemonItem) => {
			
		var allCaughtPokemon = this.state.caughtPokemon.concat([updatedPokemonItem]);
		var remainingPokemonItems = this.state.seenPokemon.slice();
		var toRemoveIndex = this.state.seenPokemon.map(function(item){
			   if(item.id === updatedPokemonItem.id)
			   {				 
				 return item.id;
			   }
			}.bind(this)).indexOf(updatedPokemonItem.id);
		remainingPokemonItems.splice(toRemoveIndex, 1);
		
		this.setState({seenPokemon : remainingPokemonItems});
		this.setState({caughtPokemon : allCaughtPokemon});
		
	}

	resetForm = () => {
		this.setState({ 
			 seenPokemon : [],
			 caughtPokemon : []
			
			});
		
	  }

	componentDidMount() {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?offset=5&limit=5')
			.then((res) => this.setState({ pokemon: res.data.results }));
	}

	
	
	render() {
		return (
				<div className='App'>
					<div className='container'>
						<React.Fragment>
							<h1>Pokemon List</h1>
							<PokemonAddForm onFormSubmit={this.handlePokemonAddition}/>
							<PokemonSeenListView 
							handleCaughtPokemon={this.handleCaughtPokemon}
							seenPokemon={this.state.seenPokemon}/>
							<PokemonCaughtListView caughtPokemon={this.state.caughtPokemon}/>
							<button 
							id="clear-pokemon-list"
							onClick={this.resetForm}>Clear List</button>
							<br/>
							<br/>
							<Pokemon
							 pokemon={this.state.pokemon}
							 handlePokemonAddition={this.handlePokemonAddition}
							 handleCaughtPokemon={this.handleCaughtPokemon}
							/>
						</React.Fragment>
					</div>
				</div>
		
		);
	}
}

export default App;