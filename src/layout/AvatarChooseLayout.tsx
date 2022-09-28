import React from 'react';
import styled from 'styled-components';
import left from '../../public/icon/maskLeft-icon.png';
import right from '../../public/icon/maskRight-icon.png';

function AvatarChooseStyle() {
  return (
    <>
      <Avatar>
        <AvatarTitle>음성이랑 합성할 버추얼 아바타를 선택해주세요.</AvatarTitle>
        <Test1>
          <ManButton>
            <ManButtonText>남</ManButtonText>
          </ManButton>
          <WomanButton>
            <WomanButtonText>여</WomanButtonText>
          </WomanButton>
        </Test1>
        <div>
          <VirtualAvatarText>버추얼 아바타</VirtualAvatarText>
          <VirtualAvatarContainer>
            <MaskIcon src={left} />
            <FlexBox>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </FlexBox>
            <MaskIcon src={right} />
          </VirtualAvatarContainer>
        </div>
        <Line />
        <Scroolbar>
          <div>
            <VirtualAvatarText>의상1</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon src={left} />
              <FlexBox>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </FlexBox>
              <MaskIcon src={right} />
            </VirtualAvatarContainer>
          </div>
          <div>
            <VirtualAvatarText>의상2</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon src={left} />
              <FlexBox>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </FlexBox>
              <MaskIcon src={right} />
            </VirtualAvatarContainer>
          </div>
          <div>
            <VirtualAvatarText>의상3</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon src={left} />
              <FlexBox>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
              </FlexBox>
              <MaskIcon src={right} />
            </VirtualAvatarContainer>
          </div>
        </Scroolbar>
        <SubButtonContainer>
          <SubButton>선택하기</SubButton>
        </SubButtonContainer>
      </Avatar>
    </>
  );
}

interface testCord {
  avatarData: {
    id: number;
    name: string;
    thumbNail: string;
  }
}[];

const Scroolbar = styled.div`
  height: 330px;
  overflow-y: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
`;

const VirtualAvatarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const WomanButton = styled.button`
  width: 3rem;
  height: 2.3rem;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 19, 52, 0);
  border: 1px solid #828282;
  border-radius: 5px;
`;

const WomanButtonText = styled.p`
  font-size: 16px;
  color: #dbdbdb;
`;

const ManButton = styled.button`
  width: 3rem;
  height: 2.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 8px 16px;
  margin: 0px 10px 10px 16px;
`;

const ManButtonText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Test1 = styled.div`
  display: flex;
`;

const VirtualAvatarText = styled.p`
  margin: 1rem 2.6rem;
  color: #fff;
`;

const Line = styled.div`
  border: 1px solid #bdbdbd;
  width: 31rem;
  margin: 1.5rem auto 0.6rem;
`;

const MaskIcon = styled.img`
  height: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 86%;
`;

const Box = styled.div`
  width: 6.25rem;
  height: 7.5rem;
  border: 2px solid #001334;
  border-radius: 10px;
  background-color: #fff;
`;

const AvatarTitle = styled.div`
  font-size: 18px;
  margin: 23px 0 22px 24px;
  color: #fff;
  font-weight: 400;
`;

const SubButtonContainer = styled.div`
  width: 32.5rem;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #091547;
`;

const SubButton = styled.button`
  width: 30rem;
  height: 2.5rem;
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
`;

const Avatar = styled.div`
  width: 32.5em;
`;

export default AvatarChooseStyle;
