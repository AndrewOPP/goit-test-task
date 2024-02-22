import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  MainTitle,
  NavItem,
  NavItemText,
  NavList,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <MainTitle>UKRCAR</MainTitle>
      <nav>
        <NavList>
          <NavItem>
            <Link style={{ textDecoration: 'none' }} to="/">
              <NavItemText>About</NavItemText>
            </Link>
          </NavItem>
          <NavItem>
            <Link style={{ textDecoration: 'none' }} to="/catalog">
              <NavItemText>Catalog</NavItemText>
            </Link>
          </NavItem>
          <NavItem>
            <Link style={{ textDecoration: 'none' }} to="/favorites">
              <NavItemText>Favorites</NavItemText>
            </Link>
          </NavItem>
        </NavList>
      </nav>
    </HeaderWrapper>
  );
};
