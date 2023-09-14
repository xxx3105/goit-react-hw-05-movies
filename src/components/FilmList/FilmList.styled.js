import styled from 'styled-components';

export const Container = styled.div`
  gap: 24px;
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
  user-select: none;
`;

export const GlobalListOfFilms = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  user-select: none;
`;

export const DescrAnker = styled.span`
  width: 100px;
  height: 200px;

  user-select: none;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

export const DescrHov = styled.div`
  padding: 12px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  z-index: -1;
  width: 165px;
  height: 190px;
  color: white;
  /* left: -82px; */
  left: -82px;
  /* top: -300px; */
  top: -500px;
  user-select: none;
  background-color: black;
  position: absolute;
  overflow: hidden;
  opacity: 0.75;
  text-overflow: ellipsis;
  border-radius: 15px;
  -webkit-line-clamp: 8; /* Ограничение на количество строк */
  -webkit-box-orient: vertical;
  opacity: 0;
  transition: top 0.4s ease-in-out;
`;

export const FilmItemCard = styled.li`
  width: 170px;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding-bottom: 30px;
  border: 2px solid gray;
  background-color: #ebebeb;
  text-align: center;
  border-radius: 15px;
  user-select: none;
  &:hover {
    ${DescrHov} {
      /* left: -82px; */
      z-index: 1;
      opacity: 0.79;
      top: -300px;
    }
  }
`;

///////////////
export const FilmItemImg = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 167px;
  height: 220px;
  user-select: none;
`;

export const NameOfFilm = styled.p`
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;

  width: 155px;
  height: 65px;
  color: #1a1a1a;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  text-decoration: none !important;
  user-select: none;
  font-weight: 600;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Ограничение на количество строк */
  -webkit-box-orient: vertical;
`;
