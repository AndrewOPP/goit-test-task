import { CatalogItem } from 'components/catalogItem/CatalogItem';
import { CatalogList } from 'components/catalogPageView/CatalogPageView.styled';
import React, { useState } from 'react';
import { FavoritesWrapper } from './FavoritesPageView.styled';

export const FavoritesPageView = () => {
  const [favoritesArray, setFavoritesArray] = useState(
    JSON.parse(localStorage.getItem('favoriteArray')) || []
  );

  const renderAllCars = () => {
    return favoritesArray.map(car => {
      console.log(car);
      return <CatalogItem key={car.id} car={car} allCars={favoritesArray} />;
    });
  };

  return (
    <FavoritesWrapper>
      {favoritesArray.length ? (
        <CatalogList>{renderAllCars()}</CatalogList>
      ) : (
        <p>No favorites yet.</p>
      )}
    </FavoritesWrapper>
  );
};
