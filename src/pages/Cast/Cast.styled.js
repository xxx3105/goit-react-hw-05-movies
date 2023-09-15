import styled from 'styled-components';

export const ContainerCast = styled.div`
  width: 700px;
  height: auto;
  margin: 0 auto;
`;

export const CardActors = styled.li`
  width: 150px;
  height: 320px;
  border-radius: 15px;
  background-color: #e3e3e3;
  margin-bottom: 15px;
  margin-top: 25px;
  margin-left: 15px;
  text-align: center;
`;

export const ImgAct = styled.img`
  width: 150px;
  height: 230px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 1px solid #1a1a1a;
`;

export const ListAct = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TextCastPos = styled.div`
  margin-top: 18px;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
`;
