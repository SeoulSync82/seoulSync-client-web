import { useEffect, useState } from 'react';
import SVGIcon, { IconType } from '../atoms/SVGIcon';
import { useLocation, useNavigate } from 'react-router-dom';

type menuType = {
  key: IconType;
  name: string;
  size: number;
};

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuList: Array<menuType> = [
    {
      key: 'home',
      name: '홈',
      size: 24,
    },
    {
      key: 'myCourse',
      name: '내 코스',
      size: 24,
    },
    {
      key: 'AIRecommend',
      name: 'AI 추천',
      size: 66,
    },
    {
      key: 'community',
      name: '커뮤니티',
      size: 24,
    },
    {
      key: 'profile',
      name: '마이페이지',
      size: 24,
    },
  ];

  const onClickMenu = (menu: string) => {
    switch (menu) {
      case 'home':
        navigate('/');
        break;
      case 'myCourse':
        navigate('/myCourse');
        break;
      case 'AIRecommend':
        navigate('/AIRecommend');
        break;
      case 'community':
        navigate('/community');
        break;
      case 'profile':
        navigate('/profile');
        break;
    }
  };

  useEffect(() => {
    setActiveMenu(pathname.replace('/', '') === '' ? 'home' : pathname.replace('/', ''));
  }, []);

  const makeNavigation = (): JSX.Element[] => {
    const result: JSX.Element[] = [];

    menuList.forEach((item) => {
      result.push(
        <li
          className={`group flex grow cursor-pointer flex-col items-center justify-center ${activeMenu === item.key ? 'active' : ''}`}
          key={item.key}
          onClick={() => onClickMenu(item.key)}
        >
          {item.key === 'AIRecommend' ? (
            <>
              <div className="w-fit">
                <SVGIcon name={item.key} size={item.size} active={activeMenu === item.key} />
              </div>
              <div className="mb-8 w-fit text-12 font-bold text-[#9070CF]">
                <p>{item.name}</p>
              </div>
            </>
          ) : (
            <div className="flex min-w-14 max-w-14 flex-col items-center justify-center">
              <div className="mb-1.5 w-fit">
                <SVGIcon name={item.key} size={item.size} active={activeMenu === item.key} />
              </div>
              <div className="mt-1.5 w-fit text-12 font-bold text-[#757575] group-[&.active]:text-[#353D4A]">
                <p>{item.name}</p>
              </div>
            </div>
          )}
        </li>,
      );
    });
    return result;
  };

  return (
    <nav className="h-[117px] w-full transition-all">
      <div className="fixed bottom-0 left-0 z-50 h-[70px] w-full rounded-t-[20px] bg-white shadow-[0_-4px_8px_rgba(0,0,0,0.08)]">
        <ul className="max-container flex h-full items-center justify-between py-2.5">
          {makeNavigation()}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
