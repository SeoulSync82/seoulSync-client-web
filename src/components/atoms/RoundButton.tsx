import SVGIcon from '@/components/atoms/SVGIcon';
import { ButtonPropsType } from '@/components/atoms/types';

const RoundButton = ({ size, bgColor, textColor, content, aboutSvgIcon }: ButtonPropsType) => {
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
    small: 'h-[36px] w-[335px] text-16',
    medium: 'h-[44px] w-[335px] text-16',
    large: 'h-[52px] w-[335px] text-16',
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

  const makeButton = () => {
    return (
      <button
        className={`flex cursor-pointer items-center justify-center rounded-lg font-bold ${sizeVariants[size]} ${textColorVariants[textColor]} ${bgColorVariants[bgColor]}`}
      >
        {makeSvgIcon()}
        <p className="ml-2">{content}</p>
      </button>
    );
  };

  return makeButton();
};
export default RoundButton;
