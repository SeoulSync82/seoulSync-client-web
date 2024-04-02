import { TagPropsType } from '@/components/atoms/types';

const Tag = ({ size, content, color }: TagPropsType) => {
  const sizeVariants = {
    small: 'h-[26px] text-14',
    medium: 'h-[30px] text-18',
  };

  const bgColorVariants = {
    primary: 'text-primary-500 bg-primary-50',
    naverGreen: 'text-naver',
    kakaoYellow: 'text-kakao',
    googleGray: 'text-google',
    white: 'text-white',
    gray900: 'text-gray-900',
    gray100: 'text-gray-400 bg-gray-100',
    gray200: 'text-gray-200',
    gray400: 'text-gray-400',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-[50px]  ${bgColorVariants[color]} ${sizeVariants[size]} w-full font-semibold`}
    >
      <p>{content}</p>
    </div>
  );
};
export default Tag;
