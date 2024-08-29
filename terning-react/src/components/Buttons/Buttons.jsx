import React from 'react';
import s from './Buttons.module.scss';

const Buttons = ({ onLower, onRoll, onHigher }) => {
    return (
        <div className={s.buttonsContainer}>
            <button className={s.lowerButtonStyle} onClick={onLower} >
                Lower
            </button>
            <button className={s.rollButtonStyle} onClick={onRoll} >
                Roll Dice
            </button>
            <button className={s.higherButtonStyle} onClick={onHigher} >
                Higher
            </button>
        </div>
    );
};

export default Buttons;