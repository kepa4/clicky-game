import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Game from './components/Game';
import './App.css';

// a comment
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
