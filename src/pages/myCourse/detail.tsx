import { courseAPI } from '@/api/course';
import Header from '@/components/layouts/Header';
import { AxiosError } from 'axios';
import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

const MyCourseDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const course = courseAPI();
  const mapRef = useRef(null);
  const { naver } = window;

  useEffect(() => {
    const fetchCourse = async () => {
      if (params.courseId) {
        try {
          const data = await course.getCourse(params.courseId);
          data.places.map((place) => {
            new naver.maps.Marker({
              position: new naver.maps.LatLng(Number(place.latitude), Number(place.longitude)),
              map: mapRef.current,
              title: place.placeName,
              clickable: true,
              icon: {
                content:
                  '<div style="margin: 0; display: table; padding: 0.05rem; table-layout: auto; border-radius: 2.3rem; border: 0.2rem solid #4A82EE; background: white; cursor: pointer; position: relative; z-index: 2;">' +
                  '<div style="display: table-cell; display: inline-block; width: 3rem; height: 3rem; background-image: url(Images/markerIcon.svg); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>' +
                  '<div style="max-width: 10rem; height: 0.5rem; padding: 0 1rem 0 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: table-cell; vertical-align: middle; cursor: pointer; font-size: 1rem; letter-spacing: -0.04rem; font-weight: 600; line-height: 1rem;">' +
                  place.placeName +
                  '</div>' +
                  '<span style="position: absolute; border-style: solid; border-width: 1.2rem 1rem 0 1rem; border-color: #ffffff transparent; display: block; width: 0; z-index: 1; top: 3rem; left: 1.4rem;"></span>' +
                  '<span style="position: absolute; border-style: solid; border-width: 1.2rem 1rem 0 1rem; border-color: #4A82EE transparent; display: block; width: 0; z-index: 0; top: 3.3rem; left: 1.4rem;"></span>' +
                  '</div>',
                size: new naver.maps.Size(22, 35),
                anchor: new naver.maps.Point(11, 35),
              },
            });
          });
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response) {
              if (error.response.status === 401) {
                navigate('/login', { replace: true });
              } else {
                navigate('/', { replace: true });
              }
            }
          }
        }
      } else {
        // 오류 페이지로 이동
        return;
      }
    };

    const mapOptions = {
      center: new naver.maps.LatLng(37.5666103, 126.9783882),
      logoControl: false, // 네이버 로고 표시 X
      mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
      scaleControl: false, // 지도 축척 컨트롤의 표시 여부
      tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
      zoom: 14, // 지도의 초기 줌 레벨
      zoomControl: false, // 줌 컨트롤 표시
      zoomControlOptions: { position: 9 }, // 줌 컨트롤 우하단에 배치
    };
    mapRef.current = new naver.maps.Map('map', mapOptions);

    fetchCourse();
  }, []);

  return (
    <>
      <Header />
      <div className="page mt-12">
        <div className="max-container">
          <p className="text-20 text-red-500">MyCourse detail page 입니다.</p>
          <div id="map" className="h-[100dvh] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default MyCourseDetail;
