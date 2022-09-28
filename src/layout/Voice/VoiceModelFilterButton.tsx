import React from 'react';
import styled from 'styled-components';
import arrowDown from '/arrowDown-icon.png';

function VoiceModelFilterButton({
  sexButton,
  sexFilterHandler,
  langFilterHandler,
  langButton,
  dropdown,
  dropdownHandler,
  offDropdown,
}: FilterButtonProps) {
  return (
    <>
      <ModelOptionButtonBox>
        <div>
          <ButtonStyle
            onClick={() => sexFilterHandler('male')}
            backColor={sexButton ? 'transparent' : '#fff'}
            color={sexButton ? '#828282' : '#000'}
            border={sexButton ? '1px solid #828282' : 'none'}
            width="3rem"
          >
            남
          </ButtonStyle>
          <ButtonStyle
            onClick={() => sexFilterHandler('female')}
            backColor={sexButton ? '#fff' : 'transparent'}
            color={sexButton ? '#000' : '#828282'}
            border={sexButton ? 'none' : '1px solid #828282'}
            width="3rem"
            marginLeft="0.5rem"
          >
            여
          </ButtonStyle>
        </div>
        {/* <div style={{ marginLeft: 'auto' }}>
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
        </div> */}
        <div style={{ marginLeft: 'auto', position: 'relative' }}>
          <DropDownBoxStyle
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              dropdownHandler(event)
            }
          >
            <span ref={offDropdown}>{langButton}</span>
            <img
              src={arrowDown}
              alt="언어선택메뉴여는아이콘"
              style={{ width: '1.5rem', marginLeft: '0.5rem' }}
            />
          </DropDownBoxStyle>
          {dropdown ? (
            <LangListStyle>
              <LangButtonStyle onClick={() => langFilterHandler('한국어')}>한국어</LangButtonStyle>
              <LangButtonStyle onClick={() => langFilterHandler('영어')} margin="0.5rem">
                영어
              </LangButtonStyle>
              <LangButtonStyle onClick={() => langFilterHandler('중국어')}>중국어</LangButtonStyle>
            </LangListStyle>
          ) : null}
        </div>
      </ModelOptionButtonBox>
    </>
  );
}

interface FilterButtonProps {
  sexButton: boolean;
  sexFilterHandler: (filter: string) => void;
  langButton: string;
  langFilterHandler: (filter: string) => void;
  dropdown: boolean;
  dropdownHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  offDropdown: React.LegacyRef<HTMLSpanElement>;
}
interface ButtonStyleProps {
  backColor: string;
  width: string;
  marginLeft?: string;
  color?: string;
  border?: string;
}
interface LangButtonStyleProps {
  margin?: string;
}

const ModelOptionButtonBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.87rem 0;
`;
const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backColor }) => backColor};
  width: ${({ width }) => width};
  height: 2.5rem;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0')};
  font-size: 1rem;
  font-weight: 700;
  color: ${({ color }) => (color ? color : '#000')};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: 0.3rem;
`;
const DropDownBoxStyle = styled.div`
  background-color: #fff;
  width: 6.25rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.3rem;
  cursor: pointer;
`;
const LangListStyle = styled.div`
  background-color: #fff;
  width: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2rem;
  padding: 0.81rem 0;
  border-radius: 0 0 0.3rem 0.3rem;
`;
const LangButtonStyle = styled.button<LangButtonStyleProps>`
  background-color: transparent;
  margin: ${({ margin }) => (margin ? margin : 'none')};
  font-size: 1rem;
  font-weight: 700;
  border: none;
`;

export default VoiceModelFilterButton;
