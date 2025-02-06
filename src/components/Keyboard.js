import React from 'react';
import { useGame } from '../context/GameContext';

const Keyboard = ({ checkWord }) => {
  const { setGuess } = useGame();
  const letters = 'qwertyuiopasdfghjklzxcvbnm'.split('');

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => setGuess((prev) => (prev.length < 5 ? prev + letter : prev))}
        >
          {letter}
        </button>
      ))}
      <button onClick={checkWord}>ENT</button>
      <button onClick={() => setGuess('')}>CLR</button>
    </div>
  );
};

export default Keyboard;
