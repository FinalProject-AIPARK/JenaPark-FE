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
        borderColor={modelOn ? '#001334' : '#BDBDBD'}
      >
        보이스 선택
      </Button>
      <Button
        onClick={OptionButton}
        marginLeft="1.1rem"
        borderColor={optionOn ? '#001334' : '#BDBDBD'}
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
}

const ButtonBox = styled.div``;
const Button = styled.button<ButtonProps>`
  background-color: #fff;
  width: 14.3rem;
  height: 3.1rem;
  margin-left: ${({ marginLeft }) => marginLeft};
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.3rem;
`;

export default VoiceWorkingButtonLayout;
