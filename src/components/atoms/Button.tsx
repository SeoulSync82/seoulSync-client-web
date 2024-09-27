import SVGIcon from '@/components/atoms/SVGIcon';
import { ButtonPropsType } from '@/components/atoms/types';

const Button = ({
  size,
  bgColor,
  textColor,
  content,
  aboutSvgIcon,
  border,
  borderColor,
  active,
  click,
  disable,
}: ButtonPropsType) => {
  const bgColorVariants = {
    primary: 'bg-primary-500',
    naverGreen: 'bg-naver',
    kakaoYellow: 'bg-kakao',
    googleGray: 'bg-google',
    white: 'bg-white',
    gray900: 'bg-gray-900',
    gray100: 'bg-gray-100',
    gray200: 'bg-gray-200',
    gray400: 'bg-gray-400',
  };

  const textColorVariants = {
    primary: 'text-primary-500',
    naverGreen: 'text-naver',
    kakaoYellow: 'text-kakao',
    googleGray: 'text-google',
    white: 'text-white',
    gray900: 'text-gray-900',
    gray100: 'text-gray-100',
    gray200: 'text-gray-200',
    gray400: 'text-gray-400',
  };

  const sizeVariants = {
    small: 'min-h-[46px] text-14',
    medium: 'min-h-[46px] text-16',
    large: 'min-h-[76px] text-20',
  };

  const borderColorVariants = {
    primary: 'border-primary-500',
    naverGreen: 'border-naver',
    kakaoYellow: 'border-kakao',
    googleGray: 'border-google',
    white: 'border-white',
    gray900: 'border-gray-900',
    gray100: 'border-gray-100',
    gray200: 'border-gray-200',
    gray400: 'border-gray-400',
  };

  const borderVariants = {
    top: {
      small: 'border-t-[1px]',
      medium: 'border-t-4',
      large: 'border-t-6',
    },
    left: {
      small: 'border-l-[1px]',
      medium: 'border-t-4',
      large: 'border-t-6',
    },
    right: {
      small: 'border-t-[1px]',
      medium: 'border-t-4',
      large: 'border-t-6',
    },
    bottom: {
      small: 'border-t-[1px]',
      medium: 'border-t-4',
      large: 'border-t-6',
    },
    x: {
      small: 'border-x-[1px]',
      medium: 'border-x-4',
      large: 'border-x-6',
    },
    y: {
      small: 'border-y-[1px]',
      medium: 'border-y-4',
      large: 'border-y-6',
    },
  };

  const makeSvgIcon = () => {
    if (aboutSvgIcon) {
      return (
        <SVGIcon
          name={aboutSvgIcon.name}
          wSize={aboutSvgIcon.wSize}
          hSize={aboutSvgIcon.hSize}
          active={aboutSvgIcon.active}
          color={aboutSvgIcon.color}
          click={aboutSvgIcon.click}
          style={aboutSvgIcon.style}
        />
      );
    } else {
      return <></>;
    }
  };

  const makeDisableStyle = disable ? 'bg-gray-300' : `${bgColorVariants[bgColor]}`;

  const makeButton = () => {
    return (
      <button
        className={`flex w-full cursor-pointer items-center justify-center ${makeDisableStyle} ${active ? 'font-bold' : ''} ${border ? borderVariants[border.position][border.size] : ''} ${borderColor ? borderColorVariants[borderColor] : ''} ${sizeVariants[size]} ${textColorVariants[textColor]}`}
        disabled={disable}
        onClick={() => {
          click ? click() : false;
        }}
      >
        {makeSvgIcon()}
        <p className="ml-2">{content}</p>
      </button>
    );
  };

  return makeButton();
};
export default Button;
