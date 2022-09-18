import React from 'react';
import styled from 'styled-components';
import mic from '/voiceMic-icon.png';
import people from '/avatarPeople-icon.png';

function WorkingNavbarLayout() {
  return (
    <Container>
      <ButtonBox>
        <Button marginbottom="1.5rem">
          <Image src={mic} alt="보이스작업창아이콘" />
        </Button>
        <Button>
          <Image src={people} alt="아바타작업창아이콘" />
        </Button>
      </ButtonBox>
    </Container>
  );
}

interface ButtonProps {
  marginbottom?: string;
}

const Container = styled.div`
  background-color: #e8ecf1;
  width: 5rem;
  height: 62.5rem;
  position: fixed;
  right: 0;
  padding: 0 1.5rem;
`;
const ButtonBox = styled.div`
  margin-top: 2.4rem;
  text-align: center;
`;
const Button =
  styled.button <
  ButtonProps >
  `
  background-color: #fff;
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
