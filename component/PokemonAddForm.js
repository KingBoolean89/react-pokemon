import React, { Component } from 'react';
import uuid from 'uuid';

export class PokemonAddForm extends Component {

    state = {
        id : uuid,
        isCaught : false,
        pokemonText : ""
    }

     guid = ()  => {
        var s4 = function() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };

    onChange = (e)  => {
        this.setState({
          pokemonText : e.target.value,
          isCaught : false,
          id : uuid
        });
      }

      handleSubmit = (e) => {	
        e.preventDefault();
            this.props.onFormSubmit(this.state);
        this.setState({ 
              pokemonText: '',
              id : null, 
              isCaught : false
          });
        
        }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input ref="itemText" 
                    onChange={this.onChange} 
                    value={this.state.pokemonText} 
                    type="text" 
                    id="grocery-item-text" 
                    placeholder="Add a Pokemon..." /> 
					<button type="submit">Add</button>
				</form>
            </div>
        )
    }
}

export default PokemonAddForm
