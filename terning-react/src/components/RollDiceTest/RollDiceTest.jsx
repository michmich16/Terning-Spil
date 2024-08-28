import React, { useState, useEffect } from 'react';
import Dice from '../../components/Dice/Dice';

const RollDiceTest = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);
    const [message, setMessage] = useState('')

    const rollDice = () => {
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);

        if (newDice1==6 && newDice2==6) {
            setMessage('You win! You got two 6s!');
        } else {
            setMessage('Roll again!');
        }
    };

    // useEffect to update the total whenever dice1 or dice2 changes
    useEffect(() => {
        setTotal(dice1 + dice2);
        setMessage(message)
    }, [dice1, dice2]);



    function higherBtn() {
        rollDice();
        console.log('higher clicked');

        if (dice1 + dice2 < 6) {
            setMessage('You win! The total is higher than 6.');
        } else {
            setMessage('You lose! The total is not higher than 6.');
        }
    };

    function lowerBtn() {
        rollDice();
        console.log('lower clicked');

        if (dice1 + dice2 > 6) {
            setMessage('You win! The total is lower than 6.');
        } else {
            setMessage('You lose! The total is not lower than 6.');
        }
    };

    

    return (
        <div style={{ textAlign: 'center' }}>
        <h1>React Dice Game</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Dice number={dice1} />
            <Dice number={dice2} />
        </div>
        <button onClick={lowerBtn} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}>
            Lower
        </button>
        <button onClick={rollDice} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Roll Dice
        </button>
        <button onClick={higherBtn} style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}>
            Higher
        </button>
        <h2>Total: {total}</h2>
        <h2>{message}</h2>
    </div>
    );
};

export default RollDiceTest;


