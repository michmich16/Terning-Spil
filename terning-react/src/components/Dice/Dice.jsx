import s from './Dice.module.scss';
import dice1 from '../../assets/images/dice1.svg'
import dice2 from '../../assets/images/dice2.svg'
import dice3 from '../../assets/images/dice3.svg'
import dice4 from '../../assets/images/dice4.svg'
import dice5 from '../../assets/images/dice5.svg'
import dice6 from '../../assets/images/dice6.svg'

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = ({number}) =>{
    return (
        <img className={s.dice_shaking} src={diceImages[number -1]} alt={`Dice${number}`} />
    );
};

export default Dice;