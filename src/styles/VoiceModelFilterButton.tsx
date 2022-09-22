import React from 'react';
import styled from 'styled-components';

function VoiceModelFilterButton({
  sexButtonStyle,
  sexFilterHandler,
  langFilterHandler,
  langButtonStyle,
}: FilterButtonProps) {
  return (
    <>
      <ModelOptionButtonBox>
        <div>
          <ModelOptionButtonStyle
            onClick={() => sexFilterHandler('male')}
            backColor={sexButtonStyle ? 'transparent' : '#fff'}
            color={sexButtonStyle ? '#828282' : '#000'}
            border={sexButtonStyle ? '1px solid #828282' : 'none'}
            width="3rem"
          >
            남
          </ModelOptionButtonStyle>
          <ModelOptionButtonStyle
            onClick={() => sexFilterHandler('female')}
            backColor={sexButtonStyle ? '#fff' : 'transparent'}
            color={sexButtonStyle ? '#000' : '#828282'}
            border={sexButtonStyle ? 'none' : '1px solid #828282'}
            width="3rem"
            marginLeft="0.5rem"
          >
            여
          </ModelOptionButtonStyle>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <ModelOptionButtonStyle
            onClick={() => langFilterHandler('kor')}
            backColor={langButtonStyle[0] ? '#fff' : 'transparent'}
            color={langButtonStyle[0] ? '#000' : '#828282'}
            border={langButtonStyle[0] ? 'none' : '1px solid #828282'}
            width="5.1rem"
          >
            한국어
          </ModelOptionButtonStyle>
          <ModelOptionButtonStyle
            onClick={() => langFilterHandler('eng')}
            backColor={langButtonStyle[1] ? '#fff' : 'transparent'}
            color={langButtonStyle[1] ? '#000' : '#828282'}
            border={langButtonStyle[1] ? 'none' : '1px solid #828282'}
            width="4.1rem"
            marginLeft="0.5rem"
          >
            영어
          </ModelOptionButtonStyle>
          <ModelOptionButtonStyle
            onClick={() => langFilterHandler('chi')}
            backColor={langButtonStyle[2] ? '#fff' : 'transparent'}
            color={langButtonStyle[2] ? '#000' : '#828282'}
            border={langButtonStyle[2] ? 'none' : '1px solid #828282'}
            width="5.1rem"
            marginLeft="0.5rem"
          >
            중국어
          </ModelOptionButtonStyle>
        </div>
      </ModelOptionButtonBox>
    </>
  );
}

interface FilterButtonProps {
  sexButtonStyle: boolean;
  sexFilterHandler: (filter: string) => void;
  langButtonStyle: boolean[];
  langFilterHandler: (filter: string) => void;
}
interface ModelOptionButtonStyleProps {
  backColor: string;
  width: string;
  marginLeft?: string;
  color: string;
  border: string;
}

const ModelOptionButtonBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.87rem 0;
`;
const ModelOptionButtonStyle = styled.button<ModelOptionButtonStyleProps>`
  background-color: ${({ backColor }) => backColor};
  width: ${({ width }) => width};
  height: 2.3rem;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0')};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  border-radius: 0.3rem;
  cursor: pointer;
`;

export default VoiceModelFilterButton;
