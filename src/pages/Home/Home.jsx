import React, { useEffect, useState } from 'react';
import { fetchPopular } from '../../components/api';
import { FilmList } from 'components/FilmList/FilmList';
import { Container } from 'GlobalStyles';
import DraggableWindow from 'components/DragContPan/DragContPan';
import { TitelGen } from './Home.styled';
import Loader from 'components/Loader/Loader';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const Home = () => {
  const [popularResults, setPopularResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const locSearch = location.search;
  const [searchParams] = useSearchParams();
  const currentUrl = location.pathname + locSearch;
  const pageProgress = Math.round(currentPage / (numberOfPages / 100));

  useEffect(() => {
    async function fetchMoviePopular(currentPage) {
      try {
        const data = await fetchPopular(currentPage);
        setPopularResults(data.results);
        setNumberOfPages(data.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page, 10));
      fetchMoviePopular(page);
    } else {
      fetchMoviePopular(currentPage);
    }
  }, [currentPage, searchParams]);

  const loadNextPage = async () => {
    try {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      searchParams.set('page', nextPage.toString());
      navigate({ search: searchParams.toString() });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <TitelGen> Trending today</TitelGen>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FilmList searchResults={popularResults} currentUrl={currentUrl} />

          <DraggableWindow
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            pageProgress={pageProgress}
            loadNextPage={loadNextPage}
          />
        </>
      )}
    </Container>
  );
};

export default Home;
