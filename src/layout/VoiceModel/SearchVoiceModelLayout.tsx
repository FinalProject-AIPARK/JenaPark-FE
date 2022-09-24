import React from 'react';
import styled from 'styled-components';
import 'react-h5-audio-player/lib/styles.css';
import searchIcon from '/search-icon.png';
import uploadIcon from '/upload-icon.png';

function SearchVoiceModelLayout({ upload }: VoiceModelLayoutProps) {
  return (
    <>
      <TitleBox>
        <TextStyle size="1.2rem" weight="700" color="#fff">
          사용하실 보이스를 선택해주세요.
        </TextStyle>
        <ButtonStyle
          backColor="#AAC2FF"
          width="8.69rem"
          height="1.88rem"
          marginL="auto"
          weight="700"
          color="#fff"
        >
          음성파일 업로드
        </ButtonStyle>
        {/* {isModal ? (
          <div>
            <ModalBox>
              <TextStyle size="1.13rem" weight="700" marginBottom="1.06rem">
                음성파일을 업로드해주세요.
              </TextStyle>

              <TextStyle size="1rem" weight="400" marginBottom="1.06rem">
                파일을 업로드하면 텍스트수정 및 음성적용은 불가합니다.
                <br />
                업로드 후 버추얼 아바타를 선택 적용하여 저장 및 합성이 가능합니다.
              </TextStyle>
              <LabelStyle htmlFor="inputFile">
                <img src={uploadIcon} alt="음성업로드아이콘" style={{ marginBottom: '2.06rem' }} />
                <span>이곳을 클릭하거나 파일을 드래그하여 업로드해주세요.</span>
              </LabelStyle>
              <input
                type="file"
                id="inputFile"
                accept=".wav"
                onChange={upload}
                style={{ display: 'none' }}
              />
              <ButtonStyle
                type="submit"
                backColor="#001334"
                width="6.25rem"
                height="1.88rem"
                weight="400"
                color="#fff"
              >
                확인
              </ButtonStyle>
            </ModalBox>
            <ModalBack>modalbackground</ModalBack>
          </div>
        ) : null} */}
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
  upload: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
const ModalBox = styled.div`
  background-color: #fff;
  width: 33.76rem;
  height: 27.13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(50vh - 20.62rem);
  right: calc(50vw - 23.25rem);
  padding: 2.06rem 1.87rem;
  border-radius: 0.63rem;
  z-index: 2;
`;
const ModalBack = styled.div`
  background-color: #000;
  width: calc(100vw - 10rem);
  height: calc(100vh - 8.5rem);
  position: absolute;
  top: 0;
  right: 0;
  opacity: 40%;
  z-index: 1;
`;
const LabelStyle = styled.label`
  background-color: #0d1a4c;
  width: 33.75rem;
  height: 17.56rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.06rem;
  color: #fff;
  border-radius: 0.63rem;
  cursor: pointer;
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
