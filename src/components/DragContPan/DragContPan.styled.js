import styled from 'styled-components';

export const CurPageNumb = styled.span`
  user-select: none;
  position: absolute;
  left: 49px;
  top: -42px;
  font-size: 16px;
`;

export const TotalPages = styled.span`
  user-select: none;
  position: absolute;
  left: 25px;
  top: -26px;
  font-size: 16px;
`;

export const CurrentProgess = styled.span`
  user-select: none;
  position: absolute;
  left: 39px;
  top: -7px;
  padding: 6px;
  width: 40px;
  height: 38px;
  z-index: 10;
  background-color: #e0e0e0;
  border-radius: 60%;
  border: 2px solid #474747;
`;

export const ContainerPagi = styled.div`
  position: absolute;

  left: 19px;
  top: -4px;
  border: 3px dashed #616161;
  border-radius: 50%;
  width: 107px;
  height: 107px;
`;

export const Hinweise = styled.span`
  user-select: none;
  position: absolute;
  font-size: 10px;
  left: 70px;
  bottom: -20px;
  opacity: 0; /* Устанавливаем начальное значение */
  transition: opacity 0.3s; /* Добавляем плавный переход */

  &:hover {
    //  opacity: 0; /* При наведении устанавливаем opacity в 0 */
  }
`;

export const ButtonPagi = styled.button`
  user-select: none;
  :hover + ${Hinweise} {
    opacity: 1;
    /* При ховере на ButtonPagi показываем Hinweise */
  }
`;

export const ButtonsName = styled.span`
  user-select: none;
  position: absolute;
  left: 30px;
  top: 30px;
  :hover + ${Hinweise} {
    opacity: 1; /* При ховере на ButtonPagi показываем Hinweise */
  }
`;
