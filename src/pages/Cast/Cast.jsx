// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Nores from 'images/Nores.png'; // Убедитесь, что путь к изображению правильный
// import { fetchActors } from 'components/api';

// export const Cast = () => {
//   const [movieCast, setMovieCast] = useState([]);
//   const { filmId } = useParams();

//   useEffect(() => {
//     fetchActors(filmId)
//       .then(response => setMovieCast(response.cast))
//       .catch(error => console.error('Произошла ошибка:', error));
//   }, [filmId]);

//   if (!movieCast) {
//     return null;
//   }

//   if (movieCast.length === 0) {
//     return <p>We don't have any cast for this movie.</p>;
//   }

//   return (
//     <ul>
//       {movieCast.map(item => (
//         <li key={item.id}>
//           <img
//             src={
//               item.profile_path
//                 ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
//                 : Nores
//             }
//             alt={item.original_name}
//           />
//           <p>
//             <b>{item.original_name || '...'}</b>
//           </p>
//           <p>{item.character || '...'}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchActors } from 'components/api';
// import CastList from 'components/CastList/CastList';

// export default function Cast() {
//   const [movieCast, setMovieCast] = useState(0);
//   const { movieId } = useParams();

//   useEffect(() => {
//     fetchActors(movieId).then(setMovieCast);
//   }, [movieId]);

//   if (!movieCast) {
//     return;
//   }

//   if (movieCast.length === 0) {
//     return <p>We don't have any cast for this movie.</p>;
//   }

//   return <CastList movieCast={movieCast} />;
// }

import React, { useEffect } from 'react';
import { fetchActors } from 'components/api';
import Nores from 'images/Nores.png';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardActors, ContainerCast, ImgAct, ListAct } from './Cast.styled';

export const Cast = () => {
  const [filmActors, setFilmActors] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  const { filmId } = useParams();

  const getActors = async filmId => {
    console.log(filmId);

    try {
      const responseActors = await fetchActors(filmId);
      console.log(responseActors);
      setFilmActors(responseActors.cast);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    } finally {
      //setIsLoading(false);
      console.log('finally');
    }
  };

  useEffect(() => {
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
            <span>Name: {cast.name} </span>
            <span>Character: {cast.character} </span>
          </CardActors>
        ))}
      </ListAct>
    </ContainerCast>
  );
};
