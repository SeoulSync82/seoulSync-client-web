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

export type buttonSizeType = 'small' | 'medium' | 'large';
export type speechBubbleSizeType = 'small' | 'medium';
export type speechBubbleDirectionType =
  | 'topLeft'
  | 'topMiddle'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomMiddle'
  | 'bottomRight';

export type buttonBorderType = {
  position: 'top' | 'left' | 'right' | 'bottom' | 'x' | 'y';
  size: buttonSizeType;
};

export type buttonClickPropsType = {
  key: string;
  content: string;
};

export type buttonPropsType = {
  size: buttonSizeType;
  bgColor: buttonColorType;
  textColor: buttonColorType;
  content: string;
  aboutSvgIcon?: IconPropsType;
  border?: buttonBorderType;
  borderColor?: buttonColorType;
  active?: boolean;
  click?: () => void;
};

export type speechBubblePropsType = {
  size: speechBubbleSizeType;
  direction: speechBubbleDirectionType;
  aboutSvgIcon: IconPropsType;
  content: string;
};

export type buttonColorType =
  | 'primary'
  | 'naverGreen'
  | 'kakaoYellow'
  | 'googleGray'
  | 'white'
  | 'gray900'
  | 'gray100'
  | 'gray200'
  | 'gray400';

export type tabPropsType = {
  active: boolean;
  title: string;
  click?: (item: tabItemType) => void;
};
