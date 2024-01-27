import { ReactElement } from 'react';

import homeIcon from '@/assets/icons/ic_home.svg?react';
import homeIconActive from '@/assets/icons/ic_home_active.svg?react';
import myCourseIcon from '@/assets/icons/ic_myCourse.svg?react';
import myCourseIconActive from '@/assets/icons/ic_myCourse_active.svg?react';

export type IconType = 'home' | 'myCourse';

type IconProps = {
  name: IconType;
  color?: string;
  size: number;
  active: boolean;
};

export const SVGIcon = ({ size, name, active }: IconProps): ReactElement => {
  const iconTypes = {
    home: active ? homeIconActive : homeIcon,
    myCourse: active ? myCourseIconActive : myCourseIcon,
  };
  const SVGIcon = iconTypes[name];

  return <SVGIcon width={size} height={size} />;
};

export default SVGIcon;
