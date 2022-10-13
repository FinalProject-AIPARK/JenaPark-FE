import { Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { memo } from 'react';

const LandingPageStyle = memo(() => {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');

  return (
    <LandingContainer>
      <Title>본 서비스로 시공간을 초월하세요</Title>
      <SubTitle>
        본 서비스는 인공지능과 영상 기술의 융햡을 통해 <br />
        영상 안에서 시간과 공간, 능력을 초월하기 위한 서비스입니다
      </SubTitle>
      {accessToken && refreshToken ? (
        <Link to="/history">
          <StartButton>서비스 체험하기 →</StartButton>
        </Link>
      ) : (
        <Link to="/signin">
          <StartButton>서비스 체험하기 →</StartButton>
        </Link>
      )}
      <ContentContainer>
        <ContentBox>
          <ContentNumber>01</ContentNumber>
          <ContentTitle>News</ContentTitle>
          <ContentText>
            뉴스영상을 빠르고 쉽게 만들어
            <br /> 정보를 전달해보세요.
          </ContentText>
        </ContentBox>
        <ContentBox>
          <ContentNumber>02</ContentNumber>
          <ContentTitle>IR/PR</ContentTitle>
          <ContentText>
            기업에서 필요한 IR/PR 영상을
            <br />
            만들어보세요.
          </ContentText>
        </ContentBox>
        <VideoContainer>
          <YouTube
            videoId="hUgGblPDVxI"
            opts={{
              width: '600',
              height: '374',
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
                loop: 1,
                playlist: 'hUgGblPDVxI',
                controls: 0,
                end: 20,
                fs: 1,
                disablekb: 1,
                mute: 1,
              },
            }}
          />
        </VideoContainer>
      </ContentContainer>
    </LandingContainer>
  );
});

const LandingContainer = styled.div`
  padding-bottom: 11rem;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  color: #fff;
  font-size: 3.75rem;
  margin-top: 8%;
  line-height: 5.4375rem;
`;
const SubTitle = styled.div`
  color: #fff;
  font-size: 1.875rem;
  margin-top: 1rem;
  line-height: 2.6875rem;
`;
const StartButton = styled.div`
  display: inline-block;
  color: #fff;
  width: 11.875rem;
  height: 2rem;
  border: 0.0625rem solid #fff;
  border-radius: 14.5rem;
  font-size: 1.25rem;
  padding: 1.125rem 3.125rem;
  margin-left: 4%;
  margin-top: 2.5625rem;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
`;
const ContentContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 13.75rem;
  margin-top: 8%;
`;
const VideoContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0%;
`;
const ContentBox = styled.div`
  position: absolute;
  margin-left: 3.375rem;
  margin-top: 2.2625rem;

  &:nth-child(2) {
    left: 25%;
  }

  &:last-child {
    left: 50%;
  }
`;
const ContentNumber = styled.div`
  color: #ccffff;
  font-weight: 500;
  margin-bottom: 2.4rem;
`;
const ContentTitle = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;
const ContentText = styled.div`
  line-height: 1.4375rem;
  color: #fff;
`;

export default LandingPageStyle;
