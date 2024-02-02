import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SVGIcon from '../atoms/SVGIcon';

const Header = () => {
  const [activePage, setActivePage] = useState('');
  const [activePageName, setActivePageName] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActivePage(pathname.replace('/', '') === '' ? 'home' : pathname.replace('/', ''));
    switch (pathname.replace('/', '')) {
      case 'myCourse':
        setActivePageName('내 코스');
        break;
      case 'AIRecommend':
        setActivePageName('AI 추천');
        break;
      case 'community':
        setActivePageName('커뮤니티');
        break;
      case 'profile':
        setActivePageName('마이페이지');
        break;
    }
  }, []);

  const onClickPrevBtn = () => {
    navigate(-1);
  };

  const makeHeader = () => {
    if (activePage === 'home') {
      return (
        <>
          <SVGIcon style="w-[120px] h-[50px]" name="menuLogo" active={false} />
          <div className="flex max-w-[68px]">
            <SVGIcon style="mr-2" size={30} name="alarmIcon" active={false} />
            <SVGIcon name="searchIcon" size={30} active={false} />
          </div>
        </>
      );
    } else {
      return (
        <div className="relative flex size-full items-center">
          <SVGIcon name="leftArrowIcon" size={30} active={false} click={onClickPrevBtn} />
          <p className="absolute left-1/2 top-1/2 max-h-[48px] max-w-[50%] -translate-x-1/2 -translate-y-1/2  text-16 font-bold text-[#101010]">
            {activePageName}
          </p>
        </div>
      );
    }
  };

  return (
    <nav
      className={
        activePage === 'home'
          ? 'absolute left-0 top-0 flex h-[57px] w-full items-center justify-between px-5'
          : 'absolute left-0 top-0 flex h-12 w-full items-center px-5 text-center'
      }
    >
      {makeHeader()}
    </nav>
  );
};

export default Header;
