import LandingPage from '@/components/landingPage';
import styled from 'styled-components';

const Home = () => {
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
