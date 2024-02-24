import React, { useState } from 'react';
import {
  FiltersForm,
  FiltersWrapper,
  LabelsText,
  SearchButton,
  StyledInput,
} from './Filters.styled';

import { CustomSelect } from 'components/customSelect/CustomSelect';

export const Filters = ({
  filterByMark,
  filterByPrice,
  filterByMarkAndPrice,
}) => {
  const [currentMake, setCurrentMake] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const submitHandler = e => {
    console.log(currentMake);
    console.log(currentPrice);
    e.preventDefault();
    if (currentMake && currentPrice) {
      filterByMarkAndPrice(currentMake, currentPrice);
      // filterByPrice(currentPrice);
      return;
    }
    if (currentMake) {
      filterByMark(currentMake);
      return;
    }
    if (currentPrice) {
      filterByPrice(currentPrice);
      return;
    }
  };

  return (
    <FiltersWrapper>
      <FiltersForm onSubmit={submitHandler} action="">
        <div style={{ width: '224px' }}>
          <LabelsText>Car brand</LabelsText>
          <div style={{ display: 'flex', gap: 20 }}>
            <CustomSelect
              setCurrentMake={setCurrentMake}
              selectType={'marks'}
            />
          </div>
        </div>
        <div style={{ width: 'fit-content' }}>
          <LabelsText>Price / 1 hour</LabelsText>
          <div style={{ display: 'flex', gap: 20 }}>
            <CustomSelect
              setCurrentPrice={setCurrentPrice}
              selectType={'price'}
            />
          </div>
        </div>
        <div>
          <LabelsText>Сar mileage / km</LabelsText>
          <div>
            <StyledInput placeholder="From" type="text" />
            <StyledInput placeholder="To" type="text" />
          </div>
        </div>
        <SearchButton type="submit">Search</SearchButton>
      </FiltersForm>
    </FiltersWrapper>
  );
};
