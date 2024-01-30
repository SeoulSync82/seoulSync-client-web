import { ReactElement } from 'react';

import homeIcon from '@/assets/icons/ic_home.svg?react';
import homeIconActive from '@/assets/icons/ic_home_active.svg?react';
import myCourseIcon from '@/assets/icons/ic_myCourse.svg?react';
import myCourseIconActive from '@/assets/icons/ic_myCourse_active.svg?react';
import AIRecommendIcon from '@/assets/icons/ic_AIRecommend.svg?react';
import communityIcon from '@/assets/icons/ic_community.svg?react';
import communityIconActive from '@/assets/icons/ic_community_active.svg?react';
import profileIcon from '@/assets/icons/ic_profile.svg?react';
import profileIconActive from '@/assets/icons/ic_profile_active.svg?react';

export type IconType = 'home' | 'myCourse' | 'AIRecommend' | 'community' | 'profile';

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
    AIRecommend: AIRecommendIcon,
    community: active ? communityIconActive : communityIcon,
    profile: active ? profileIconActive : profileIcon,
  };
  const SVGIcon = iconTypes[name];

  return <SVGIcon width={size} height={size} />;
};

export default SVGIcon;
