import React, { useState } from 'react';
import Dice from '../../components/Dice/Dice';
import s from './RollDiceTest.module.scss'

const RollDiceTest = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);  
    const [message, setMessage] = useState('');
    const [shake, setShake] =useState(false);

    const rollDice = () => {
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
        setShake(true);
        setTimeout(() => setShake(false), 1000);
        return newDice1 + newDice2;  
    };

    const higherBtn = () => {
        const newTotal = rollDice();
        console.log('higher clicked', newTotal);

        if (newTotal > total) {
            setMessage(`You won! The total ${newTotal} is higher than the previous total ${total}.`);
        } else if (newTotal === total) {
            setMessage('It\'s a tie! The total is the same as the previous roll.');
        } else {
            setMessage(`You lost! The total ${newTotal} is not higher than the previous total ${total}.`);
        }
        setTotal(newTotal);  
        setShake(true);
        setTimeout(() => setShake(false), 1000);
    };

    const lowerBtn = () => {
        const newTotal = rollDice();
        console.log('lower clicked', newTotal);

        if (newTotal < total) {
            setMessage(`You win! The total ${newTotal} is lower than the previous total ${total}.`);
        } else if (newTotal === total) {
            setMessage('It\'s a tie! The total is the same as the previous roll.');
        } else {
            setMessage(`You lose! The total ${newTotal} is not lower than the previous total ${total}.`);
        }
        setTotal(newTotal);  // Opdaterer total til nye value
        setShake(true);
    };

    return (
        <div className={s.Container}>
            <h1>React Dice Game</h1>
            <div className={s.diceContainer} >
                <Dice number={dice1} shake={shake}/>
                <Dice number={dice2} shake={shake}/>
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
            <h2>{message}</h2> 
        </div>
    );
};

export default RollDiceTest;