import { memo } from 'react';
import styled from 'styled-components';

const VoiceWorkingButtonLayout = memo(
  ({
    modelButton,
    OptionButton,
    modelOn,
    optionOn,
    audioUpload,
  }: VoiceWorkingButtonLayoutProps) => {
    return (
      <div>
        <Button
          onClick={modelButton}
          borderColor={modelOn ? 'none' : '1px solid #BDBDBD'}
          backColor={modelOn ? '#fff' : 'transparent'}
          color={modelOn ? '#000' : '#BDBDBD'}
        >
          음성 선택
        </Button>
        <Button
          onClick={() => {
            audioUpload ? null : OptionButton();
          }}
          marginLeft="1.1rem"
          borderColor={optionOn ? 'none' : '1px solid #BDBDBD'}
          backColor={optionOn ? '#fff' : 'transparent'}
          color={optionOn ? '#000' : '#BDBDBD'}
        >
          음성 옵션
        </Button>
      </div>
    );
  },
);

interface VoiceWorkingButtonLayoutProps {
  modelButton: () => void;
  OptionButton: () => void;
  modelOn: boolean;
  optionOn: boolean;
  audioUpload: boolean;
}
interface ButtonProps {
  marginLeft?: string;
  borderColor: string;
  backColor: string;
  color: string;
}

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
