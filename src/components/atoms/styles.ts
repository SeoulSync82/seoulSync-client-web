import { IconProps } from '@/components/atoms/SVGIcon';

export type buttonSize = 'small' | 'midium' | 'large';

export type buttonStyle = {
  size: buttonSize;
  bgColor: RoundButtonBgColorType;
  textColor: RoundButtonTextColorType;
  content: string;
  aboutSvgIcon: IconProps;
};

export type RoundButtonBgColorType = 'naverGreen' | 'kakaoYellow' | 'googleGray';
export type RoundButtonTextColorType = 'white' | 'gray900';
