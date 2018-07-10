import React from 'react';
/*on click this will open up an orange screen with the instructions */
export default function GameRules(props) {
    let showDiv;
    if(props.showGameRules){
        showDiv= ( 
        <div className="red-box">
        What do I do?
        This is a Hot or Cold Number Guessing Game. The game goes like this:

1. I pick a random secret number between 1 to 100 and keep it hidden.
2. You need to guess until you can find the hidden secret number.
3. You will get feedback on how close ("hot") or far ("cold") your guess is.
So, Are you ready?

<button onClick={props.showRules}> Got It </button>
    </div>)
    }

    return (
        <div className= "game-rules">
        <p className="rule-check">
           <a href="#" onClick={props.showRules}> WHAT?</a>
        </p>
        {showDiv}
        </div>
    );
}