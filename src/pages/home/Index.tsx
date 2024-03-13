import { userAPI } from '@/api/user';
import Loader from '@/components/atoms/Loader';
import Header from '@/components/layouts/Header';
import Navigation from '@/components/layouts/Navigation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      localStorage.setItem('access_token', token);
      navigate('/');
    }

    if (localStorage.getItem('access_token') ? true : false) {
      //임시 네트워크 테스트를 위한 호출
      const user = userAPI();
      user.getUserProfile();
    }
  }, []);

  return (
    <>
      <Header />
      <div className="page relative mt-[57px]">
        <Loader />
        <div className="max-container">
          <p className="text-20 text-red-500">Home page 입니다.</p>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Home;
