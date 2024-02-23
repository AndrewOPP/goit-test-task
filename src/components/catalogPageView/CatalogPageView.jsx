import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  CatalogList,
  CatalogWrapper,
  LoadMoreButton,
} from './CatalogPageView.styled';
import { CatalogItem } from 'components/catalogItem/CatalogItem';
import { loader } from 'components/Loader/Loader';

export const CatalogPageView = () => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getAllCars = async () => {
      try {
        const response = await axios.get(
          'https://65d755f627d9a3bc1d7ac601.mockapi.io/allCars'
        );
        setAllCars(response.data.slice(0, 12));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCars();
  }, []);

  const renderAllCars = () => {
    return allCars.map(car => {
      return <CatalogItem key={car.id} car={car} allCars={allCars} />;
    });
  };

  return (
    <CatalogWrapper>
      <div>Filters</div>
      {isLoading ? (
        loader
      ) : (
        <>
          <CatalogList>{renderAllCars()}</CatalogList>
          <LoadMoreButton>Load more</LoadMoreButton>
        </>
      )}
    </CatalogWrapper>
  );
};
