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
import cancelIcon from '@/assets/icons/ic_cancel.svg?react';
import lineIcon from '@/assets/icons/ic_line.svg?react';
import plusIcon from '@/assets/icons/ic_plus.svg?react';
import fullStartIcon from '@/assets/icons/ic_full_star.svg?react';
import type { IconPropsType } from '@/components/atoms/types';

const SVGIcon = ({
  wSize,
  hSize,
  name,
  active,
  style,
  click,
  color,
}: IconPropsType): ReactElement => {
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
    cancelIcon: cancelIcon,
    lineIcon: lineIcon,
    plusIcon: plusIcon,
    fullStartIcon: fullStartIcon,
  };
  const SVGIcon = iconTypes[name];

  return (
    <SVGIcon
      className={style}
      width={wSize}
      height={hSize}
      onClick={click}
      fill={color ? color : 'none'}
    />
  );
};

export default SVGIcon;
