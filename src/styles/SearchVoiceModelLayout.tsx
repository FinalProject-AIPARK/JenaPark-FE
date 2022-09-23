import React from 'react';
import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';
import search from '/search-icon.png';

function SearchVoiceModelLayout({ upload }: VoiceModelLayoutProps) {
  return (
    <>
      <TitleBox>
        <TextStyle size="1.2rem" weight="700" color="#fff">
          사용하실 보이스를 선택해주세요.
        </TextStyle>
        <LabelStyle htmlFor="inputFile">
          <TextStyle size="1rem" weight="400" color="#000">
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
      <SearchBox>
        <img
          src={search}
          alt="음성모델검색아이콘"
          style={{ width: '1.4rem', marginBottom: '0.55rem' }}
        />
        <Input type="text" />
      </SearchBox>
    </>
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

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.84rem;
`;
const TextStyle = styled.span<TextStyleProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;
const LabelStyle = styled.label`
  background-color: #aac2ff;
  width: 6.2rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 0.3rem;
  cursor: pointer;
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
