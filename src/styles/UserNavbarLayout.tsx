import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/projectCorLogo-icon.png';
import projectIcon from '/historyProject-icon.png';
import people from '/avatarPeople-icon.png';
import checkmark from '/checkmark-icon.png';
import textIcon from '/text-icon.png';
import mic from '/voiceMic-icon.png';
import myInfo from '/myInfo-icon.png';

function UserNavbarLayout() {
  return (
    <Container>
      <LogoBox>
        <ImageStyle src={logo} alt="기업로고" width="3.75rem" />
      </LogoBox>
      <GuideBox>
        <GuideTitleBox>
          <ImageStyle src={checkmark} alt="작업단계가이드아이콘" />
          <TextStyle>Check</TextStyle>
        </GuideTitleBox>
        <GuideViewBox>
          <WorkingView>
            <ImageStyle src={textIcon} alt="텍스트입력아이콘" />
            <DoneProcess />
          </WorkingView>
          <WorkingView>
            <ImageStyle src={mic} alt="음성수정아이콘" />
          </WorkingView>
          <WorkingView>
            <ImageStyle src={people} alt="아바타작업단계아이콘" />
          </WorkingView>
          <Background backColor="#002868" radius="0.63rem"></Background>
        </GuideViewBox>
      </GuideBox>
      {/* 히스토리링크 */}
      <HistoryLinkBox>
        <LinkButton to="/" marginbottom="1.4rem">
          <ImageStyle src={projectIcon} alt="프로젝트히스토리아이콘" />
        </LinkButton>
      </HistoryLinkBox>
      {/* 내계정 */}
      <MyInfoBox>
        <LinkButton to="/">
          <ImageStyle src={myInfo} alt="사용자계정정보아이콘" />
        </LinkButton>
      </MyInfoBox>
      <Background backColor="#001334"></Background>
    </Container>
  );
}

interface LinkButtonProps {
  marginbottom?: string;
}
interface ImageStyleProps {
  width?: string;
}
interface BackgroundProps {
  backColor: string;
  radius?: string;
}
const Background = styled.div<BackgroundProps>`
  background-color: ${({ backColor }) => backColor};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: ${({ radius }) => (radius ? radius : 'none')};
  opacity: 50%;
  z-index: -2;
`;
const Container = styled.div`
  width: 5rem;
  height: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;
`;
const LogoBox = styled.div`
  margin: 1rem 0.62rem;
`;
const ImageStyle = styled.img<ImageStyleProps>`
  width: ${({ width }) => (width ? width : '1.5rem')};
`;
const GuideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GuideTitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const GuideViewBox = styled.div`
  width: 3rem;
  position: relative;
  margin-top: 0.25rem;
  padding: 1rem 0.5rem;
`;
const WorkingView = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const DoneProcess = styled.div`
  background-color: #80a4ff;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  filter: blur(0.93rem);
  z-index: -1;
`;
const TextStyle = styled.span`
  display: inline-block;
  margin-top: 0.16rem;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: -0.06rem;
  color: #fff;
`;
const HistoryLinkBox = styled.div`
  flex-grow: 1;
  margin: 1.88rem 0;
  text-align: center;
`;
const MyInfoBox = styled.div`
  margin-bottom: 1.62rem;
  text-align: center;
`;
const LinkButton = styled(Link)<LinkButtonProps>`
  margin-bottom: ${({ marginbottom }) => marginbottom};
`;

export default UserNavbarLayout;
