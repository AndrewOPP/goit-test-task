import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CatalogList, CatalogWrapper } from './CatalogPageView.styled';
import { CatalogItem } from 'components/catalogItem/CatalogItem';

export const CatalogPageView = () => {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const response = await axios.get(
          'https://65d755f627d9a3bc1d7ac601.mockapi.io/allCars'
        );
        setAllCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCars();
  }, []);
  console.log(allCars);

  const renderAllCars = () => {
    return allCars.map(car => {
      return <CatalogItem car={car} />;
    });
  };

  return (
    <CatalogWrapper>
      <div>Filters</div>
      <CatalogList>{renderAllCars()}</CatalogList>
    </CatalogWrapper>
  );
};
