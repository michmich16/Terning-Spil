import React, { useState, useEffect } from 'react';
import Dice from '../Dice/Dice'


const RollDiceTest = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [total, setTotal] = useState(2);
    const [message, setMessage] =useState('');

    const checkHigh= () =>{
        if (setTotal > 6) {
            setMessage('You have the highest score!');
        } else {
            setMessage('Your score is...');
        }
    };
     
    

    const rollDice = () => {
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
    };

    // useEffect to update the total whenever dice1 or dice2 changes
    useEffect(() => {
        setTotal(dice1 + dice2);
        setMessage('');
    }, [dice1, dice2]);


  
    

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>React Dice Game</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Dice number={dice1} />
                <Dice number={dice2} />
            </div>
            <button onClick={rollDice} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Roll Dice
            </button>
            <button onClick={checkHigh} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Check High Score
            </button>
            <h2>Total: {total}</h2>
            {message && <h3>{message}</h3>}
        </div>
    );
};

export default RollDiceTest;


