import React from 'react';

export default function GameGuide(props){
    return (
        <h2 className= "game-guide" >
            {props.feedback}
        </h2>
    )
}