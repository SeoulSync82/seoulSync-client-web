import { ChipPropsType } from '@/components/atoms/types';
import SVGIcon from '@/components/atoms/SVGIcon';

const Chip = ({ size, content, active, click, cancelClick }: ChipPropsType) => {
  const sizeVariants = {
    small: 'h-[36px]',
    medium: 'h-[36px]',
  };

  const activeStyle = active
    ? 'text-primary-600 bg-primary-50 border-primary-500'
    : 'text-gray-900 bg-white border-gray-200';

  const makeSvgIcon = () => {
    if (active) {
      return (
        <SVGIcon
          name={'cancelIcon'}
          wSize={16}
          hSize={16}
          active={false}
          click={cancelClick}
          color="#805BC8"
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <div
      className={`flex items-center justify-center rounded-[20px] border-[1.5px] p-2.5 ${sizeVariants[size]} ${activeStyle}`}
    >
      <p className="text-14 font-semibold" onClick={click}>
        {content}
      </p>

      {makeSvgIcon()}
    </div>
  );
};
export default Chip;
