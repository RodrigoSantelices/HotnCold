import React from 'react';

export default function Guesses(props){
    return (
        <div className= "guess-record">
            {props.guesses}
        </div>
    )
}