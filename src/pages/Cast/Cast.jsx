import React, { useEffect } from 'react';
import { fetchActors } from 'components/api';
import Nores from 'images/Nores.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CardActors,
  ContainerCast,
  ImgAct,
  ListAct,
  TextCastPos,
} from './Cast.styled';

export const Cast = () => {
  const [filmActors, setFilmActors] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    const getActors = async filmId => {
      try {
        const responseActors = await fetchActors(filmId);
        setFilmActors(responseActors.cast);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      } finally {
        console.log('finally');
      }
    };
    getActors(filmId);
  }, [filmId]);

  return (
    <ContainerCast>
      <ListAct>
        {filmActors.map((cast, id) => (
          <CardActors key={id}>
            <ImgAct
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : Nores
              }
              width={200}
              alt={cast.name}
            />
            <TextCastPos>
              <span>Name: {cast.name}</span>
              <br />
              <span>Character: {cast.character}</span>
            </TextCastPos>
          </CardActors>
        ))}
      </ListAct>
    </ContainerCast>
  );
};

export default Cast;
