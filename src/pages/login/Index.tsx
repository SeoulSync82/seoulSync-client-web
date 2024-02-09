import SVGIcon from '@/components/atoms/SVGIcon';
import Header from '@/components/layouts/Header';
import { setAlertModal } from '@/reducers/modalReducer';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const onClickKaKao = () => {
    dispatch(
      setAlertModal({
        opened: true,
        data: {
          title: '앗 ..로그인에 실패했어요',
          message: '같은 문제가 반복된다면 앱을 꼈다 켜거나 삭제하고 다시 설치해주세요.',
        },
      }),
    );
  };

  return (
    <>
      <Header />
      <div className="page mt-12">
        <div className="max-container flex h-[88dvh] items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <SVGIcon name="seoulSyncLogo" wSize={169} hSize={169} active={false} />
            <div className="relative mb-3 mt-[113px] h-[41px] w-[282px]">
              <div className="flex h-[34px] w-full items-center justify-center rounded-2xl text-12 font-semibold text-[#101010] shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
                <p>⚡️ 로그인하고 나에게 맞는 코스를 추천 받아보세요!</p>
              </div>
              <SVGIcon
                style="absolute left-[75px] bottom-0"
                name="downTriangle"
                wSize={10}
                hSize={10}
                active={false}
              />
            </div>
            <div
              className="mb-3 flex h-[52px] w-[335px] cursor-pointer items-center justify-center rounded-lg bg-[#F5DA35] text-15 font-semibold text-[#101010]"
              onClick={() => onClickKaKao()}
            >
              <SVGIcon name="kakaoIcon" wSize={22} hSize={22} active={false} />
              <p className="ml-2">카카오톡으로 계속하기</p>
            </div>
            <div className="mb-3 flex h-[52px] w-[335px] cursor-pointer items-center justify-center rounded-lg bg-[#4DA524] text-15 font-semibold text-white">
              <SVGIcon name="naverIcon" wSize={22} hSize={22} active={false} />
              <p className="ml-2">네이버로 계속하기</p>
            </div>
            <div className="mb-[70px] flex h-[52px] w-[335px] cursor-pointer items-center justify-center rounded-lg bg-[#F3F3F3] text-15 font-semibold text-[#101010]">
              <SVGIcon name="googleIcon" wSize={22} hSize={22} active={false} />
              <p className="ml-2">구글로 계속하기</p>
            </div>
            <p className="cursor-pointer text-14 font-semibold text-[#858B93] underline underline-offset-4">
              건너뛰기
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
