import React from 'react';
import styled from 'styled-components';

function VoiceModelLayout({ upload }: VoiceModelLayoutProps) {
  return (
    <Container>
      <TitleBox>
        <TextStyle size="1.1rem" weight="700">
          사용하실 보이스를 선택해주세요.
        </TextStyle>
        <LabelStyle htmlFor="inputFile">
          <TextStyle size="1rem" weight="400" color="#fff">
            업로드
          </TextStyle>
        </LabelStyle>
        <input
          type="file"
          id="inputFile"
          accept=".wav"
          onChange={upload}
          style={{ display: 'none' }}
        />
      </TitleBox>
      <div>
        <img src="" alt="" />
        <input type="text" />
      </div>
      <div>
        <div>
          <button></button>
          <button></button>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      {/* 음성모델 리스트 */}
      <button>선택하기</button>
    </Container>
  );
}

interface VoiceModelLayoutProps {
  upload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface TextStyleProps {
  size: string;
  weight: string;
  color?: string;
}
interface ButtonStyleProps {
  width: string;
  height: string;
  backColor: string;
}

const Container = styled.div`
  margin-top: 1.5rem;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const TextStyle = styled.span<TextStyleProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;
const LabelStyle = styled.label`
  background-color: #001334;
  width: 6.2rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 0.3rem;
`;
const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backColor }) => backColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export default VoiceModelLayout;
