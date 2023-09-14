import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPreview } from '../components/api';

export const Reviews = () => {
  const [filmPrew, setFilmPrew] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const { filmIdReviews } = useParams();
  const { filmId } = useParams();

  useEffect(() => {
    getPreviews(filmId);
  }, [filmId]);

  console.log(filmId);

  const getPreviews = async filmId => {
    console.log(filmId);
    try {
      const responsePrew = await fetchPreview(filmId);
      console.log(responsePrew);
      setFilmPrew(responsePrew.results);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    } finally {
      //setIsLoading(false);
      console.log('finally');
    }
  };

  return (
    <div>
      {filmPrew.length ? (
        <ul>
          {filmPrew.map((review, id) => (
            <li key={id}>
              <br />
              <p>Author: {review.author} </p>
              <p>Preview: {review.content} </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
