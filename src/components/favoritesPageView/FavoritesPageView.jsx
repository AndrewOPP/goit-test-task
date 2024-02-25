import { CatalogItem } from 'components/catalogItem/CatalogItem';
import { CatalogList } from 'components/catalogPageView/CatalogPageView.styled';
import React, { useState } from 'react';
import {
  FavoritesSpace,
  FavoritesTitle,
  FavoritesWrapper,
} from './FavoritesPageView.styled';

export const FavoritesPageView = () => {
  // eslint-disable-next-line no-unused-vars
  const [favoritesArray, setFavoritesArray] = useState(
    JSON.parse(localStorage.getItem('favoriteArray')) || []
  );

  const renderAllCars = () => {
    return favoritesArray.map(car => {
      return <CatalogItem key={car.id} car={car} allCars={favoritesArray} />;
    });
  };

  return (
    <FavoritesWrapper>
      <FavoritesTitle>Favorite Cars</FavoritesTitle>
      {favoritesArray.length ? (
        <CatalogList>{renderAllCars()}</CatalogList>
      ) : (
        <FavoritesSpace>No favorites yet.</FavoritesSpace>
      )}
    </FavoritesWrapper>
  );
};
