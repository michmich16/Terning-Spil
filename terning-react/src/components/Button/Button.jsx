import { useState } from 'react';
import RollDiceTest from '../RollDiceTest/RollDiceTest';
import s from './Button.module.scss'

export const Button = () =>{

    
   function lowerBtn(){
        console.log('player clicked lower')
        
    }

    function equalBtn(){
        console.log('player clicked equal')
        
    }

 


    return (
        <div className={s.buttonStyle}>
            {/* <button onClick={lowerBtn} className={s.button}>Lower</button>
            <button onClick={equalBtn} className={s.button}>Equal</button>
            <button onClick={higherBtn} className={s.button}>Higher</button> */}
        </div>
    )
}