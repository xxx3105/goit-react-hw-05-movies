import { PosButtonsNotJump, StldHeader, StldLink } from './NavBar.module';

export const NavBar = () => {
  return (
    <StldHeader>
      <nav>
        <PosButtonsNotJump>
          <StldLink to="/">Home</StldLink>
          <StldLink to="/movies">Movies</StldLink>
        </PosButtonsNotJump>
      </nav>
    </StldHeader>
  );
};

export default NavBar;
