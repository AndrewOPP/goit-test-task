import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  CatalogList,
  CatalogWrapper,
  LoadMoreButton,
  LoadMoreButtonWrapper,
} from './CatalogPageView.styled';
import { CatalogItem } from 'components/catalogItem/CatalogItem';
import { loader } from 'components/Loader/Loader';
import { Filters } from 'components/filters/Filters';

export const CatalogPageView = () => {
  const [allCars, setAllCars] = useState([]);
  const [allCarsData, setAllCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getAllCars = async () => {
      try {
        const response = await axios.get(
          `https://65d755f627d9a3bc1d7ac601.mockapi.io/allCars?limit=12&page=${page}`
        );

        const responseOfAllData = await axios.get(
          `https://65d755f627d9a3bc1d7ac601.mockapi.io/allCars`
        );
        setAllCarsData(responseOfAllData.data);
        setAllCars([...allCars, ...response.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const loadMoreCars = async () => {
    setPage(prev => prev + 1);
  };

  const renderAllCars = () => {
    return allCars.map(car => {
      return <CatalogItem key={car.id} car={car} allCars={allCars} />;
    });
  };

  const filterByMark = make => {
    if (make === 'All') {
      return setAllCars(allCarsData.slice(0, 12 * page));
    }
    const filteredCars = allCarsData.filter(
      ({ make: currentMake }) => currentMake === make
    );
    console.log(filteredCars);
    if (filteredCars) return setAllCars(filteredCars);
    return;
  };
  const filterByPrice = price => {
    if (price === 'All') {
      return setAllCars(allCarsData.slice(0, 12 * page));
    }

    const filteredCars = allCarsData.filter(({ rentalPrice }) => {
      const rightPrice = Number(
        rentalPrice
          .split('')
          .splice(1, rentalPrice.split('').length - 1)
          .join('')
      );
      return rightPrice < price;
    });
    if (filteredCars) return setAllCars(filteredCars);
    return;
  };

  const filterByMarkAndPrice = (mark, price) => {
    if (price === 'All' && mark === 'All') {
      return setAllCars(allCarsData.slice(0, 12 * page));
    }
    const filteredCars = allCarsData.filter(
      ({ make: currentMake, rentalPrice }) => {
        const rightPrice = Number(
          rentalPrice
            .split('')
            .splice(1, rentalPrice.split('').length - 1)
            .join('')
        );
        const rightMake = currentMake.split(' ')[0];
        if (mark === 'All') return rightPrice < price;
        if (price === 'All') return mark === rightMake;
        return mark === rightMake && rightPrice < price;
      }
    );
    if (filteredCars) return setAllCars(filteredCars);
    return;
  };

  return (
    <CatalogWrapper>
      <Filters
        filterByMarkAndPrice={filterByMarkAndPrice}
        filterByMark={filterByMark}
        filterByPrice={filterByPrice}
        allCarsData={allCarsData}
      />
      {isLoading ? loader : null}
      <CatalogList>{renderAllCars()}</CatalogList>
      <LoadMoreButtonWrapper>
        {allCars.length / 12 >= page && (
          <LoadMoreButton onClick={() => loadMoreCars()}>
            Load more
          </LoadMoreButton>
        )}
      </LoadMoreButtonWrapper>
    </CatalogWrapper>
  );
};
