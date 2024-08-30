import React, { useState } from 'react';
import Dice from '../Dice/Dice';
import Buttons from '../Buttons/Buttons';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import s from './Game.module.scss';
import useDiceRoll from '../DiceRoll/DiceRoll';
import useGameSounds from '../Sounds/Sounds';
import useAnimation from '../Animation/Animation';

const Game = () => {
    const { dice1, dice2, rollDice, shake } = useDiceRoll();
    const { playRollDiceSound, playLoseSound, playWinnerSound } = useGameSounds();
    const { animation, playAnimation } = useAnimation();

    const [total, setTotal] = useState(2);
    const [message, setMessage] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();

    const higherBtn = () => {
        playRollDiceSound();
        const newTotal = rollDice();

        if (newTotal > total) {
            setMessage(`You won! The total ${newTotal} is higher than the previous total ${total}.`);
            playAnimation('win');
            playWinnerSound();
        } else if (newTotal === total) {
            setMessage(`Lucky you! ${total} is equal to ${newTotal}`);
            playAnimation('win');
            playWinnerSound();
        } else {
            setMessage(`You lost! The total ${newTotal} is not higher than the previous total ${total}.`);
            playAnimation('lose');
            playLoseSound();
        }

        setTotal(newTotal);
    };

    const middleBtn = () => {
        const newTotal = rollDice();
        if (newTotal === 12) {
            setMessage('You won the bonus! You rolled a 12!');
            playAnimation('win');
            setShowConfetti(true);
            playWinnerSound();
        } else {
            setMessage("You lost! Shouldn't have taken the risk!");
            playAnimation('lose');
            playLoseSound();
            setShowConfetti(false);
        }
        setTotal(newTotal);
    };

    const lowerBtn = () => {
        playRollDiceSound();
        const newTotal = rollDice();

        if (newTotal < total) {
            setMessage(`You won! The total ${newTotal} is lower than the previous total ${total}.`);
            playAnimation('win');
            playWinnerSound();
        } else if (newTotal === total) {
            setMessage(`Lucky you! ${total} is equal to ${newTotal}`);
            playAnimation('win');
            playWinnerSound();
        } else {
            setMessage(`You lost! The total ${newTotal} is not lower than the previous total ${total}.`);
            playAnimation('lose');
            playLoseSound();
        }

        setTotal(newTotal);
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
