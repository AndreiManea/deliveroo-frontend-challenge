import React from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { RestaurantListProps } from './restaurantList.types';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

const RestaurantList = ({ restaurants }: RestaurantListProps) => {
  const screenSize = useWindowSize();

  return (
    <div className="px-4 md:px-19.25 mt-10">
      {screenSize.width && screenSize.width > 640 && (
        <p className="m-0">301 Restaurants</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-8 mt-10">
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            name={restaurant.name}
            tags={restaurant.tags}
            price={restaurant.price}
            imgSrc={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
