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
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars } from '../../redux/cars/carsSelectors';
import { allCarsThunk } from '../../redux/cars/carsOperation';
import { FavoritesSpace } from 'components/favoritesPageView/FavoritesPageView.styled';

export const CatalogPageView = () => {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const allCarsSelector = useSelector(selectAllCars);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const getAllCars = async () => {
      try {
        const response = await axios.get(
          `https://65d755f627d9a3bc1d7ac601.mockapi.io/allCars?limit=12&page=${page}`
        );
        dispatch(allCarsThunk());
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
    if (!allCars.length && !isLoading)
      return <FavoritesSpace>No cars with such filters</FavoritesSpace>;

    return allCars.map(car => {
      return <CatalogItem key={car.id} car={car} allCars={allCars} />;
    });
  };
  const filterByMark = make => {
    if (make === 'All') {
      return setAllCars(allCarsSelector.slice(0, 12 * page));
    }
    const filteredCars = allCarsSelector.filter(
      ({ make: currentMake }) => currentMake === make
    );

    if (filteredCars) return setAllCars(filteredCars);
    return;
  };
  const filterByPrice = price => {
    if (price === 'All') {
      return setAllCars(allCarsSelector.slice(0, 12 * page));
    }

    const filteredCars = allCarsSelector.filter(({ rentalPrice }) => {
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
      return setAllCars(allCarsSelector.slice(0, 12 * page));
    }
    const filteredCars = allCarsSelector.filter(
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
        allCarsData={allCarsSelector}
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
