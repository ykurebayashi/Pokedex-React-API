import './App.css';
import React from 'react';
import Header from './components/Header';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPokes: [],
      shouldShow: false,
    }

    this.fetchPokes = this.fetchPokes.bind(this);
  }

  componentDidMount() {
    this.fetchPokes();
  }

  async fetchPokes() {
    let results = [];
    for (let i = 1; i < 152; i += 1) {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((responde) => responde.json())
        .then((data) => {
          const pokemonObject = {
            name: data.name,
            image: data.sprites.other.home.front_default,
            type: data.types[0].type.name,
          }
          results.push(pokemonObject);
        })
    }

    this.setState({
      allPokes: results,
      shouldShow: true,
    })
  };


  render() {
    return (
      <>
        <Header />
        <div className='main-content'>
          {this.state.shouldShow ? <div className='pokedex'><Pokedex allPokes={this.state.allPokes} /></div> : <p className='loading'>Loading...</p>}
        </div>
      </>
    );
  }
}

export default App;