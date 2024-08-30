// src/hooks/useDiceRoll.js
import { useState } from 'react';

const useDiceRoll = () => {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [shake, setShake] = useState(false);

    const rollDice = () => {
        setShake(true);
        const newDice1 = Math.floor(Math.random() * 6) + 1;
        const newDice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(newDice1);
        setDice2(newDice2);
        setTimeout(() => setShake(false), 1000);

        return newDice1 + newDice2;
    };

    return { dice1, dice2, rollDice, shake };
};

export default useDiceRoll;
