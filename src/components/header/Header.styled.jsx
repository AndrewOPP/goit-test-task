import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div({
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '10px',
  gap: '30px',
  height: '60px',
  backgroundColor: '#375baf',
  width: '99.5%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
});

export const NavList = styled.ul({
  width: '100%',
  display: 'flex',
  gap: '20px',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const MainTitle = styled.p({
  color: '#fff',
  fontSize: '28px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  lineHeight: '30px',
});
export const StyledNavLink = styled(NavLink)`
  color: #fff;
  &.active {
    color: #222; /* Изменяем цвет активной ссылки */
  }
`;

export const NavItemText = styled.p({
  margin: 0,

  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  lineHeight: '30px',
  transition: 'all 300ms',
  '&:hover': {
    color: '#000000',
  },
});
