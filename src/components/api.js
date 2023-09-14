// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTcwZGQzYjYwOGY2ZTczOWY3ZTE0NmY5MzZmZjBhYSIsInN1YiI6IjY0ZmE0YmU5ZGMxY2I0MDEwMjhjODM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pjAG-CCh9pQYtcKallYSTy4QnR_WFqHo9qDHFzUxTME
// API KEY 2a70dd3b608f6e739f7e146f936ff0aa

// 1. Как отрисовать картинку?
// 2. Как дешифровать жанры?
// 3. Пример Добавь асинхронную загрузку JS-кода для маршрутов приложения используя React.lazy() и <Suspense>.

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const keyAPI =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTcwZGQzYjYwOGY2ZTczOWY3ZTE0NmY5MzZmZjBhYSIsInN1YiI6IjY0ZmE0YmU5ZGMxY2I0MDEwMjhjODM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pjAG-CCh9pQYtcKallYSTy4QnR_WFqHo9qDHFzUxTME';

export const fetchPopular = async page => {
  const nextPage = page ?? 1; // Переход на вторую страницу
  const options = {
    method: 'GET',
    url: `/trending/all/day?page=${nextPage}`, // Добавляем параметр page
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${keyAPI}`,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

///////////////////

export const fetchFilmByKeyWord = async (name, page) => {
  const nextPage = page ?? 1;
  const options = {
    method: 'GET',
    url: `/search/movie?query=${name}&include_adult=false&language=en-US&page=${nextPage}`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${keyAPI}`,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/////////////////////

export const fetchFilmDetInfo = async id => {
  const options = {
    method: 'GET',
    url: `/movie/${id}?language=en-US`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${keyAPI}`,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

///////////////////////////

export const fetchActors = async movie_id => {
  const options = {
    method: 'GET',
    url: `/movie/${movie_id}/credits`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${keyAPI}`,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/////////////////////////

export const fetchPreview = async movie_id => {
  const options = {
    method: 'GET',
    url: `/movie/${movie_id}/reviews`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${keyAPI}`,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
