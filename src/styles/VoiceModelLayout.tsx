import React from 'react';
import styled from 'styled-components';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import search from '/search-icon.png';
import play from '/voiceModelPlay-icon.png';
import pause from '/voiceModelPause-icon.png';
import stop from '/voiceModelStop-icon.png';

function VoiceModelLayout({ upload }: VoiceModelLayoutProps) {
  return (
    <Container>
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
        <img src={search} alt="음성모델검색아이콘" style={{ width: '1.4rem' }} />
        <Input type="text" />
      </SearchBox>
      <ModelOptionButtonBox>
        <div>
          <ModelOptionButtonStyle
            backColor="transparent"
            color="#828282"
            border="1px solid #828282"
            width="3rem"
          >
            남
          </ModelOptionButtonStyle>
          <ModelOptionButtonStyle
            backColor="transparent"
            color="#828282"
            border="1px solid #828282"
            width="3rem"
            marginLeft="0.5rem"
          >
            여
          </ModelOptionButtonStyle>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <ModelOptionButtonStyle
            backColor="transparent"
            color="#828282"
            border="1px solid #828282"
            width="5.1rem"
          >
            한국어
          </ModelOptionButtonStyle>
          <ModelOptionButtonStyle
            backColor="transparent"
            color="#828282"
            border="1px solid #828282"
            width="4.1rem"
            marginLeft="0.5rem"
          >
            영어
          </ModelOptionButtonStyle>
          <ModelOptionButtonStyle
            backColor="transparent"
            color="#828282"
            border="1px solid #828282"
            width="5.1rem"
            marginLeft="0.5rem"
          >
            중국어
          </ModelOptionButtonStyle>
        </div>
      </ModelOptionButtonBox>
      <ListBox>
        <ModelCardBox>
          <ModelNameBox>
            <ModelName>김우주</ModelName>
          </ModelNameBox>
          <AudioBox>
            <AudioPlayer
              src="https://jenapark.s3.ap-northeast-2.amazonaws.com/audio/sample/chi_m_1.wav"
              onPlay={(e) => console.log('onPlay')}
            />
            {/* <ButtonStyle width="2rem" height="2rem">{isPlay ? <img src={pause} alt="" /> : <img src={play} alt="" />}</ButtonStyle> */}
            <ButtonStyle marginLeft="0.5rem">
              <img
                src={stop}
                alt="음성모델소리정지아이콘"
                style={{ width: '2rem', height: '2rem' }}
              />
            </ButtonStyle>
          </AudioBox>
        </ModelCardBox>
      </ListBox>
      <div>
        <ButtonStyle backColor="#fff" width="100%" height="3.1rem" radius="0.3rem">
          선택하기
        </ButtonStyle>
      </div>
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
interface ModelOptionButtonStyleProps {
  backColor: string;
  width: string;
  marginLeft?: string;
  color: string;
  border: string;
}
interface ButtonStyleProps {
  backColor?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  radius?: string;
}

const Container = styled.div`
  height: calc(100% - 4.6rem);
  display: flex;
  flex-direction: column;
  margin-top: 1.56rem;
`;
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
  border-bottom: 1px solid #000;
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
const ModelOptionButtonBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
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
const ListBox = styled.div`
  width: 29.94rem;
  height: 100%;
  .rhap_container {
    display: none;
  }
`;
const ModelCardBox = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 0.3rem;
`;
const ModelNameBox = styled.div`
  background-color: #0049ff;
  width: 5.1rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.3rem;
  border-radius: 0.3rem;
`;
const ModelName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
`;
const AudioBox = styled.div`
  margin: 0 0.5rem 0 auto;
`;
const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backColor }) => (backColor ? backColor : 'transparent')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0')};
  font-size: 1rem;
  border: none;
  border-radius: ${({ radius }) => radius};
  cursor: pointer;
`;

export default VoiceModelLayout;
