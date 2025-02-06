import React, { createContext, useState, useContext, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const words = ['apple', 'grape', 'plane', 'chair', 'table'];
// eslint-disable-next-line
  const [targetWord, setTargetWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [attempts, setAttempts] = useState([]);
  const [guess, setGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("topScores"));
    if (storedScores) {
        setScores(storedScores);
    }
}, []);

  useEffect(() => {
    if (scores.length > 0) {
        localStorage.setItem("topScores", JSON.stringify(scores));
    }
}, [scores]);

const addScore = (attemptsUsed) => {
  const newScores = [...scores, attemptsUsed]
      .sort((a, b) => a - b)
      .slice(0, 3);

  setScores(newScores);
};


  return (
    <GameContext.Provider
      value={{
        targetWord,
        attempts,
        setAttempts,
        guess,
        setGuess,
        gameOver,
        setGameOver,
        darkMode,
        setDarkMode,
        soundOn,
        setSoundOn,
        scores,
        setScores,
        addScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
