import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StldHeader = styled.header`
  width: 100%;
  left: 0px;
  top: 0%;
  display: flex;
  gap: 12px;
  padding: 15px 0;
  background-color: gray;
  user-select: none;
  border-bottom: 1px solid black;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: fixed;

  > nav {
    display: flex;
    margin: 0 auto;
    padding: 20px;
  }
`;

export const PosButtonsNotJump = styled.div`
  position: absolute;
  left: 650px;
  top: 20px;
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
