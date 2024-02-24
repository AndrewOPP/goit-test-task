import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const FiltersForm = styled.form`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 18px;
`;
export const FiltersWrapper = styled.div`
  margin-top: 50px;
`;
export const StyledSelect = styled.select`
  width: 224px;
  color: #12141780;
  padding: 14px 18px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
`;
export const StyledSecondSelect = styled.select`
  width: 125px;
  color: #12141780;
  padding: 14px 18px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
`;

export const StyledInput = styled.input`
  width: 160px;
  color: #12141780;
  padding: 14px 18px;
  font-size: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  outline: none;
`;

export const LabelsText = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 8px;
`;

export const SearchButton = styled.button`
  font-size: 16px;
  color: white;
  padding: 14px 44px;
  background-color: #3470ff;
  transition: all 500ms;
  border: none;
  outline: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;
export const DownIcon = styled(KeyboardArrowDownIcon)`
  position: absolute;
  top: 14px;
  right: 18px;
  color: gray;
  pointer-events: none;
`;
