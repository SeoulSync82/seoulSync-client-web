import { tabItemType } from '@/components/Molecules/types';

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

export type IconPropsType = {
  name: IconType;
  color?: string;
  wSize?: number;
  hSize?: number;
  active: boolean;
  style?: string;
  click?: () => void;
};

export type buttonSizeType = 'small' | 'midium' | 'large';
export type speechBubbleSizeType = 'small' | 'midium';
export type speechBubbleDirectionType =
  | 'topLeft'
  | 'topMiddle'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomMiddle'
  | 'bottomRight';

export type buttonPropsType = {
  size: buttonSizeType;
  bgColor: buttonColorType;
  textColor: buttonColorType;
  content: string;
  aboutSvgIcon: IconPropsType;
};

export type speechBubblePropsType = {
  size: speechBubbleSizeType;
  direction: speechBubbleDirectionType;
  aboutSvgIcon: IconPropsType;
  content: string;
};

export type buttonColorType = 'naverGreen' | 'kakaoYellow' | 'googleGray' | 'white' | 'gray900';

export type tabPropsType = {
  active: boolean;
  title: string;
  click?: (item: tabItemType) => void;
};
