import Button from '@/components/atoms/RoundButton';
import SVGIcon from '@/components/atoms/SVGIcon';
import Header from '@/components/layouts/Header';
import SpeechBubble from '@/components/atoms/SpeechBubble';
import config from '@/config';
// import { setAlertModal } from '@/reducers/modalReducer';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const onClickKaKao = () => {
  //   dispatch(
  //     setAlertModal({
  //       opened: true,
  //       data: {
  //         title: '앗 ..로그인에 실패했어요',
  //         message: '같은 문제가 반복된다면 앱을 꼈다 켜거나 삭제하고 다시 설치해주세요.',
  //       },
  //     }),
  //   );
  // };

  return (
    <>
      <Header />
      <div className="page mt-12">
        <div className="max-container flex h-[88dvh] items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <SVGIcon name="seoulSyncLogo" wSize={169} hSize={169} active={false} />
            <div className="mb-3 mt-[113px]">
              <SpeechBubble
                size="small"
                direction="bottomLeft"
                aboutSvgIcon={{ name: 'downTriangle', active: false, wSize: 10, hSize: 10 }}
                content="⚡️ 로그인하고 나에게 맞는 코스를 추천 받아보세요!"
              />
            </div>
            <Link to={`${config.api.default}/user/login/kakao`} className="mb-3">
              <Button
                bgColor="kakaoYellow"
                aboutSvgIcon={{ name: 'kakaoIcon', active: false, wSize: 22, hSize: 22 }}
                content="카카오톡으로 계속하기"
                textColor="gray900"
                size="large"
              />
            </Link>
            <Link to={`${config.api.default}/user/login/naver`} className="mb-3">
              <Button
                bgColor="naverGreen"
                aboutSvgIcon={{ name: 'naverIcon', active: false, wSize: 22, hSize: 22 }}
                content="네이버로 계속하기"
                textColor="white"
                size="large"
              />
            </Link>
            <Link to={`${config.api.default}/user/login/google`} className="mb-14">
              <Button
                bgColor="googleGray"
                aboutSvgIcon={{ name: 'googleIcon', active: false, wSize: 22, hSize: 22 }}
                content="구글로 계속하기"
                textColor="gray900"
                size="large"
              />
            </Link>
            <p
              className="cursor-pointer text-14 font-semibold text-[#858B93] underline underline-offset-4"
              onClick={() => {
                navigate(-1);
              }}
            >
              건너뛰기
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
