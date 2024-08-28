import s from './Button.module.scss'
import RollDiceTest from '../RollDiceTest/RollDiceTest'

function higher(){
  
}

export const Button = (props) =>{
    return (
        <div className={s.buttonStyle}>
            <button onClick={higher}className={s.button}>{props.buttonText}</button>
        </div>
    )
}