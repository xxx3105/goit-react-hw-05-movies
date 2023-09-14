import React from 'react';
import './CirkularProgBar.css'; // Файл стилей для кругового индикатора

const CircularProgressBar = ({ progress, size }) => {
  const radius = size / 2.5; // Радиус кругового индикатора
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="circular-progress"
      style={{
        width: size,
        height: size,

        top: '35%', // Расположите по центру вертикально
        left: '50%', // Расположите по центру горизонтально
        transform: 'translate(-50%, -50%)', // Центрируйте по центру экрана
        zIndex: 2, // Установите высокий z-index, чтобы индикатор был поверх других элементов
      }}
    >
      <svg className="circular-progress-svg" width={size} height={size}>
        <circle
          className="circular-progress-circle"
          r={radius}
          cx="50%"
          cy="50%"
          stroke="#1A1A1A" // Цвет индикатора
          strokeWidth="9" // Ширина индикатора
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
