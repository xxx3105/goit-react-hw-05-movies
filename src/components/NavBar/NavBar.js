import { StldHeader, StldLink } from './NavBar.module';

export const NavBar = () => {
  return (
    <StldHeader>
      {/* <p>LOGO</p> */}
      <nav>
        <StldLink to="/">Home</StldLink>
        <StldLink to="/movies">Movies</StldLink>
      </nav>
    </StldHeader>
  );
};
