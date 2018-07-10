import React from 'react';
//on click this will reset the game score to 0 and use a new random number
export default function NewGame(props){
    return (
        <p className= "new-game">
           <a href="#" onClick={props.newGame}> + NEW GAME</a>
        </p>
    )
}