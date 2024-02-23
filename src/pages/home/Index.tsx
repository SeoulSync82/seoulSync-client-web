import { userAPI } from '@/api/user';
import Header from '@/components/layouts/Header';
import Navigation from '@/components/layouts/Navigation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      localStorage.setItem('eid_access_token', token);
      navigate('/');
    }
    const user = userAPI();
    user.getUserProfile();
  }, []);

  return (
    <>
      <Header />
      <div className="page mt-[57px]">
        <div className="max-container">
          <p className="text-20 text-red-500">Home page 입니다.</p>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Home;
