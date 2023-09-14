import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StldHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0%;
  display: flex;
  gap: 12px;
  padding: 15px 0;
  background-color: gray;
  user-select: none;
  border-bottom: 1px solid black;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  > nav {
    display: flex;
    margin: 0 auto;
  }
`;

export const StldLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 25px;
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
  user-select: none;
  transition: background-color 0.3s, color 0.3s; /* Добавляем плавный переход */

  &:hover {
    background-color: #1f1f1f; /* Цвет фона при наведении */
    color: gray; /* Цвет текста при наведении */
  }

  &.active {
    color: white;
    background-color: #454545;
  }
`;
