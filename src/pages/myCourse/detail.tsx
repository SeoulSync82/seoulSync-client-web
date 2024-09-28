import Header from '@/components/layouts/Header';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

const MyCourseDetail = () => {
  const params = useParams();
  const mapRef = useRef(null);
  const { naver } = window;

  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.5666103, 126.9783882),
      logoControl: false, // 네이버 로고 표시 X
      mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
      scaleControl: true, // 지도 축척 컨트롤의 표시 여부
      tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
      zoom: 14, // 지도의 초기 줌 레벨
      zoomControl: true, // 줌 컨트롤 표시
      zoomControlOptions: { position: 9 }, // 줌 컨트롤 우하단에 배치
    };
    mapRef.current = new naver.maps.Map('map', mapOptions);
  }, []);

  return (
    <>
      <Header />
      <div className="page mt-12">
        <div className="max-container">
          <p className="text-20 text-red-500">MyCourse detail page 입니다.</p>
          <div id="map" className="h-[100dvh] w-[100dvw]"></div>
        </div>
      </div>
    </>
  );
};

export default MyCourseDetail;
