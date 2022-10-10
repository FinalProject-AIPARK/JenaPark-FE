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

function UserNavbarLayout({
  projectStep,
  userInfoData,
  myInfoButton,
  myInfoBtn,
  logoutHanlder,
}: UserNavbarProps) {
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
            <ImageStyle
              src={textIcon}
              alt="텍스트입력아이콘"
              opacity={projectStep.checkText ? '1' : '0.4'}
            />
            {projectStep.checkText ? <DoneProcess /> : null}
          </WorkingView>
          <WorkingView>
            <ImageStyle
              src={mic}
              alt="음성수정아이콘"
              opacity={projectStep.checkAudio ? '1' : '0.4'}
            />
            {projectStep.checkAudio ? <DoneProcess /> : null}
          </WorkingView>
          <WorkingView>
            <ImageStyle
              src={people}
              alt="아바타작업단계아이콘"
              opacity={projectStep.checkAvatar ? '1' : '0.4'}
            />
            {projectStep.checkAvatar ? <DoneProcess /> : null}
          </WorkingView>
          <Background backColor="#002868" radius="0.63rem"></Background>
        </GuideViewBox>
      </GuideBox>
      {/* 히스토리링크 */}
      <HistoryLinkBox>
        <LinkButton to="/history" marginbottom="1.4rem">
          <ImageStyle src={projectIcon} alt="프로젝트히스토리아이콘" />
        </LinkButton>
      </HistoryLinkBox>
      {/* 내계정 */}
      <MyInfoBox>
        <Button>
          <ImageStyle src={myInfo} alt="사용자계정정보아이콘" ref={myInfoBtn} />
        </Button>
        {myInfoButton ? (
          <MyInfoInnerBox>
            <UserNameBox>
              <MyInfoText size="1rem" borderBottom="1.6px solid #555">
                {userInfoData}
              </MyInfoText>
            </UserNameBox>
            <LinkButton to="/account" marginbottom="0.6rem">
              <MyInfoText>계정 정보</MyInfoText>
            </LinkButton>
            <Button
              onClick={(event) => {
                logoutHanlder();
                event.stopPropagation();
              }}
            >
              <MyInfoText>로그아웃</MyInfoText>
            </Button>
          </MyInfoInnerBox>
        ) : null}
      </MyInfoBox>
      <Background backColor="#001334"></Background>
    </Container>
  );
}

interface UserNavbarProps {
  projectStep: {
    checkText: boolean;
    checkAudio: boolean;
    checkAvatar: boolean;
  };
  userInfoData: string;
  myInfoButton: boolean;
  myInfoBtn: React.MutableRefObject<null>;
  logoutHanlder: () => void;
}
interface LinkButtonProps {
  marginbottom?: string;
}
interface ImageStyleProps {
  width?: string;
  opacity?: string;
}
interface BackgroundProps {
  backColor: string;
  radius?: string;
}
interface MyInfoTextProps {
  size?: string;
  borderBottom?: string;
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
  opacity: ${({ opacity }) => (opacity ? opacity : '1')};
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
  position: relative;
  margin-bottom: 1.62rem;
  text-align: center;
`;
const LinkButton = styled(Link)<LinkButtonProps>`
  margin-bottom: ${({ marginbottom }) => marginbottom};
`;
const MyInfoInnerBox = styled.div`
  background-color: #fff;
  width: 6.4rem;
  height: 5.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -5.8rem;
  right: -5.4rem;
  padding: 0.6rem 0.2rem;
  border-radius: 0.63rem;
  box-shadow: 0 0 0.6rem 0 #555;
`;
const UserNameBox = styled.div`
  width: 5rem;
  height: 1.3rem;
  margin-bottom: 0.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MyInfoText = styled.span<MyInfoTextProps>`
  font-size: ${({ size }) => (size ? size : '0.87rem')};
  border-bottom: ${({ borderBottom }) => (borderBottom ? borderBottom : '0')};
`;
const Button = styled.button`
  background-color: transparent;
`;

export default UserNavbarLayout;
