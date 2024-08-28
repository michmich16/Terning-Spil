import React, { useState } from 'react';
import Dice from '../../components/Dice/Dice';

const RollDiceTest = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);  // Set til 2 total (mindste tal man kan få)
    const [message, setMessage] = useState('');

    const rollDice = () => {
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
        return newDice1 + newDice2;  
    };

    const higherBtn = () => {
        const newTotal = rollDice();
        console.log('higher clicked', newTotal);

        if (newTotal > total) {
            setMessage(`You win! The total ${newTotal} is higher than the previous total ${total}.`);
        } else if (newTotal === total) {
            setMessage('It\'s a tie! The total is the same as the previous roll.');
        } else {
            setMessage(`You lose! The total ${newTotal} is not higher than the previous total ${total}.`);
        }
        setTotal(newTotal);  // Opdaterer total til nye value
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
            <button onClick={() => setTotal(rollDice())} style={{ padding: '10px 20px', fontSize: '16px' }}>
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