import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react';
import { Container } from '../GlobalStyles';
import { GlobalStyle } from '../GlobalStyles';

const NavBar = lazy(() => import('./NavBar/NavBar'));
const Loader = lazy(() => import('./Loader/Loader'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const FilmCard = lazy(() => import('./FilmCard/FilmCard'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
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
