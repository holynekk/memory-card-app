import React from 'react';
import logo from "./../images/logo.png";

function Header(props){
    const {currentScore, highestScore} = props;

    return (
        <header className="head-container">
            <div className="main-header-container">
                <img className="logo" src={logo} alt="logo"/>
                <h1 className="just-header">HearthStone Memory Card Game</h1>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="score-section">
                <p className="score-text left-score">Score: {currentScore}</p>
                <p className="score-text right-score">Hightest Score: {highestScore}</p>
            </div>
            <div className="line"> </div>
            
        </header>
    );
}


export default Header;