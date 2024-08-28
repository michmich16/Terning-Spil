import s from './Button.module.scss'

export const Button = (props) =>{
    return (
        <div className={s.buttonStyle}>
            <button className={s.button}>{props.buttonText}</button>
        </div>
    )
}