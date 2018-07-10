import React, { Component } from 'react';
import './game-board.css';
import logo from '../logo.svg';
import GameRules from './game-rules';
import NewGame from './new-game';
import GameGuide from './game-guide';
import GameInput from './game-input';
import GuessNum from './guess-num'
import Guesses from './guesses';

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showGameRules: false,
        guessNum: Math.floor(Math.random()*100),
        guesses: [],
        feedback: "Make your Guess"
    }
  }
  newGame(){
    this.setState({
      showGameRules: false,
        guessNum: Math.floor(Math.random()*100),
        guesses: [],
        feedback: "Make Your Guess",
        newGuess:""
    })
  }
  makeGuess(event){
    event.preventDefault();
    let newGuess= document.getElementById('answer').value;
    this.state.guesses.push(newGuess);
    let distance = Math.abs(newGuess - this.state.guessNum);
    let feedback
    if(distance > 40){
      feedback = "Very Cold"
    }
    else if (distance > 30){
      feedback= "Cold"
    }
    
    else if (distance > 20){
      feedback= "Kind of Warm"
    }
    else if (distance > 10){
      feedback= "Warmer"
    }
    else if (distance > 0){
      feedback= "Hot"
    }
    else if (distance == 0){
      feedback= "YOU GOT IT"
    }
    this.setState({
      guesses:this.state.guesses,
      feedback: feedback,
      
    })

  }


  //toggle function
  showRules(){
    this.setState({
      showGameRules: !this.state.showGameRules
    })
console.log("showing rules");
  }
  render() {
    return (
      <div className="full-screen">
        <header className="Game-header">
        <GameRules showGameRules={this.state.showGameRules} showRules={e=>this.showRules()}/>
        <NewGame newGame={e=>this.newGame()}/>
          <h1 className="game-title">HOT or COLD</h1>
        </header>
        <div className="game-board">
          <GameGuide feedback= {this.state.feedback} />
          <div className="game-content">
          <GameInput makeGuess={e=>this.makeGuess(e)}/>
          <GuessNum guessTotal= {this.state.guesses.length}/>
          </div>
          <div className="game-bottom">
          <Guesses guesses= {this.state.guesses}/>
          </div>

        </div>
      </div>
    );
  }
}


