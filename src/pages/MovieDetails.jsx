import React, { useState, useEffect } from 'react';
import { fetchFilmDetInfo } from '../components/api';
import FilmCard from '../components/FilmCard/FilmCard';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const MovieDetails = ({ filmId }) => {
  const [showActors, setShowActors] = useState(false);
  const [showPrew, setShowPrew] = useState(false);
  const [detailedInfo, setDetailedInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getDetInfo = async filmId => {
      try {
        const responseDetInfo = await fetchFilmDetInfo(filmId);
        setDetailedInfo(responseDetInfo);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };
    if (filmId) {
      getDetInfo(filmId);
    }
  }, [filmId]);

  return (
    <Link to={`/movies/${filmId}`} state={{ from: location }}>
      <FilmCard
        detailedInfo={detailedInfo}
        showActors={showActors}
        setShowActors={setShowActors}
        showPrew={showPrew}
        setShowPrew={setShowPrew}
        filmId={filmId}
      />
    </Link>
  );
};
