import React from 'react';


function Card(props){
    const {card: {src, title}, handleGame} = props;


    return (
        <button
            className="card card-button"
            onClick={handleGame.bind(this, title)}
        >
            <figure>
                <img className="card" src={src} alt={title} />
            </figure>

        </button>
    );
}

export default Card;