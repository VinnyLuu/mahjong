import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Hand from './Hand'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

class App extends Component {
  state = {
    player1: [],
    player2: [],
    player3: [],
    player4: []
  }

  importAll = (r) => {
    let images = [];
    r.keys().map((item, index) => { images.push(r(item)); });
    return images;
  }

  bamboo = this.importAll(require.context('../assets/bamboo', false, /\.(png|jpe?g|svg)$/));
  dragons = this.importAll(require.context('../assets/dragons', false, /\.(png|jpe?g|svg)$/));
  man = this.importAll(require.context('../assets/man', false, /\.(png|jpe?g|svg)$/));
  pin = this.importAll(require.context('../assets/pin', false, /\.(png|jpe?g|svg)$/));
  redDoras = this.importAll(require.context('../assets/red-doras', false, /\.(png|jpe?g|svg)$/));
  winds = this.importAll(require.context('../assets/winds', false, /\.(png|jpe?g|svg)$/));

  allTiles = [...this.bamboo, ...this.dragons, ...this.man, ...this.pin, ...this.winds,
    ...this.bamboo, ...this.dragons, ...this.man, ...this.pin, ...this.winds,
    ...this.bamboo, ...this.dragons, ...this.man, ...this.pin, ...this.winds,
    ...this.bamboo, ...this.dragons, ...this.man, ...this.pin, ...this.winds]

  generateHand = () => {
    let hand = []
    for (let i = 0; i < 12; i++) {
      hand.push(this.getRandomTile())
    }
    return hand
  }

  getRandomTile = () => {
    let randomInt = getRandomInt(0, this.allTiles.length)
    let randomTile = this.allTiles[randomInt]
    this.allTiles.pop(randomInt)
    return randomTile;
  };
  get randomTile() {
    return this._randomTile;
  }
  set randomTile(value) {
    this._randomTile = value;
  }

  componentDidMount() {
    let player1 = this.generateHand();
    let player2 = this.generateHand();
    let player3 = this.generateHand();
    let player4 = this.generateHand();
    this.setState(() => ({
      player1,
      player2,
      player3,
      player4
    }))
  }

  render() {
      return (
      <div className="App">
          <div className='player1'>
            <Hand hand={this.state.player1}/>
          </div>
          <div className='player2'>
            <Hand hand={this.state.player2}/>
          </div>
          <div className='player3'>
            <Hand hand={this.state.player3}/>
          </div>
          <div className='player4'>
            <Hand hand={this.state.player4}/>
          </div>
      </div>
    );
  }
}

export default App;
