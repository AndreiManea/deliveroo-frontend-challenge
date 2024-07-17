import React from 'react';
import { HeaderProps } from './header.types';

const Header = ({ locationName }: HeaderProps) => {
  return (
    <div className="flex-col md:flex md:flex-row gap-5 md:gap-0 justify-between items-center bg-primary px-4 md:px-19.25">
      <div className="flex-col gap-0.5 pt-8 pb-5 md:py-14">
        <p className="m-0 opacity-50 text-lg">Location</p>
        <h1 className="text-white text-4xl mt-0.5">{locationName}</h1>
      </div>
      <button className="mb-5 md:mb-0 text-primary bg-white rounded px-4 py-3">
        Change location
      </button>
    </div>
  );
};

export default Header;
