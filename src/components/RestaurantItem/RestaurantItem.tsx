import React from 'react';
import { RestaurantItemProps } from './restaurantItem.types';
import { formatPrice } from '../../utils/format';

const RestaurantItem = ({ name, tags, price, imgSrc }: RestaurantItemProps) => {
  return (
    <div className="flex-col cursor-pointer">
      <img src={imgSrc} alt={`${name} restaurant`} />
      <p className="text-2xl my-2">{name}</p>
      <div className="flex gap-3 text-secondary text-sm">
        {tags.map((tag) => (
          <>
            <p key={tag}>{tag}</p>
            <p>•</p>
          </>
        ))}
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default RestaurantItem;
