import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchFilmDetInfo } from '../api';
import Nores from 'images/Nores.png';
import {
  ButtonBlock,
  FilmCardCont,
  FilmCardImg,
  NameOfPos,
  StlLink,
  StlLinkRet,
} from './FilmCard.styled';
import Loader from 'components/Loader/Loader';

export const FilmCard = () => {
  const [detailedInfo, setDetailedInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { filmId } = useParams();
  const location = useLocation();
  const backLink = location.state;
  const fromRef = useRef(`${backLink}` ?? '/movies');
  const from = `${backLink}` ?? '/movies';
  const navigate = useNavigate();
  const toReturn = () => navigate(fromRef.current);

  const getDetInfo = async filmId => {
    try {
      const responseDetInfo = await fetchFilmDetInfo(filmId);
      setDetailedInfo(responseDetInfo);
      setIsLoading(false);
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
      <StlLinkRet onClick={toReturn}>←Return</StlLinkRet>
      {isLoading ? (
        <Loader />
      ) : (
        detailedInfo && (
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
        )
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
