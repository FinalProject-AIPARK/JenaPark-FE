import React from 'react';
import styled from 'styled-components';
import questionMark from '/questionMark-icon.png';

function ProjectInputText() {
  return (
    <Container>
      <InnerBox>
        <TitleBox>
          <TextStyle>텍스트 입력</TextStyle>
          <img
            src={questionMark}
            alt="텍스트입력 도움말 아이콘"
            style={{ width: '1.5rem', marginLeft: '0.3rem' }}
          />
        </TitleBox>
        <InputBox>
          <Textarea placeholder="음성 합성을 진행할 텍스트를 입력 해주세요." />
        </InputBox>
      </InnerBox>
    </Container>
  );
}

const Container = styled.div`
  background-color: #001334;
  width: 49.75rem;
  height: 25.75rem;
  margin-right: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.63rem;
`;
const InnerBox = styled.div`
  height: 23.65rem;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
`;
const TextStyle = styled.span`
  font-size: 1.13rem;
  font-weight: 700;
  color: #fff;
`;
const InputBox = styled.div`
  background-color: #fff;
  height: 100%;
  white-space: wrap;
  border-radius: 0.63rem;
`;
const Textarea = styled.textarea`
  width: 96%;
  height: 93%;
  margin: 0.6rem 1rem;
  font-size: 1.1rem;
  line-height: 1.3rem;
  border: none;
  resize: none;
  :focus {
    outline: none;
  }
`;

export default ProjectInputText;
