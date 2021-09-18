import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
         <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
         </nav>
        </header>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/pokemons/:id' component={ PokemonDetails }/>  
          <Route path='/about' component={ About }/>
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;