import styled from 'styled-components';
import { UilHeart } from '@iconscout/react-unicons';

export const CatalogWrapper = styled.div`
  margin-left: 168px;
  margin-right: 168px;
`;
export const CatalogList = styled.ul`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledImg = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;
export const StyledHeartIcon = styled(UilHeart)`
  position: absolute;
  top: 16px;
  right: 15px;
  width: 26px;
  height: 26px;
  fill: white;
  cursor: pointer;
`;

export const StyledModelBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const StyledModelText = styled.p`
  /* font-family: Manrope; */
  font-size: 18px;
`;
export const StyledModelSpan = styled.span`
  color: #3470ff;
  font-size: 18px;
`;

export const StyledInfoList = styled.ul`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
`;
export const StyledInfoListItem = styled.li`
  color: #12141780;
  font-size: 14px;
  padding-right: 6px;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;
export const StyledButton = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #3470ff;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 12px;
  margin-top: 28px;
  cursor: pointer;
  outline: none;
  transition: all 500ms;
  &:hover {
    background-color: #0b44cd;
  }
`;
