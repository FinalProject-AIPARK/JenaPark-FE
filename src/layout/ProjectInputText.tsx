import React from 'react';
import styled from 'styled-components';
import questionMark from '/questionMark-icon.png';

function ProjectInputText({ text, textHandler, guide, setGuide }: ProjectInputTextProps) {
  return (
    <Container>
      <InnerBox>
        <TitleBox>
          <TextStyle>텍스트 입력</TextStyle>
          <img
            src={questionMark}
            alt="텍스트입력 도움말 아이콘"
            onMouseEnter={() => setGuide(true)}
            onMouseLeave={() => setGuide(false)}
            style={{ width: '1.5rem', marginLeft: '0.3rem' }}
          />
          {guide ? (
            <GuideTextBox>
              <span>
                음성에 필요한 텍스트를 입력해주세요.
                <br />
                우측에 음성 선택과 음성 옵션을 설정한 후 일괄 적용을 하면
                <br />
                마침표를 기준으로 문장별 음성이 생성됩니다.
              </span>
            </GuideTextBox>
          ) : null}
        </TitleBox>
        <InputBox>
          <Textarea
            placeholder="음성 합성을 진행할 텍스트를 입력 해주세요."
            value={text}
            onChange={(event) => textHandler(event)}
          />
        </InputBox>
      </InnerBox>
    </Container>
  );
}

interface ProjectInputTextProps {
  text: string;
  textHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  guide: boolean;
  setGuide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled.div`
  background-color: #001334;
  width: 49.75rem;
  height: 22.75rem;
  margin-right: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.63rem;
`;
const InnerBox = styled.div`
  height: 20.65rem;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.6rem;
`;
const TextStyle = styled.span`
  font-size: 1.13rem;
  font-weight: 700;
  color: #fff;
`;
const GuideTextBox = styled.div`
  background-color: #fff;
  position: absolute;
  top: -4.3rem;
  left: 6.6rem;
  padding: 0.6rem;
  font-size: 0.81rem;
  line-height: 1.2rem;
  color: #333;
  border-radius: 0.6rem;
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
  margin: 1rem;
  font-size: 1.1rem;
  line-height: 1.8rem;
  word-spacing: -0.2rem;
  border: none;
  resize: none;
  :focus {
    outline: none;
  }
`;

export default ProjectInputText;
