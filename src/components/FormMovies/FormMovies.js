import { FilmList } from 'components/FilmList/FilmList';
import { ButtonStld, InputSearch } from './FormMovies.styled';

export const FormMovies = ({
  searchResults,
  currentUrl,
  tempSearchQuery,
  handleSearchSubmit,
  handleSearchInputChange,
}) => {
  return (
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
  );
};
