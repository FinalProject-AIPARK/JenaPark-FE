import React from 'react';
import styled from 'styled-components';
import mic from '/voiceMic-icon.png';
import people from '/avatarPeople-icon.png';

function WorkingNavbarLayout({ buttonHandler, iconBg }: WorkingNavbarProps) {
  return (
    <Container>
      <TitleBox>
        <span>Task</span>
      </TitleBox>
      <ButtonBox>
        <Button
          onClick={buttonHandler}
          marginbottom="1.5rem"
          backColor={iconBg ? '#80A4FF' : 'transparent'}
        >
          <Image src={mic} alt="보이스작업창아이콘" />
        </Button>
        <Button onClick={buttonHandler} backColor={iconBg ? 'transparent' : '#80A4FF'}>
          <Image src={people} alt="아바타작업창아이콘" />
        </Button>
        <Background backColor="#002868" radius="0.63rem" />
      </ButtonBox>
      <Background backColor="#001334" />
    </Container>
  );
}

interface WorkingNavbarProps {
  buttonHandler: () => void;
  iconBg: boolean;
}
interface ButtonProps {
  marginbottom?: string;
  backColor?: string;
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
  align-items: center;
  position: absolute;
  right: 0;
`;
const TitleBox = styled.div`
  margin-top: 1rem;
  font-weight: 900;
  color: #fff;
`;
const ButtonBox = styled.div`
  width: 3rem;
  position: relative;
  margin-top: 0.25rem;
  padding: 1rem 0.5rem;
`;
const Button = styled.button<ButtonProps>`
  background-color: ${({ backColor }) => backColor};
  width: 3.1rem;
  height: 3.1rem;
  margin-bottom: ${({ marginbottom }) => marginbottom};
  border: none;
  border-radius: 50%;
`;
const Image = styled.img`
  width: 2rem;
`;

export default WorkingNavbarLayout;
