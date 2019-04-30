import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Hand from './Hand'
import { connect } from 'react-redux'
import handleStartGame from '../actions/start';
import { handleDraw } from '../actions/draw';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class App extends Component {

  handleDiscard = () => {
    this.props.dispatch(handleDraw(this.props.player1, 1))
    console.log(this.props.player1)
  }

  componentDidMount() {
    this.props.dispatch(handleStartGame())
    window.addEventListener("click", this.handleDiscard)
  }

  render() {
    const { player1, player2, player3, player4 } = this.props
    console.log(this.props)
      return (
      <div className="App">
          <div className='player1'>
            <Hand hand={player1}/>
          </div>
          <div className='player2'>
            <Hand hand={player2}/>
          </div>
          <div className='player3'>
            <Hand hand={player3}/>
          </div>
          <div className='player4'>
            <Hand hand={player4}/>
          </div>
      </div>
    );
  }
}


function mapStateToProps(props){
  const { player1, player2, player3, player4 } = props.hand
  return {
    player1,
    player2,
    player3,
    player4
  }
}


// console.log('prop', props)
// const { player1, player2, player3, player4 } = props.hand
// console.log('Player1', player1)

export default connect(mapStateToProps)(App);
