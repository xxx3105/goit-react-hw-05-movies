import { useEffect, useMemo, useState } from 'react';
import { fetchFilmByKeyWord } from '../../components/api';
import { FilmList } from 'components/FilmList/FilmList';
import DraggableWindow from 'components/DragContPan/DragContPan';
import { ButtonStld, InputSearch, TitleSearch } from './Movies.styled';
import Loader from 'components/Loader/Loader';
import { useLocation, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const [tempSearchQuery, setTempSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const locSearch = location.search;
  const searchParams = useMemo(
    () => new URLSearchParams(locSearch),
    [locSearch]
  );
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
        setCurrentPage(1);
        const response = await fetchFilmByKeyWord(tempSearchQuery, currentPage);
        setSearchResults(response.results);
        setNumberOfPages(response.total_pages);
        //setNumberOfResults(response.total_results);

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
      const response = await fetchFilmByKeyWord(tempSearchQuery, nextPage);
      setSearchResults(response.results);
      setCurrentPage(nextPage);
      queryParams.set('page', nextPage.toString());
      navigate(`?${queryParams.toString()}`);
    } catch (error) {
      console.error(error);
    }
  };

  const pageProgress = Math.round(currentPage / (numberOfPages / 100));

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
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
          <form onSubmit={handleSearchSubmit}>
            <label htmlFor="search"></label>
            <InputSearch
              type="text"
              id="search"
              name="q"
              placeholder="Enter text..."
              value={tempSearchQuery}
              onChange={handleSearchInputChange}
            />
            <ButtonStld type="submit">Search</ButtonStld>
          </form>
          <FilmList searchResults={searchResults} currentUrl={currentUrl} />
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
