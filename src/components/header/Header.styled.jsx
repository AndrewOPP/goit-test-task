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
export const NavItem = styled.li({});

export const NavItemText = styled.p({
  margin: 0,
  color: '#fff',
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
