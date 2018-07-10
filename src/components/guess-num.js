import React from 'react';

export default function GuessNum(props){
    return (
        <div className= "guess-num">
            Guess # <p className="number">{props.guessTotal}</p>
        </div>
    )
}