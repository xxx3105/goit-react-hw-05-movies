import { useState } from 'react';
import { fetchFilmByKeyWord } from '../../components/api';
import { FilmList } from 'components/FilmList/FilmList';
import DraggableWindow from 'components/DragContPan/DragContPan';
import {
  ButtonStld,
  InputLabel,
  InputSearch,
  SearchPos,
} from './Movies.styled';

export const Movies = () => {
  const [tempSearchQuery, setTempSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [numberOfResults, setNumberOfResults] = useState(0);

  const handleSearchInputChange = e => {
    setTempSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async e => {
    e.preventDefault();
    if (tempSearchQuery.trim() !== '') {
      try {
        // When searching, reset the current page to 1
        setCurrentPage(1);
        const response = await fetchFilmByKeyWord(tempSearchQuery, currentPage);
        setSearchResults(response.results);
        setNumberOfPages(response.total_pages);
        setNumberOfResults(response.total_results);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const loadNextPage = async () => {
    try {
      const nextPage = currentPage + 1;
      const response = await fetchFilmByKeyWord(tempSearchQuery, nextPage);
      setSearchResults(response.results);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error(error);
    }
  };

  const pageProgress = Math.round(currentPage / (numberOfPages / 100));

  return (
    <div>
      <h2>Search</h2>
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
      <DraggableWindow
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        pageProgress={pageProgress}
        loadNextPage={loadNextPage}
      />
      <FilmList searchResults={searchResults} />
    </div>
  );
};
