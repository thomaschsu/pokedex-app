import React from 'react';
import Pokedex from './Pokedex'
import './App.css';
import './Pokedex.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    )
  }
}

export default App;
