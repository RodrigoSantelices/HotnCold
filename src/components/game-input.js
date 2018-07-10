import React from 'react';

export default function GameInput(props){
    return (
        <form id="input-clear"className= "game-input" onSubmit={props.makeGuess}>
            <input id="answer" type="text" className="text-input" maxLength="3" placeholder="Enter your Guess" required/>
            <input type="submit" className="submit-input" value="Guess"/>
        </form>
    )
}