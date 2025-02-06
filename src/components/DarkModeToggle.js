import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useGame();

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') setDarkMode(true);
    else setDarkMode(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [darkMode]);

  return (
    <button className="toggle-btn" onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
