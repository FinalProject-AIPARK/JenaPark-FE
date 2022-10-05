import LandingPage from '@/components/LandingPage';
import styled from 'styled-components';


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

    <HomeContainer>
      <LandingPage />
    </HomeContainer>

  );
};

const HomeContainer = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-right: 15;
`;

export default Home;
