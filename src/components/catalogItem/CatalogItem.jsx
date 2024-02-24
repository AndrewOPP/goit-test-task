import {
  StyledHeartIconFilled,
  StyledImg,
} from 'components/catalogPageView/CatalogPageView.styled';
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
export const CatalogItem = ({ car, allCars }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const isCarInFavorite = () => {
    const favoriteArr = JSON.parse(localStorage.getItem('favoriteArray'));
    if (favoriteArr) {
      const currentCarIsFavorite = favoriteArr.find(
        ({ id: carId }) => carId === car.id
      );
      if (currentCarIsFavorite) {
        return true;
      }
    }
    return false;
  };

  const [isInFavorite, setIsInFavorite] = useState(isCarInFavorite());
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

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const getGeoOfTheCar = carAddress => {
    const carAddressSplited = carAddress.split(',');
    return {
      carAddressCity: carAddressSplited[1],
      carAddressCountry: carAddressSplited[2],
    };
  };

  const addToFavorite = id => {
    const favoriteArray = localStorage.getItem('favoriteArray');

    if (favoriteArray) {
      const favoriteArrayParsed = JSON.parse(favoriteArray);
      const isAlreadyIn = favoriteArrayParsed.findIndex(item => item.id === id);
      if (isAlreadyIn === -1) {
        favoriteArrayParsed.push(allCars.find(elem => elem.id === id));
        localStorage.setItem(
          'favoriteArray',
          JSON.stringify(favoriteArrayParsed)
        );
        setIsInFavorite(true);
      } else {
        favoriteArrayParsed.splice(isAlreadyIn, 1);
        localStorage.setItem(
          'favoriteArray',
          JSON.stringify(favoriteArrayParsed)
        );
        setIsInFavorite(false);
      }
      return;
    }
    const emptyFavoriteArray = [allCars.find(elem => elem.id === id)];
    localStorage.setItem('favoriteArray', JSON.stringify(emptyFavoriteArray));
  };

  return (
    <li key={id} style={{ maxWidth: 274 }}>
      <div style={{ position: 'relative' }}>
        <StyledImg width={278} height={268} src={img} alt="car" />
        {isInFavorite ? (
          <StyledHeartIconFilled onClick={() => addToFavorite(id)} />
        ) : (
          <StyledHeartIcon onClick={() => addToFavorite(id)} />
        )}
      </div>
      <StyledModelBlock>
        <StyledModelText>
          {make}{' '}
          <StyledModelSpan>{model.length > 7 ? null : model}</StyledModelSpan>,{' '}
          {year}
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
