import styled from 'styled-components';
import { UilMultiply } from '@iconscout/react-unicons';

export const StyledImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
`;

export const ModalContentWrapper = styled.div`
  padding: 40px;
`;
export const MainInfoWrapperModal = styled.div`
  margin-top: 14px;
`;

export const AccessoriesWrapper = styled.div`
  margin-top: 24px;
`;
export const ConditionsWrapper = styled.div`
  margin-top: 24px;
`;

export const UilMultiplyStyled = styled(UilMultiply)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const StyledModelTextModal = styled.p`
  font-size: 24px;
`;
export const StyledModelDescriptionModal = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;
  /* font-family: Manrope; */
  font-size: 18px;
`;
export const StyledModelSpanModal = styled.span`
  color: #3470ff;
  font-size: 24px;
`;

export const StyledInfoListModal = styled.ul`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 10px;
`;
export const RentalConditionsItemModal = styled.li`
  padding: 7px 13px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;
export const RentalConditionsModal = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`;
export const StyledInfoListItemModal = styled.li`
  color: #12141780;
  font-size: 14px;
  padding-right: 6px;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;
export const RentalButton = styled.button`
  width: 168px;
  margin-top: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;

  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 500ms;
  border: none;
  outline: none;
  border-radius: 12px;
  background-color: #3470ff;
  &:hover {
    background-color: #0b44cd;
  }
`;
