import React, { useState } from 'react';
import Dice from '../../components/Dice/Dice';

const RollDiceTest = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);
    const [message, setMessage] = useState('');

    const rollDice = () => {
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
        return newDice1 + newDice2;  
    };

    function higherBtn() {
        const newTotal = rollDice();
        console.log('higher clicked', newTotal);

        if (newTotal > 6) {
            setMessage('You win! The total is higher than 6.');
        } else {
            setMessage('You lose! The total is not higher than 6.');
        }
        setTotal(newTotal);
        
    };

    // rollDice Function: Now returns the sum of the dice after setting them.
// higherBtn and lowerBtn Functions: Use the total calculated after calling rollDice() rather than the stale state values.

    function lowerBtn() {
        const newTotal = rollDice();
        console.log('lower clicked', newTotal);

        if (newTotal < 6) {
            setMessage('You win! The total is lower than 6.');
        } else {
            setMessage('You lose! The total is not lower than 6.');
        }
        setTotal(newTotal);
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
