import React from 'react';
import { useGame } from './context/GameContext';
import DarkModeToggle from './components/DarkModeToggle';
import SoundToggle from './components/SoundToggle';
import WordGrid from './components/WordGrid';
import Keyboard from './components/Keyboard';
import Leaderboard from './components/Leaderboard';
import correctSound from './sounds/correct.wav';
import wrongSound from './sounds/wrong.wav';
import Swal from 'sweetalert2';
import './App.css';

const App = () => {
  const { targetWord, attempts, setAttempts, guess, setGuess, gameOver, setGameOver, soundOn, addScore } = useGame();

  const playSound = (soundFile) => {
    if (soundOn) {
      new Audio(soundFile).play();
    }
  };

  const resetGame = () => {
    setAttempts([]);
    setGuess('');
    setGameOver(false);
  };

  const checkWord = () => {
    if (guess.length !== 5) return alert("Word must be 5 letters!");

    let feedback = guess.split("").map((letter, i) =>
      letter === targetWord[i] ? "green" : targetWord.includes(letter) ? "yellow" : "gray"
    );

    setAttempts([...attempts, { word: guess, feedback }]);

    if (guess === targetWord) {
      setGameOver(true);
      playSound(correctSound);
      Swal.fire({
        icon: 'success',
        title: 'You win!',
        text: `🎉 You win in ${attempts.length + 1} attempts!`,
      });      addScore(attempts.length + 1);
    } else if (attempts.length >= 5) {
      setGameOver(true);
      playSound(wrongSound);
      Swal.fire({
        icon: 'error',
        title: 'Game Over!',
        text: `❌ Game over! The word was: ${targetWord}`,
      });    }

    setGuess("");
};


  return (
    <div className="game-container">
      <h1>Wordle Riddle</h1>
      <DarkModeToggle />
      <SoundToggle />
      <Leaderboard />
      <WordGrid />
      {!gameOver && <Keyboard checkWord={checkWord} />}
      <button className="new-game-btn" onClick={resetGame}>
        🔄 New Game
      </button>
    </div>
  );
};

export default App;
