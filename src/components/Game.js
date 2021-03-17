import React, {useState} from 'react';
import Header from './Header.js';
import Deck from './Deck.js';

function Game(){
    const [score, setScore] = useState(0);
    const [highest, setHighest] = useState(0);
    const [cards, addCard] = useState([]);
    
    const handleScore = ()=>{
        setScore((score)=>score+1);
    };

    const handleHighestScore = ()=>{
        setHighest(score);
    };

    const handleCard = (name)=>{
        addCard((prevArr) =>[...prevArr, name]);
    };

    const reset = () => {
        setScore(0);
        addCard([]);
      };

    const handleGame = (name)=>{
        console.log("The current score:");
        console.log(score);
        console.log("The highest score:");
        console.log(highest);
        if (!cards.includes(name)){
            handleCard(name);
            handleScore();
        }else{
            handleHighestScore();
            reset();
        }
    };

    return(
        <>
            <Header currentScore={score} highestScore={highest}/>
            <Deck handleGame={handleGame} currentScore={score} highestScore={highest}/>
        </>
        
    );
}


export default Game;