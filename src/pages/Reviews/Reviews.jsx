import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPreview } from '../../components/api';
import {
  CardPrev,
  CardPrevDescr,
  ContainerRevie,
  TextRewTitles,
} from './Reviews.styled';

export const Reviews = () => {
  const [filmPrew, setFilmPrew] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    getPreviews(filmId);
  }, [filmId]);

  const getPreviews = async filmId => {
    try {
      const responsePrew = await fetchPreview(filmId);
      setFilmPrew(responsePrew.results);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    } finally {
      console.log('finally');
    }
  };

  return (
    <ContainerRevie>
      {filmPrew.length ? (
        <ul>
          {filmPrew.map((review, id) => (
            <CardPrev key={id}>
              <CardPrevDescr>
                <TextRewTitles>Author:</TextRewTitles> {review.author}
              </CardPrevDescr>
              <CardPrevDescr>
                <TextRewTitles>Preview:</TextRewTitles> {review.content}
              </CardPrevDescr>
            </CardPrev>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ContainerRevie>
  );
};
export default Reviews;
