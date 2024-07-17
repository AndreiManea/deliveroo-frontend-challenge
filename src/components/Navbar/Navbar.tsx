import React from 'react';
import HorizontalLogo from '../../assets/svgs/logo-horizontal.svg';
import MobileLogo from '../../assets/svgs/logo-mobile.svg';
import Avatar from '../Avatar/Avatar';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

const Navbar: React.FC = () => {
  const screenSize = useWindowSize();

  return (
    <div className="flex justify-between items-center mb-3 px-4 md:px-19.25">
      {screenSize.width && screenSize.width > 640 ? (
        <HorizontalLogo />
      ) : (
        <MobileLogo />
      )}
      <Avatar userName="Jane Smith" />
    </div>
  );
};

export default Navbar;
