import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { defaultImg } from '../../pages/Home';
import {
  DescrAnker,
  DescrHov,
  FilmItemCard,
  FilmItemImg,
  GlobalListOfFilms,
  NameOfFilm,
} from './FilmList.styled';
import Nores from 'images/Nores.png';

export const FilmList = ({ searchResults }) => {
  const [openFilmId, setOpenFilmId] = useState(null);

  const handleFilmCardClick = filmId => {
    setOpenFilmId(filmId);
  };

  return (
    <div>
      <GlobalListOfFilms>
        {searchResults.map((result, id) => (
          <FilmItemCard key={id}>
            <Link to={`/movies/${result.id}`}>
              <FilmItemImg
                src={
                  result.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
                    : Nores
                }
                width={250}
                alt={result.original_title}
                onClick={() => handleFilmCardClick(result.id)} // Передаем id фильма при клике
              />

              <NameOfFilm>
                {result.name}
                {result.title}
              </NameOfFilm>
              <DescrAnker>
                <DescrHov>{result.overview}</DescrHov>
              </DescrAnker>
            </Link>
          </FilmItemCard>
        ))}
      </GlobalListOfFilms>
    </div>
  );
};
