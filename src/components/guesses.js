import React from 'react';

export default function Guesses(props){
    const guessList = props.guesses.map((guess, index) => (
        <p key={index}>
        {guess}
        </p>
    ))
    return (
        <div className= "guess-record">
            {guessList}
        </div>
    )
}