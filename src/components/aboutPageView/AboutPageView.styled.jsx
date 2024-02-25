import styled from 'styled-components';

export const AboutWrapper = styled.div`
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  margin-left: 100px;
  margin-right: 100px;
  @media (min-width: 768px) {
    margin-left: 168px;
    margin-right: 168px;
  }
`;

export const MainTitle = styled.h2`
  color: #375baf;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const MainText = styled.p`
  text-align: center;
  width: 500px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (min-width: 792px) {
    width: 800px;
    font-size: 20px;
  }
`;

export const ListWrapper = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '20px',
  marginTop: '60px',
});

export const ListItem = styled.li({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 14,
  width: '300px',
  height: '200px',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  listStyle: 'none',
  borderRadius: '8px',
});

export const ListItemText = styled.p({
  textAlign: 'center',
  fontSize: '16px',
  marginTop: '30px',
});
export const ListItemTitle = styled.p({
  textAlign: 'center',
  color: '#375baf',
  fontSize: '20px',
  margin: 0,
  marginTop: '20px',
});
