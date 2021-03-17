import React, { useEffect, useState } from 'react';
import Card from './Card.js';

// All card images
import a from "./../images/blade.png";
import b from "./../images/flame.png";
import c from "./../images/golem.png";
import d from "./../images/help.png";
import e from "./../images/holy.png";
import f from "./../images/leo.png";
import g from "./../images/mirror.png";
import h from "./../images/murlock.png";
import i from "./../images/myra.png";
import j from "./../images/protect.png";
import k from "./../images/reckless.png";
import l from "./../images/sentinel.png";
import m from "./../images/this.png";


function Deck(props){

    const {handleGame, currentScore, highestScore} = props;
    const allCards = [{
        src: a,
        title: 'a',
      },
      {
        src: b,
        title: 'b',
      },
      {
        src: c,
        title: 'c',
      },
      {
        src: d,
        title: 'd',
      },
      {
        src: e,
        title: 'e',
      },
      {
        src: f,
        title: 'f',
      },
      {
        src: g,
        title: 'g',
      },
      {
        src: h,
        title: 'h',
      },
      {
        src: i,
        title: 'i',
      },
      {
        src: j,
        title: 'j',
      },
      {
        src: k,
        title: 'k',
      },
      {
        src: l,
        title: 'l',
      },
      {
        src: m,
        title: 'm',
      },
    ];

    const [cards, setNewCards] = useState(allCards);

    const shuffleDeck = (nwcards) =>{
        for(let i = nwcards.length - 1; i > 0; i--){
            let rndIdx = Math.floor(Math.random() * i);
            [nwcards[rndIdx], nwcards[i]] = [nwcards[i], nwcards[rndIdx]];
        }
    };

    useEffect(()=>{
        const nwcards = [...cards];
        shuffleDeck(nwcards);
        setNewCards(nwcards);
    }, [currentScore, highestScore]);


    return(
        <div className="board">
            {cards.map((card)=>(
                <Card card={card} key={card.title} handleGame={handleGame}/>
            ))}
        </div>
    );
}



export default Deck;


