import styled from 'styled-components';

export const ButtonStld = styled.button`
  border-top-right-radius: 15px;
  border: 3px solid gray;
  padding: 11.5px;
  padding-right: 15px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s; /* Добавляем плавный переход */

  &:hover {
    background-color: #1f1f1f; /* Цвет фона при наведении */
    color: gray; /* Цвет текста при наведении */
  }
`;

export const InputSearch = styled.input`
  padding: 10px;
  width: 150px;
  height: 46.2px;
  margin-left: 0;
  border-bottom-left-radius: 15px;
  border: 3px solid gray;
  margin-bottom: 35px;
`;
