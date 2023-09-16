import { Outlet } from 'react-router-dom';
import { PosButtonsNotJump, StldHeader, StldLink } from './NavBar.module';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const NavBar = () => {
  return (
    <>
      <StldHeader>
        <nav>
          <PosButtonsNotJump>
            <StldLink to="/">Home</StldLink>
            <StldLink to="/movies">Movies</StldLink>
          </PosButtonsNotJump>
        </nav>
      </StldHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavBar;
