import Header from '@/components/layouts/Header';
import Navigation from '@/components/layouts/Navigation';
import { useEffect, useState } from 'react';

const MyCourseDetail = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.55017, 127.073627),
        zoom: 12,
        size: { width: viewportWidth, height: viewportHeight },
      };
      if (document.getElementById('map') !== null) {
        const mapDiv = document.getElementById('map');
        const map = new window.naver.maps.Map(mapDiv, mapOptions);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div className="page mt-12">
        <div className="max-container">
          <p className="text-20 text-red-500">MyCourse detail page 입니다.</p>
        </div>
        <div id="map" className="h-[20%] min-h-[20%] w-10"></div>
        <Navigation />
      </div>
    </>
  );
};

export default MyCourseDetail;
