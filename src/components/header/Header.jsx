import React from 'react';

import {
  HeaderWrapper,
  MainTitle,
  NavItemText,
  NavList,
  StyledNavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <MainTitle>UKRCAR</MainTitle>
      <nav>
        <NavList>
          <li>
            <StyledNavLink style={{ textDecoration: 'none' }} to="/">
              <NavItemText>About</NavItemText>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink style={{ textDecoration: 'none' }} to="/catalog">
              <NavItemText>Catalog</NavItemText>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink style={{ textDecoration: 'none' }} to="/favorites">
              <NavItemText>Favorites</NavItemText>
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </HeaderWrapper>
  );
};
