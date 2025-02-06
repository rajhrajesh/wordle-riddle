import React from 'react';
import { useGame } from '../context/GameContext';

const WordGrid = () => {
  const { attempts } = useGame();

  return (
    <div className="word-grid">
      {attempts.map((attempt, index) => (
        <div key={index} className="word-row">
          {attempt.word.split('').map((letter, i) => (
            <span key={i} className={`letter ${attempt.feedback[i]}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordGrid;
