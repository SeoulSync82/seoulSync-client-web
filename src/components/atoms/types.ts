import type { TabItemType } from '@/components/molecules/types';

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
  | 'googleIcon'
  | 'cancelIcon'
  | 'lineIcon'
  | 'plusIcon'
  | 'fullStartIcon'
  | 'restaurantIcon'
  | 'cafeIcon'
  | 'barIcon'
  | 'shoppingIcon'
  | 'cultureIcon'
  | 'entertainmentIcon'
  | 'logoIcon';

export type IconPropsType = {
  name: IconType;
  color?: string;
  wSize?: number;
  hSize?: number;
  active: boolean;
  style?: string;
  click?: () => void;
};

export type ButtonSizeType = 'small' | 'medium' | 'large';
export type EtcSizeType = 'small' | 'medium';
export type SpeechBubbleDirectionType =
  | 'topLeft'
  | 'topMiddle'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomMiddle'
  | 'bottomRight';

export type ButtonBorderType = {
  position: 'top' | 'left' | 'right' | 'bottom' | 'x' | 'y';
  size: ButtonSizeType;
};

export type ButtonClickPropsType = {
  key: string;
  content: string;
};

export type ButtonPropsType = {
  size: ButtonSizeType;
  bgColor: ButtonColorType;
  textColor: ButtonColorType;
  content: string;
  aboutSvgIcon?: IconPropsType;
  border?: ButtonBorderType;
  borderColor?: ButtonColorType;
  active?: boolean;
  click?: () => void;
  disable: boolean;
};

export type SpeechBubblePropsType = {
  size: EtcSizeType;
  direction: SpeechBubbleDirectionType;
  aboutSvgIcon: IconPropsType;
  content: string;
};

export type ButtonColorType =
  | 'primary'
  | 'naverGreen'
  | 'kakaoYellow'
  | 'googleGray'
  | 'white'
  | 'gray900'
  | 'gray100'
  | 'gray200'
  | 'gray400';

export type TabPropsType = {
  active: boolean;
  title: string;
  click?: (item: TabItemType) => void;
};

export type ChipPropsType = {
  size: EtcSizeType;
  active: boolean;
  content: string;
  click?: () => void;
  cancelClick: () => void;
};

export type TagPropsType = {
  size: EtcSizeType;
  content: string;
  color: ButtonColorType;
};
