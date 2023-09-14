import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { GlobalStyle } from '../GlobalStyles';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { Reviews } from '../pages/Reviews';
import { NotFound } from 'pages/NotFound';
import FilmCard from './FilmCard/FilmCard';
import { Container } from '../GlobalStyles';
import { NavBar } from './NavBar/NavBar';
import Loader from './Loader/Loader';
import { Cast } from '../pages/Cast/Cast';
//import Cast from 'pages/Cast';

//const LazyComponent = lazy(() => import('./LazyComponent'));

export const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/goit-react-hw-05-movies" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:filmId" element={<FilmCard />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
      <GlobalStyle />
    </>
  );
};
