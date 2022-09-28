import React, { DragEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';
import searchIcon from '/search-icon.png';

function SearchVoiceModelLayout({ setOnModal }: VoiceModelLayoutProps) {
  return (
    <>
      <TitleBox>
        <TextStyle size="1.2rem" weight="700" color="#fff">
          사용하실 보이스를 선택해주세요.
        </TextStyle>
        <ButtonStyle
          onClick={() => setOnModal(true)}
          backColor="#AAC2FF"
          width="8.69rem"
          height="1.88rem"
          marginL="auto"
          weight="700"
          color="#fff"
        >
          음성파일 업로드
        </ButtonStyle>
      </TitleBox>
      <SearchBox>
        <img
          src={searchIcon}
          alt="음성모델검색아이콘"
          style={{ width: '1.4rem', marginBottom: '0.55rem' }}
        />
        <Input type="text" />
      </SearchBox>
    </>
  );
}

interface VoiceModelLayoutProps {
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface TextStyleProps {
  display?: string;
  marginBottom?: string;
  size: string;
  weight: string;
  color?: string;
}
interface ButtonStyleProps {
  backColor: string;
  width: string;
  height: string;
  weight: string;
  marginL?: string;
  color: string;
}

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.84rem;
`;
const TextStyle = styled.span<TextStyleProps>`
  display: inline-block;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  line-height: 1.5rem;
  color: ${({ color }) => (color ? color : '#000')};
  text-align: center;
`;

const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backColor }) => backColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-left: ${({ marginL }) => (marginL ? marginL : '0')};
  font-size: 1rem;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  text-aligh: center;
  border-radius: 0.31rem;
`;
const SearchBox = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
`;
const Input = styled.input`
  background-color: transparent;
  width: 100%;
  margin-left: 0.3rem;
  border: none;
  :focus {
    outline: none;
  }
`;

export default SearchVoiceModelLayout;
