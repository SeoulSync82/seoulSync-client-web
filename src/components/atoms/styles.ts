import { IconPropsType } from '@/components/atoms/SVGIcon';

export type buttonSizeType = 'small' | 'midium' | 'large';
export type speechBubbleSizeType = 'small' | 'midium';
export type speechBubbleDirectionType =
  | 'topLeft'
  | 'topMiddle'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomMiddle'
  | 'bottomRight';

export type buttonStyleType = {
  size: buttonSizeType;
  bgColor: RoundButtonBgColorType;
  textColor: RoundButtonTextColorType;
  content: string;
  aboutSvgIcon: IconPropsType;
};

export type speechBubbleStyleType = {
  size: speechBubbleSizeType;
  direction: speechBubbleDirectionType;
  aboutSvgIcon: IconPropsType;
  content: string;
};

export type RoundButtonBgColorType = 'naverGreen' | 'kakaoYellow' | 'googleGray';
export type RoundButtonTextColorType = 'white' | 'gray900';
