import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilmDetInfo } from '../api';
import Nores from 'images/Nores.png';
import {
  ButtonBlock,
  FilmCardCont,
  FilmCardImg,
  NameOfPos,
  StlLink,
} from './FilmCard.styled';

export const FilmCard = () => {
  const [detailedInfo, setDetailedInfo] = useState(null);

  const { filmId } = useParams();
  const location = useLocation();
  const from = location.state?.from ?? '/movies';

  const getDetInfo = async filmId => {
    try {
      const responseDetInfo = await fetchFilmDetInfo(filmId);
      setDetailedInfo(responseDetInfo);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  useEffect(() => {
    if (filmId) {
      getDetInfo(filmId);
    }
  }, [filmId]);

  return (
    <div className="film-card">
      {detailedInfo && (
        <FilmCardCont>
          <div>
            <FilmCardImg
              src={
                detailedInfo.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${detailedInfo.poster_path}`
                  : Nores
              }
              width={250}
              alt={detailedInfo.original_title}
            />
          </div>
          <div>
            <h2>
              <NameOfPos>{detailedInfo.original_title}</NameOfPos>
            </h2>
            <p>
              <NameOfPos>Date: </NameOfPos>
              {new Date(detailedInfo.release_date).getFullYear()}
            </p>
            <p>
              <NameOfPos>Popularity: </NameOfPos>
              {Math.round(detailedInfo.vote_average * 10)}%
            </p>
            <p>
              <NameOfPos>Desription: </NameOfPos> {detailedInfo.overview}
            </p>
            <p>
              <NameOfPos>Genres: </NameOfPos>
              {detailedInfo.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </FilmCardCont>
      )}

      <ButtonBlock>
        <StlLink to="cast" state={{ from }}>
          Cast
        </StlLink>
        <StlLink to="reviews" state={{ from }}>
          Reviews
        </StlLink>
      </ButtonBlock>
      <Outlet />
    </div>
  );
};

export default FilmCard;
