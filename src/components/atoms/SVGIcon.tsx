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
import menuLogo from '@/assets/icons/ic_menu_logo.svg?react';
import searchIcon from '@/assets/icons/ic_search.svg?react';
import alarmIcon from '@/assets/icons/ic_alarm.svg?react';
import leftArrowIcon from '@/assets/icons/ic_left_arrow.svg?react';

export type IconType =
  | 'home'
  | 'myCourse'
  | 'AIRecommend'
  | 'community'
  | 'profile'
  | 'menuLogo'
  | 'searchIcon'
  | 'alarmIcon'
  | 'leftArrowIcon';

type IconProps = {
  name: IconType;
  color?: string;
  size?: number;
  active: boolean;
  style?: string;
  click?: () => void;
};

export const SVGIcon = ({ size, name, active, style, click }: IconProps): ReactElement => {
  const iconTypes = {
    home: active ? homeIconActive : homeIcon,
    myCourse: active ? myCourseIconActive : myCourseIcon,
    AIRecommend: AIRecommendIcon,
    community: active ? communityIconActive : communityIcon,
    profile: active ? profileIconActive : profileIcon,
    menuLogo: menuLogo,
    searchIcon: searchIcon,
    alarmIcon: alarmIcon,
    leftArrowIcon: leftArrowIcon,
  };
  const SVGIcon = iconTypes[name];

  return <SVGIcon className={style} width={size} height={size} onClick={click} />;
};

export default SVGIcon;
