import React, { useState } from 'react';
import Dice from '../Dice/Dice';
import Buttons from '../Buttons/Buttons';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import s from './Game.module.scss';
import loseSound from '/src/assets/audio/lose.mp3';
import diceRollSound from '/src/assets/audio/diceRoll.mp3';
import winnerSound from '/src/assets/audio/winner.mp3';

const Game = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);
    const [message, setMessage] = useState('');
    const [animation, setAnimation] = useState(null);  
    const [shake, setShake] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const { width, height } = useWindowSize();
    const rollDiceAudio = new Audio(diceRollSound);
    const loseAudio = new Audio(loseSound);
    const winnerAudio = new Audio(winnerSound);

    const rollDice = () => {
        setShake(true);
        const newDice1 = Math.floor(Math.random() * 6) + 1;  //pick random 1-6 dice face
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
        setTimeout(() => setShake(false), 1000);

        return newDice1 + newDice2;
    };

    const playAnimation = (type) => {
        setAnimation(type);
        setTimeout(() => setAnimation(null), 60000);
    };

    const higherBtn = () => {
        rollDiceAudio.play();
        const newTotal = rollDice();
        console.log('higher clicked', newTotal);

        if (newTotal > total) {
            setMessage(`You won! The total ${newTotal} is higher than the previous total ${total}.`);
            playAnimation('win');
            winnerAudio.play();
            setShowConfetti(true);
            console.log('you won with high')
        } else if (newTotal === total) {
            setMessage(`Lucky you! ${total} is equal to ${newTotal}`);
            playAnimation('win');
            winnerAudio.play();
            setShowConfetti(true);
        } else {
            setMessage(`You lost! The total ${newTotal} is not higher than the previous total ${total}.`);
            playAnimation('lose');
            loseAudio.play();
            setShowConfetti(false);
        }
        setTotal(newTotal);
        setShake(true);
        setTimeout(() => setShake(false), 1000);
    };

    const middleBtn = () => {
        const newTotal = rollDice();
        if (newTotal === 12) {
            setMessage('You won the bonus! You rolled a 12!');
            playAnimation('win');
            setShowConfetti(true);  // Show confetti on win
            winnerAudio.play();
        } else {
            setMessage("You lost! Shouldn't have taken the risk!");
            playAnimation('lose');
            loseAudio.play();
            setShowConfetti(false);  // Hide confetti on loss
        }
        setTotal(newTotal);
        setShake(true);
        setTimeout(() => setShake(false), 1000);
    };

    const lowerBtn = () => {
        rollDiceAudio.play();
        const newTotal = rollDice();
        console.log('lower clicked', newTotal);

        if (newTotal < total) {
            setMessage(`You won! The total ${newTotal} is lower than the previous total ${total}.`);
            playAnimation('win');
            winnerAudio.play();
            setShowConfetti(true);
            console.log('you won with low')
        } else if (newTotal === total) {
            setMessage(`Lucky you! ${total} is equal to ${newTotal}`);
            playAnimation('win');
            winnerAudio.play();
            setShowConfetti(true);
        } else {
            setMessage(`You lost! The total ${newTotal} is not lower than the previous total ${total}.`);
            playAnimation('lose');
            loseAudio.play();
            setShowConfetti(false);
        }
        setTotal(newTotal);
        setShake(true);
    };

    return (
        <div className={s.Container}>
            {showConfetti && <Confetti width={width} height={height} />}
            <h1>Dice Game</h1>
            <div className={s.diceContainer}>
                <Dice number={dice1} shake={shake} />
                <Dice number={dice2} shake={shake} />
            </div>
            <h2 className={s.totalStyle}>Total: {total}</h2>
            <h2 className={s.messageStyle}>
                {message.includes('You won') || message.includes('Lucky you') ? (
                    <span className={s.winMessage}>{message}</span>
                    ) : (
                        <span className={s.loseMessage}>{message}</span>
                        )}
            </h2>
            <Buttons 
                onLower={lowerBtn} 
                onRoll={middleBtn}
                onHigher={higherBtn} 
            />
        </div>
    );
};

export default Game;
