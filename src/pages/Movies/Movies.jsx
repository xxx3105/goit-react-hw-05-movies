import { useEffect, useState } from 'react';
import { fetchFilmByKeyWord } from '../../components/api';

import DraggableWindow from 'components/DragContPan/DragContPan';
import { TitleSearch } from './Movies.styled';
import Loader from 'components/Loader/Loader';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { FormMovies } from 'components/FormMovies/FormMovies';

export const Movies = () => {
  const [tempSearchQuery, setTempSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const locSearch = location.search;
  const [searchParams] = useSearchParams();
  const queryParams = new URLSearchParams(locSearch);
  const currentUrl = location.pathname + locSearch;

  const handleSearchInputChange = e => {
    setTempSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async e => {
    if (e) {
      e.preventDefault();
    }
    if (tempSearchQuery.trim() !== '') {
      try {
        setIsLoading(true);
        searchParams.set('q', tempSearchQuery);
        searchParams.set('page', '1');
        navigate({ search: searchParams.toString() });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const loadNextPage = async () => {
    try {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);

      const updatedQueryParams = new URLSearchParams(queryParams);
      updatedQueryParams.set('page', nextPage.toString());

      navigate(`?${updatedQueryParams.toString()}`);
    } catch (error) {
      console.error(error);
    }
  };

  const pageProgress = Math.round(currentPage / (numberOfPages / 100));

  useEffect(() => {
    setIsLoading(false);
    const query = searchParams.get('q');
    const page = searchParams.get('page');
    if (query) {
      setTempSearchQuery(query);
    }
    if (page) {
      setCurrentPage(parseInt(page, 10));
    }
    if (query || page) {
      const fetchDataFromUrl = async () => {
        try {
          const fromUrlRes = await fetchFilmByKeyWord(query, page);
          setSearchResults(fromUrlRes.results);
          setNumberOfPages(fromUrlRes.total_pages);
        } catch (error) {
          console.error(error);
        }
      };

      fetchDataFromUrl();
    }
  }, [searchParams]);

  return (
    <div>
      <TitleSearch>Search</TitleSearch>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FormMovies
            searchResults={searchResults}
            currentUrl={currentUrl}
            value={tempSearchQuery}
            handleSearchSubmit={handleSearchSubmit}
            handleSearchInputChange={handleSearchInputChange}
          />
        </>
      )}

      <DraggableWindow
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        pageProgress={pageProgress}
        loadNextPage={loadNextPage}
      />
    </div>
  );
};

export default Movies;
