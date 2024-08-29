import React, { useState, useEffect } from 'react';
import Dice from '../../components/Dice/Dice';
import s from './RollDiceTest.module.scss'; 
import coinImage from '/src/assets/images/coins.png'; 
import poopImage from '/src/assets/images/poop.png';  
import loseSound from '/src/assets/audio/lose.mp3';  
import diceRollSound from '/src/assets/audio/diceRoll.mp3';
import highscoreSound from '/src/assets/audio/highscore.mp3';
import winnerSound from '/src/assets/audio/winner.mp3';

// Imports foregår her op

const RollDiceTest = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);  
    const [message, setMessage] = useState('');
    const [animation, setAnimation] = useState(null);  // Stater for animation typer. Vind eller tabe
    
    const rollDiceAudio = new Audio(diceRollSound);
    const loseAudio = new Audio(loseSound);
    const highscoreAudio = new Audio(highscoreSound);
    const winnerAudio = new Audio(winnerSound);

    const rollDice = () => {
        rollDiceAudio.play();  //Spiller diceRoll lyd her.
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
        return newDice1 + newDice2;  
    };

    const playAnimation = (type) => {
        setAnimation(type);
        setTimeout(() => setAnimation(null), 4000); //Fjerner animation efter 4000 ms = 4 sec
    };

    const higherBtn = () => {
        const newTotal = rollDice();
        console.log('higher clicked', newTotal);

        if (newTotal > total) {
            setMessage(`You win! The total ${newTotal} is higher than the previous total ${total}.`);
            playAnimation('win');
            winnerAudio.play();  
        } else if (newTotal === total) {
            setMessage('It\'s a tie! The total is the same as the previous roll.');
        } else {
            setMessage(`You lose! The total ${newTotal} is not higher than the previous total ${total}.`);
            playAnimation('lose');
            loseAudio.play();  
        }
        setTotal(newTotal);  // Opdaterer value...

        if (newTotal === 12) {
            highscoreAudio.play();  // Her spiller vi highScore lyd når vi for 12 points!!!
        }
    };

    const lowerBtn = () => {
        const newTotal = rollDice();
        console.log('lower clicked', newTotal);

        if (newTotal < total) {
            setMessage(`You win! The total ${newTotal} is lower than the previous total ${total}.`);
            playAnimation('win');
            winnerAudio.play(); 
        } else if (newTotal === total) {
            setMessage('It\'s a tie! The total is the same as the previous roll.');
        } else {
            setMessage(`You lose! The total ${newTotal} is not lower than the previous total ${total}.`);
            playAnimation('lose');
            loseAudio.play(); 
        }
        setTotal(newTotal);  

        if (newTotal === 12) {
            highscoreAudio.play();  
        }
    };

    return (
        <div className={s.Container}>
            <h1>React Dice Game</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Dice number={dice1} />
                <Dice number={dice2} />
            </div>
            <button onClick={lowerBtn} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', color: 'white', background: 'red', borderRadius: '10px', cursor: 'pointer', border: 'none' }}>
                Lower
            </button>
            <button onClick={() => setTotal(rollDice())} style={{ padding: '10px 20px', fontSize: '16px' , color: 'white', background: 'black', borderRadius: '10px', cursor: 'pointer', border: 'none' }}>
                Roll Dice
            </button>
            <button onClick={higherBtn} style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px', color: 'white', background: 'green', borderRadius: '10px', cursor: 'pointer', border: 'none'}}>
                Higher
            </button>
            <h2 className={s.totalStyle}>Total: {total}</h2>
            <h2>{message}</h2>

            {/* Render animation effects */}
            {animation === 'win' && (
                <div className={s.coinShower}>
                    <img src={coinImage} alt="Coins" className={s.coin} />
                </div>
            )}
            {animation === 'lose' && (
                <div className={s.poopShower}>
                    <img src={poopImage} alt="Poop" className={s.poop} />
                </div>
            )}
        </div>
    );
};

export default RollDiceTest;
