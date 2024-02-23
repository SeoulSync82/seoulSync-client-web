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
import seoulSyncLogo from '@/assets/icons/logo_seoulSync.svg?react';
import downTriangle from '@/assets/icons/down_triangle.svg?react';
import kakaoIcon from '@/assets/icons/ic_kakao.svg?react';
import naverIcon from '@/assets/icons/ic_naver.svg?react';
import googleIcon from '@/assets/icons/ic_google.svg?react';

export type IconType =
  | 'home'
  | 'myCourse'
  | 'AIRecommend'
  | 'community'
  | 'profile'
  | 'menuLogo'
  | 'searchIcon'
  | 'alarmIcon'
  | 'leftArrowIcon'
  | 'seoulSyncLogo'
  | 'downTriangle'
  | 'kakaoIcon'
  | 'naverIcon'
  | 'googleIcon';

type IconProps = {
  name: IconType;
  color?: string;
  wSize?: number;
  hSize?: number;
  active: boolean;
  style?: string;
  click?: () => void;
};

export const SVGIcon = ({ wSize, hSize, name, active, style, click }: IconProps): ReactElement => {
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
    seoulSyncLogo: seoulSyncLogo,
    downTriangle: downTriangle,
    kakaoIcon: kakaoIcon,
    naverIcon: naverIcon,
    googleIcon: googleIcon,
  };
  const SVGIcon = iconTypes[name];

  return <SVGIcon className={style} width={wSize} height={hSize} onClick={click} />;
};

export default SVGIcon;
