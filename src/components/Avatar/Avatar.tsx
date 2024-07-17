import React from 'react';
import UserIcon from '../../assets/svgs/user-icon.svg';
import { AvatarProps } from './avatar.types';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

const Avatar = ({ userName }: AvatarProps) => {
  const screenSize = useWindowSize();

  return (
    <div className="flex gap-1 items-center py-1.5 cursor-pointer">
      <div className="px-1.5 py-1.125">
        <UserIcon />
      </div>
      {screenSize.width && screenSize.width > 640 && (
        <p className="m-0">{userName}</p>
      )}
    </div>
  );
};

export default Avatar;
