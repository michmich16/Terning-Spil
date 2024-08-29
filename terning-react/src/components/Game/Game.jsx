import React, { useState } from 'react';
import Dice from '../Dice/Dice';
import s from './Game.module.scss'
import coinImage from '/src/assets/images/coins.png';
import poopImage from '/src/assets/images/poop.png';
import loseSound from '/src/assets/audio/lose.mp3';
import diceRollSound from '/src/assets/audio/diceRoll.mp3';
import highscoreSound from '/src/assets/audio/highscore.mp3';
import winnerSound from '/src/assets/audio/winner.mp3';

const Game = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);
    const [message, setMessage] = useState('');
    const [animation, setAnimation] = useState(null);  // Stater for animation typer. Vind eller tabe
    const [shake, setShake] = useState(false);

    const rollDiceAudio = new Audio(diceRollSound);
    const loseAudio = new Audio(loseSound);
    const highscoreAudio = new Audio(highscoreSound);
    const winnerAudio = new Audio(winnerSound);

    const rollDice = () => {
        rollDiceAudio.play(); //dice rolling sound
        setShake(true);
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
        setTimeout(() => setShake(false), 1000);

        // Check if the total is 12
        if (newDice1 + newDice2 === 12) {
            setMessage('You won! You rolled a total of 12!');
        } else {
            setMessage('Roll again!');
        }
        return newDice1 + newDice2;


    };


    const playAnimation = (type) => {
        setAnimation(type);
        setTimeout(() => setAnimation(null), 60000); //Fjerner animation efter 60000ms = 60 sec
    };

    const higherBtn = () => {
        const newTotal = rollDice();
        console.log('higher clicked', newTotal);

        if (newTotal > total) {
            setMessage(`You won! The total ${newTotal} is higher than the previous total ${total}.`);
            playAnimation('win');
            winnerAudio.play();

        } else if (newTotal == total) {
            setMessage(`Lucky you! it's equal.`)
            playAnimation('win');
            winnerAudio.play();

        } else {
            setMessage(`You lost! The total ${newTotal} is not higher than the previous total ${total}.`);
            playAnimation('lose');
            loseAudio.play();
        }
        setTotal(newTotal);
        setShake(true);
        setTimeout(() => setShake(false), 1000);
    };

    const lowerBtn = () => {
        const newTotal = rollDice();
        console.log('lower clicked', newTotal);

        if (newTotal < total) {
            setMessage(`You won! The total ${newTotal} is lower than the previous total ${total}.`);
            playAnimation('win');
            winnerAudio.play();

        } else if (newTotal == total) {
            setMessage(`Lucky you! it's equal.`)
            playAnimation('win');
            winnerAudio.play();

        } else {
            setMessage(`You lost! The total ${newTotal} is not lower than the previous total ${total}.`);
            playAnimation('lose');
            loseAudio.play();

        }
        setTotal(newTotal);  // Opdaterer total til nye value
        setShake(true);
    };


    return (
        <div className={s.Container}>
            <h1>Dice Game</h1>
            <div className={s.diceContainer} >
                <Dice number={dice1} shake={shake} />
                <Dice number={dice2} shake={shake} />
            </div>
            <button className={s.lowerButtonStyle} onClick={lowerBtn} >
                Lower
            </button>
            <button className={s.rollButtonStyle} onClick={() => setTotal(rollDice())} >
                Roll Dice
            </button>
            <button className={s.higherButtonStyle} onClick={higherBtn} >
                Higher
            </button>
            <h2 className={s.totalStyle}>Total: {total}</h2>
            <h2 className={s.messageStyle}>
                {message.includes('You won') || message.includes('Lucky you') ? (
                    <span className={s.winMessage}>{message}</span>
                ) : (
                    <span className={s.loseMessage}>{message}</span>
                )}
            </h2>
        </div>
    );
};

export default Game;