import React from 'react';
import styled from 'styled-components';
import question from '/questionMark-icon.png';

function HistoryVideoLayout({ videoList, guideText, guideHandler }: HistoryVideoProps) {
  const dummy = [
    {
      videoId: 1,
      title: '32번 프로젝트',
      backgroundUrl:
        'https://img9.yna.co.kr/etc/inner/KR/2022/09/01/AKR20220901103800005_01_i_P2.jpg',
      avatarUrl: 'https://jenapark.s3.ap-northeast-2.amazonaws.com/avatar/ming/ming_hat_2.png',
      videoFileUrl: '제작 중',
      createDate: '2022-10-07T06:00:16',
    },
  ];
  return (
    <Container>
      <TitleBox>
        <TextStyle size="1.5rem" weight="700" color="#fff">
          영상 히스토리
        </TextStyle>
        <img
          src={question}
          alt="프로젝트 히스토리 도움말 아이콘"
          onMouseEnter={() => guideHandler(true, 1)}
          onMouseLeave={() => guideHandler(false, 1)}
          style={{ width: '1.7rem', marginLeft: '1rem' }}
        />
        {guideText ? (
          <GuideTextBox>
            <span>
              프로젝트에서 생성한 영상이 5개까지 노출됩니다. 그 이전 영상은 자동 삭제됩니다.
              <br />
              다운로드 버튼을 클릭하면 영상 확인과 다운로드를 받을 수 있습니다.
            </span>
          </GuideTextBox>
        ) : null}
      </TitleBox>
      <ProjectListBox>
        <ListBox>
          {dummy.map((item) => (
            <ProjectCard>
              <ThumbnailVideo>
                <ThumnailImg src={item.backgroundUrl} alt="배경 썸네일" />
                <ThumnailImg src={item.avatarUrl} alt="아바타 썸네일" />
                <VideoTitleBox>
                  <TextStyle size="1.13rem" color="#fff" marginTop="0.28rem">
                    {item.title}
                  </TextStyle>
                  <TitleBackground></TitleBackground>
                </VideoTitleBox>
              </ThumbnailVideo>
              <VideoDateBox>
                <TextStyle>{item.createDate.split('T')[0]}</TextStyle>
                <TextStyle marginTop="0.5rem">
                  {item.createDate.slice(11, 13) + '시 ' + item.createDate.slice(14, 16) + '분'}
                </TextStyle>
              </VideoDateBox>
              <Button>다운로드</Button>
            </ProjectCard>
          ))}
        </ListBox>
        <BackgroundBox></BackgroundBox>
      </ProjectListBox>
    </Container>
  );
}

interface HistoryVideoProps {
  videoList: {
    videoId: number;
    title: string;
    thumbnail: null;
    videoFileUrl: string;
    createDate: string;
  }[];
  guideText: boolean;
  guideHandler: (isOn: boolean, index: number) => void;
}
interface TextStyleProps {
  size?: string;
  weight?: string;
  color?: string;
  lineH?: string;
  marginTop?: string;
  marginRight?: string;
  display?: string;
}

const Container = styled.div`
  width: 78rem;
  margin-top: 2.93rem;
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.62rem;
`;
const GuideTextBox = styled.div`
  background-color: #fff;
  position: absolute;
  top: -3.8rem;
  left: 10.8rem;
  padding: 0.6rem;
  font-size: 0.81rem;
  font-weight: 500;
  line-height: 1.1rem;
  color: #333;
  border-radius: 0.6rem;
`;
const TextStyle = styled.span<TextStyleProps>`
  display: ${({ display }) => (display ? display : 'inline-block')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '0')};
  font-size: ${({ size }) => (size ? size : '1rem')};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  color: ${({ color }) => (color ? color : '#000')};
  line-height: ${({ lineH }) => (lineH ? lineH : 'inherit')};
  white-space: nowrap;
`;
const ProjectListBox = styled.div`
  width: 100%;
  height: 18.75rem;
  position: relative;
`;
const ListBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 1rem;
`;
const ProjectCard = styled.div`
  width: 14rem;
  height: 16.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;
  :last-child {
    margin-right: 0;
  }
`;
const ThumbnailVideo = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 0.63rem;
  overflow: hidden;
`;
const ThumnailImg = styled.img`
  height: 100%;
  position: absolute;
`;
const VideoTitleBox = styled.div`
  width: 100%;
  height: 2.19rem;
  position: relateive;
  margin-top: auto;
  text-align: center;
  z-index: 1;
`;
const TitleBackground = styled.div`
  background-color: #000;
  width: 100%;
  height: inherit;
  position: absolute;
  bottom: 0;
  opacity: 0.6;
  z-index: -1;
`;
const VideoDateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;
const Button = styled.button`
  background-color: #fff;
  width: 100%;
  height: 2.5rem;
  font-size: 1.13rem;
  font-weight: 500;
  border-radius: 0.63rem;
`;
const BackgroundBox = styled.div`
  background-color: #fff;
  width: 100%;
  height: 18.75rem;
  position: absolute;
  left: 0;
  border-radius: 0.63rem;
  opacity: 0.6;
  z-index: -999;
`;

export default HistoryVideoLayout;
