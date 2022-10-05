import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // log out
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const myPageClick = () => {
    navigate('/mypage');
  };
  const logInClick = () => {
    navigate('/signin');
  };
  const logOutClick = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    navigate('/signin');
  };

  return (
    <>
      <h1>랜딩페이지</h1>
      <button onClick={logInClick}>로그인</button>
      <button onClick={logOutClick}>로그아웃</button>
      <button onClick={myPageClick}>내 정보</button>
    </>
  );
};

export default Home;
