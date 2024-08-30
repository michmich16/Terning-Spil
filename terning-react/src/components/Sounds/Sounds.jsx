// src/hooks/useGameSounds.js
import loseSound from '/src/assets/audio/lose.mp3';
import diceRollSound from '/src/assets/audio/diceRoll.mp3';
import winnerSound from '/src/assets/audio/winner.mp3';

const useGameSounds = () => {
    const rollDiceAudio = new Audio(diceRollSound);
    const loseAudio = new Audio(loseSound);
    const winnerAudio = new Audio(winnerSound);

    const playRollDiceSound = () => rollDiceAudio.play();
    const playLoseSound = () => loseAudio.play();
    const playWinnerSound = () => winnerAudio.play();

    return { playRollDiceSound, playLoseSound, playWinnerSound };
};

export default useGameSounds;
