import React from 'react';
import './CirkularProgBar.css';

const CircularProgressBar = ({ progress, size }) => {
  const radius = size / 2.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="circular-progress"
      style={{
        width: size,
        height: size,

        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    >
      <svg className="circular-progress-svg" width={size} height={size}>
        <circle
          className="circular-progress-circle"
          r={radius}
          cx="50%"
          cy="50%"
          stroke="#1A1A1A"
          strokeWidth="9"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
