import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectIcon from '/historyProject-icon.png';
import videoIcon from '/historyVideo-icon.png';
import myInfo from '/myInfo-icon.png';

function UserNavbarLayout() {
  return (
    <Container>
      {/* 히스토리링크 */}
      <HistoryLinkBox>
        <LinkButton to="/" marginbottom="1.4rem">
          <Image src={projectIcon} alt="프로젝트히스토리아이콘" />
        </LinkButton>
        <LinkButton to="/">
          <Image src={videoIcon} alt="영상히스토리아이콘" />
        </LinkButton>
      </HistoryLinkBox>
      {/* 내계정 */}
      <div>
        <LinkButton to="/">
          <Image src={myInfo} alt="사용자계정정보아이콘" />
        </LinkButton>
      </div>
    </Container>
  );
}

interface LinkButtonProps {
  marginbottom?: string;
}

const Container = styled.div`
  background-color: #e8ecf1;
  width: 5rem;
  height: 62.5rem;
  position: fixed;
  padding: 0 1.5rem;
`;
const HistoryLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.6rem 0 50.1rem 0;
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
