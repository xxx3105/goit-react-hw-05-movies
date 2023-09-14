import React, { useEffect, useState } from 'react';
import { fetchPopular } from '../../components/api';
import { FilmList } from 'components/FilmList/FilmList';
import { Container } from 'GlobalStyles';
import DraggableWindow from 'components/DragContPan/DragContPan';
import { TitelGen } from './Home.styled';

//export const defaultImg =

export const Home = () => {
  const [popularResults, setPopularResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    async function fetchMoviePopular() {
      try {
        const data = await fetchPopular(currentPage);
        setPopularResults(data.results);
        setNumberOfPages(data.total_pages);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMoviePopular();
  }, [currentPage]);

  const loadNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const pageProgress = Math.round(currentPage / (numberOfPages / 100));

  return (
    <Container>
      <TitelGen> Trending today</TitelGen>
      <FilmList searchResults={popularResults} />

      <DraggableWindow
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        pageProgress={pageProgress}
        loadNextPage={loadNextPage}
      />
    </Container>
  );
};
