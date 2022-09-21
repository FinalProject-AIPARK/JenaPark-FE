import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import search from '/search-icon.png';
import play from '/voiceModelPlay-icon.png';
import pause from '/voiceModelPause-icon.png';
import stop from '/voiceModelStop-icon.png';

function VoiceModelLayout({
  upload,
  voiceModel,
  inputModel,
  selectModel,
  sexButtonStyle,
  sexFilterHandler,
  langButtonStyle,
  langFilterHandler,
  audioIndex,
  audioHandler,
  isPlay,
}: VoiceModelLayoutProps) {
  // 재생 도중 다른 음성을 재생했을때 버튼에 직접적으로 자신 정지 동작하기
  // 재생, 일시정지 버튼으로 onOff 값이 바뀔떄마다 useEffect 동작
  const [onOff, setOnOff] = useState(false);
  const player = useRef<any>([]);
  useEffect(() => {
    // 선택 재생
    isPlay[audioIndex]
      ? player.current[audioIndex].audio.current.play()
      : player.current[audioIndex].audio.current.pause();
  }, [onOff]);

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
      <ListBox>
        {voiceModel &&
          voiceModel.map((item, index) => {
            return (
              <ModelCardBox
                key={item.name}
                onClick={() => inputModel({ name: item.name, sex: item.sex, lang: item.lang })}
              >
                <ModelNameBox>
                  <ModelName>{item.name}</ModelName>
                </ModelNameBox>
                <AudioBox>
                  <AudioPlayer
                    preload="metadata"
                    src={item.audioFileUrl}
                    ref={(elem) => (player.current[index] = elem)}
                  />
                  <ButtonStyle
                    onClick={(event) => {
                      player.current[audioIndex].audio.current.pause();
                      audioHandler(index);
                      setOnOff(!onOff);
                      event.stopPropagation();
                    }}
                    width="2rem"
                    height="2rem"
                  >
                    {isPlay[index] ? (
                      <img
                        src={pause}
                        alt="음성일시정지아이콘"
                        style={{ width: '2rem', height: '2rem' }}
                      />
                    ) : (
                      <img
                        src={play}
                        alt="음성재생정지아이콘"
                        style={{ width: '2rem', height: '2rem' }}
                      />
                    )}
                  </ButtonStyle>
                  <ButtonStyle
                    onClick={(event) => {
                      console.log(player.current[index].audio);
                      event.stopPropagation();
                    }}
                    marginLeft="0.5rem"
                  >
                    <img
                      src={stop}
                      alt="음성정지아이콘"
                      style={{ width: '2rem', height: '2rem' }}
                    />
                  </ButtonStyle>
                </AudioBox>
              </ModelCardBox>
            );
          })}
      </ListBox>
      <div>
        <ButtonStyle
          onClick={selectModel}
          backColor="#fff"
          width="100%"
          height="3.1rem"
          radius="0.3rem"
        >
          선택하기
        </ButtonStyle>
      </div>
    </Container>
  );
}

interface VoiceModelLayoutProps {
  upload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  voiceModel: {
    name: string;
    sex: string;
    audioFileUrl: string;
    lang: string;
  }[];
  inputModel: (M: voiceModeltypes) => void;
  selectModel: () => void;
  sexButtonStyle: boolean;
  sexFilterHandler: (filter: string) => void;
  langButtonStyle: boolean[];
  langFilterHandler: (filter: string) => void;
  audioIndex: number;
  audioHandler: (i: number) => void;
  isPlay: boolean[];
}
interface voiceModeltypes {
  name: string;
  sex: string;
  lang: string;
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
const ListBox = styled.div`
  width: 29.94rem;
  height: 100%;
  .rhap_container {
    display: none;
  }
`;
const ModelCardBox = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.87rem;
  border: 1px solid #bdbdbd;
  border-radius: 0.3rem;
  cursor: pointer;
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
