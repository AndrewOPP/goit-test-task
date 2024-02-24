import { MAKES_SELECT, PRICE_SELECT } from 'constants/constants';
import React from 'react';
import { StyledSelect } from './CustomSelect.styled';

export const CustomSelect = ({
  selectType,
  setCurrentMake,
  setCurrentPrice,
}) => {
  const customStyles = {
    control: provided => ({
      ...provided,
      cursor: 'pointer',
      width: selectType === 'marks' ? '224px' : '125px',
      backgroundColor: '#f7f7fb',
      fontSize: '18px',
      border: 'none',
      outline: 'none',
      borderRadius: 12,
      padding: '6px 14px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: state.isSelected ? 'black' : '#12141733',
      backgroundColor: '##1214170D',
      fontSize: '18px',
      border: 'none',
      outline: 'none',
      borderRadius: 12,
      padding: '6px 14px',
    }),
  };

  if (selectType === 'marks')
    return (
      <StyledSelect
        onChange={selected => setCurrentMake(selected.value)}
        defaultValue={{ value: '', label: 'Choose mark' }}
        options={[{ value: '', label: 'All' }, ...MAKES_SELECT]}
        styles={customStyles}
        menuPortalTarget={document.body}
      />
    );
  if (selectType === 'price')
    return (
      <StyledSelect
        onChange={selected => setCurrentPrice(selected.value)}
        defaultValue={{ value: '', label: 'To $' }}
        options={[{ value: '', label: 'All' }, ...PRICE_SELECT]}
        styles={customStyles}
        menuPortalTarget={document.body}
      />
    );
};
