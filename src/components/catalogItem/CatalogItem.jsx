import { StyledImg } from 'components/catalogPageView/CatalogPageView.styled';
import React, { useState } from 'react';
import {
  StyledButton,
  StyledHeartIcon,
  StyledInfoList,
  StyledInfoListItem,
  StyledModelBlock,
  StyledModelSpan,
  StyledModelText,
} from 'components/catalogPageView/CatalogPageView.styled';
import { CatalogCarModal } from 'components/catalogCarModal/CatalogCarModal';
export const CatalogItem = ({ car }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
  } = car;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getGeoOfTheCar = carAddress => {
    const carAddressSplited = carAddress.split(',');
    return {
      carAddressCity: carAddressSplited[1],
      carAddressCountry: carAddressSplited[2],
    };
  };

  return (
    <li key={id} style={{ maxWidth: 274 }}>
      <div style={{ position: 'relative' }}>
        <StyledImg width={278} height={268} src={img} alt="car" />
        <StyledHeartIcon />
      </div>
      <StyledModelBlock>
        <StyledModelText>
          {make} <StyledModelSpan>{model}</StyledModelSpan>, {year}
        </StyledModelText>
        <StyledModelText>{rentalPrice}</StyledModelText>
      </StyledModelBlock>
      <StyledInfoList>
        <StyledInfoListItem>
          {getGeoOfTheCar(address).carAddressCity}
        </StyledInfoListItem>
        <StyledInfoListItem>
          {getGeoOfTheCar(address).carAddressCountry}
        </StyledInfoListItem>
        <StyledInfoListItem>{rentalCompany}</StyledInfoListItem>
        <StyledInfoListItem>Premium {type}</StyledInfoListItem>
        <StyledInfoListItem>{model}</StyledInfoListItem>
        <StyledInfoListItem>{id}</StyledInfoListItem>
      </StyledInfoList>
      <StyledButton onClick={openModal} type="button">
        Learn more
      </StyledButton>
      {modalIsOpen && (
        <CatalogCarModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
          car={{ ...car, ...getGeoOfTheCar(address) }}
        />
      )}
    </li>
  );
};
