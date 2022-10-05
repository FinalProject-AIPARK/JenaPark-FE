import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

function LandingPageStyle() {
  return (
    <>
      <Title>본 서비스로 시공간을 초월하세요</Title>
      <SubTitle>
        본 서비스는 인공지능과 영상 기술의 융햡을 통해 <br />
        영상 안에서 시간과 공간, 능력을 초월하기 위한 서비스입니다
      </SubTitle>
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
    </>
  );
}

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

export default LandingPageStyle;
