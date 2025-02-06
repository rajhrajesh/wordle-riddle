import React from 'react';
import { useGame } from '../context/GameContext';

const SoundToggle = () => {
  const { soundOn, setSoundOn } = useGame();

  return (
    <button className="toggle-btn" onClick={() => setSoundOn((prev) => !prev)}>
      {soundOn ? '🔊 Sound On' : '🔇 Sound Off'}
    </button>
  );
};

export default SoundToggle;
