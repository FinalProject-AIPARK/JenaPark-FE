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
      <div>
        <GuideTitleBox>
          <ImageStyle src={checkmark} alt="작업단계가이드아이콘" />
          <TextStyle>Check</TextStyle>
        </GuideTitleBox>
        <div>
          <div>
            <ImageStyle src={textIcon} alt="텍스트입력아이콘" />
          </div>
          <div>
            <ImageStyle src={mic} alt="음성수정아이콘" />
          </div>
          <div>
            <ImageStyle src={people} alt="아바타작업단계아이콘" />
          </div>
        </div>
      </div>
      {/* 히스토리링크 */}
      <HistoryLinkBox>
        <LinkButton to="/" marginbottom="1.4rem">
          <Image src={projectIcon} alt="프로젝트히스토리아이콘" />
        </LinkButton>
      </HistoryLinkBox>
      {/* 내계정 */}
      <MyInfoBox>
        <LinkButton to="/">
          <Image src={myInfo} alt="사용자계정정보아이콘" />
        </LinkButton>
      </MyInfoBox>
      <Background></Background>
    </Container>
  );
}

interface LinkButtonProps {
  marginbottom?: string;
}
interface ImageStyleProps {
  width?: string;
}
const Background = styled.div`
  background-color: #001334;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 50%;
  z-index: -1;
`;
const Container = styled.div`
  width: 5rem;
  height: inherit;
  position: absolute;
`;
const LogoBox = styled.div`
  margin: 1rem 0.62rem;
`;
const ImageStyle =
  styled.img <
  ImageStyleProps >
  `
  width: ${({ width }) => (width ? width : '1.5rem')};
`;
const GuideTitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const TextStyle = styled.span`
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: -0.06rem;
  color: #fff;
`;
const HistoryLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.6rem 0 50.1rem 0;
`;
const MyInfoBox = styled.div`
  text-align: center;
`;
const LinkButton =
  styled(Link) <
  LinkButtonProps >
  `
  margin-bottom: ${({ marginbottom }) => marginbottom};
`;
const Image = styled.img`
  width: 2rem;
`;

export default UserNavbarLayout;
