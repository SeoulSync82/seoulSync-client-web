import { speechBubblePropsType } from '@/components/atoms/types';
import SVGIcon from '@/components/atoms/SVGIcon';

const SpeechBubble = ({ size, direction, aboutSvgIcon, content }: speechBubblePropsType) => {
  const sizeVariants = {
    small: { parent: 'h-[41px] w-[282px]', child: 'h-[34px] text-12' },
    medium: { parent: 'h-[41px] w-[323px]', child: '' },
  };

  const directionVariants = {
    topLeft: 'rotate-180 left-[50px] top-0 -translate-y-2',
    topMiddle: 'rotate-180 left-[50%] top-0 -translate-x-1/2 -translate-y-2',
    topRight: 'rotate-180 right-[50px] top-0 -translate-y-2',
    bottomLeft: 'left-[50px] bottom-0',
    bottomMiddle: 'left-[50%] bottom-0 -translate-x-1/2',
    bottomRight: 'right-[50px] bottom-0',
  };

  return (
    <div className={`relative ${sizeVariants[size].parent}`}>
      <div
        className={`flex w-full items-center justify-center rounded-2xl font-semibold text-[#101010] shadow-[2px_2px_8px_rgba(0,0,0,0.1)] ${sizeVariants[size].child}`}
      >
        <p>{content}</p>
      </div>
      <SVGIcon
        style={`absolute ${directionVariants[direction]}`}
        name={aboutSvgIcon.name}
        wSize={aboutSvgIcon.wSize}
        hSize={aboutSvgIcon.hSize}
        active={false}
      />
    </div>
  );
};
export default SpeechBubble;
