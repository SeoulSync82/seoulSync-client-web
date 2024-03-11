import SVGIcon from '@/components/atoms/SVGIcon';
import { buttonPropsType } from '@/components/atoms/types';

const RoundButton = ({ size, bgColor, textColor, content, aboutSvgIcon }: buttonPropsType) => {
  const bgColorVariants = {
    naverGreen: 'bg-naver',
    kakaoYellow: 'bg-kakao',
    googleGray: 'bg-google',
    white: 'bg-white',
    gray900: 'bg-gray-900',
  };

  const textColorVariants = {
    naverGreen: 'text-naver',
    kakaoYellow: 'text-kakao',
    googleGray: 'text-google',
    white: 'text-white',
    gray900: 'text-gray-900',
  };

  const sizeVariants = {
    small: 'h-[36px] w-[335px] text-16',
    midium: 'h-[44px] w-[335px] text-16',
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
