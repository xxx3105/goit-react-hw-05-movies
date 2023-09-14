import React, { useState } from 'react';
import '../CirkularProgBar/CirkularProgBar.css'; // Файл стилей для кругового индикатора
import CircularProgressBar from 'components/CirkularProgBar/CirkularProgBar';
import {
  ButtonPagi,
  ButtonsName,
  ContainerPagi,
  CurPageNumb,
  CurrentProgess,
  Hinweise,
  TotalPages,
} from './DragContPan.styled';

export const DraggableWindow = ({
  currentPage,
  numberOfPages,
  pageProgress,
  loadNextPage,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 1200, y: 250 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = e => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = e => {
    if (isDragging) {
      const x = e.clientX - offset.x;
      const y = e.clientY - offset.y;
      setPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const windowSize = 125; // Размер окна перетаскивания
  const progressBarSize = windowSize + 20; // Размер кругового индикатора (больше размера окна)

  return (
    <div
      style={{
        width: '1%',
        height: '1%',
        position: 'absolute',
        top: position.y,
        left: position.x,
        cursor: isDragging ? 'grabbing' : 'grab',
        overflow: 'visible', // Разрешаем видимость контента, выходящего за пределы окна
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          position: 'relative',
          width: progressBarSize,
          height: progressBarSize,
        }}
      >
        {/* Вставляем компонент CircularProgressBar и передаем ему pageProgress */}
        <CircularProgressBar
          progress={pageProgress}
          size={progressBarSize}
          strokeWidth={5}
          style={{
            pointerEvents: 'none', // Делаем индикатор некликабельным
          }}
        />
        <ContainerPagi />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '80%',
            borderBottomLeftRadius: 45,
            borderBottomRightRadius: 45,
            zIndex: 5, // Установите z-index, чтобы элементы были над индикатором
          }}
        >
          <CurPageNumb>{currentPage} </CurPageNumb>

          <TotalPages>from {numberOfPages}</TotalPages>

          <CurrentProgess>
            {pageProgress === Infinity ? 0 : pageProgress}%
          </CurrentProgess>
          <ButtonPagi
            onClick={loadNextPage}
            style={{
              width: 105,
              height: 25,
              borderBottomLeftRadius: 90,
              borderBottomRightRadius: 90,
              fontSize: 14,
              paddingBottom: 45,
            }}
          >
            <ButtonsName>Next Page</ButtonsName>
            <Hinweise>*draggable </Hinweise>
          </ButtonPagi>
        </div>
      </div>
    </div>
  );
};

export default DraggableWindow;
