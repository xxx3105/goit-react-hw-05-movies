import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FilmCardCont = styled.div`
  display: flex;
  gap: 20px;
  background-color: #a3a3a3;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 700px;
  margin: 0 auto;
  border-top: 1px solid #1a1a1a;
  border-right: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
`;

export const FilmCardImg = styled.img`
  max-width: 600px;
  max-height: 400px;
  border-bottom-left-radius: 25px;
  border-left: 1px solid #1a1a1a;
`;

export const ButtonBlock = styled.div`
  margin-left: 320px;
  margin-top: 20px;
`;

export const StlLink = styled(NavLink)`
  color: #1a1a1a;
  font-weight: 600;
  padding: 5px 20px;
  background-color: gray;
  margin-left: 15px;
  border-radius: 5px;
  border: 1px solid #1a1a1a;

  transition: background-color 0.3s, color 0.3s; /* Добавляем плавный переход */

  &:hover {
    background-color: #1f1f1f; /* Цвет фона при наведении */
    color: gray; /* Цвет текста при наведении */
  }
`;

export const NameOfPos = styled.span`
  color: #1a1a1a;
  font-weight: 600;
`;
