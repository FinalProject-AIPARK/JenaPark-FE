import React from 'react';
import styled from 'styled-components';

function VoiceWorkingButtonLayout({
  modelButton,
  OptionButton,
  modelOn,
  optionOn,
}: VoiceWorkingButtonLayoutProps) {
  return (
    <ButtonBox>
      <Button
        onClick={modelButton}
        borderColor={modelOn ? 'none' : '1px solid #BDBDBD'}
        backColor={modelOn ? '#fff' : 'transparent'}
        color={modelOn ? '#000' : '#BDBDBD'}
      >
        보이스 선택
      </Button>
      <Button
        onClick={OptionButton}
        marginLeft="1.1rem"
        borderColor={optionOn ? 'none' : '1px solid #BDBDBD'}
        backColor={optionOn ? '#fff' : 'transparent'}
        color={optionOn ? '#000' : '#BDBDBD'}
      >
        보이스 옵션
      </Button>
    </ButtonBox>
  );
}

interface VoiceWorkingButtonLayoutProps {
  modelButton: () => void;
  OptionButton: () => void;
  modelOn: boolean;
  optionOn: boolean;
}
interface ButtonProps {
  marginLeft?: string;
  borderColor: string;
  backColor: string;
  color: string;
}

const ButtonBox = styled.div``;
const Button = styled.button<ButtonProps>`
  background-color: ${({ backColor }) => backColor};
  width: 14.38rem;
  height: 3.13rem;
  margin-left: ${({ marginLeft }) => marginLeft};
  font-size: 1rem;
  font-weight: 700;
  color: ${({ color }) => color};
  border: ${({ borderColor }) => borderColor};
  border-radius: 0.31rem;
`;

export default VoiceWorkingButtonLayout;
