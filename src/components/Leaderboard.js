import React from 'react';
import { useGame } from '../context/GameContext';

const Leaderboard = () => {
    const { scores } = useGame();

    return (
        <div className="leaderboard">
            <h2>🏆 Top 3 Scores</h2>
            <ul>
                {scores.length === 0 ? (
                    <li>No scores yet</li>
                ) : (
                    scores.map((score, index) => (
                        <li key={index}>🔥 {score} attempts</li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Leaderboard;
