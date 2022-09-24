import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import play from '/voiceModelPlay-icon.png';
import pause from '/voiceModelPause-icon.png';
import stop from '/voiceModelStop-icon.png';

function VoiceModelListLayout({
  voiceModel,
  inputModel,
  selectModelCardHandler,
  selectModelCard,
  modelNameColor,
  audioHandler,
  audioIndex,
  isPlay,
  selectModel,
}: VoiceModelLayoutProps) {
  // 재생 도중 다른 음성을 재생했을때 버튼에 직접적으로 자신 정지 동작하기
  // 재생, 일시정지 버튼으로 onOff 값이 바뀔떄마다 useEffect 동작
  const [onOff, setOnOff] = useState(false);
  const player: React.MutableRefObject<any> = useRef([]);
  useEffect(() => {
    // 선택 재생
    isPlay[audioIndex]
      ? player.current[audioIndex].audio.current.play()
      : player.current[audioIndex].audio.current.pause();
  }, [onOff]);
  return (
    <>
      <ListBox>
        {voiceModel &&
          voiceModel.map((item, index) => {
            return (
              <ModelCardBox
                key={item.name}
                onClick={() => {
                  inputModel({ name: item.name, sex: item.sex, lang: item.lang });
                  selectModelCardHandler(index);
                }}
              >
                <ModelNameBox backColor={modelNameColor}>
                  <ModelName>{item.name}</ModelName>
                </ModelNameBox>
                <AudioBox>
                  <AudioPlayer
                    preload="metadata"
                    src={item.audioFileUrl}
                    volume={1}
                    ref={(elem) => (player.current[index] = elem)}
                  />
                  <ButtonStyle
                    onClick={(event) => {
                      player.current[audioIndex].audio.current.load();
                      audioHandler(index);
                      setOnOff(!onOff);
                      event.stopPropagation();
                    }}
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
                        alt="음성재생일시정지아이콘"
                        style={{ width: '2rem', height: '2rem' }}
                      />
                    )}
                  </ButtonStyle>
                  <ButtonStyle
                    onClick={(event) => {
                      player.current[index].audio.current.load();
                      audioHandler(index);
                      event.stopPropagation();
                    }}
                    height="2rem"
                    marginLeft="0.83rem"
                  >
                    <img
                      src={stop}
                      alt="음성정지아이콘"
                      style={{ width: '2rem', height: '2rem' }}
                    />
                  </ButtonStyle>
                </AudioBox>
                <SelectBoxStyle view={selectModelCard[index] ? 'block' : 'none'} />
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
    </>
  );
}

interface VoiceModelLayoutProps {
  voiceModel: {
    name: string;
    sex: string;
    audioFileUrl: string;
    lang: string;
  }[];
  inputModel: (M: voiceModeltypes) => void;
  modelNameColor: string;
  audioIndex: number;
  audioHandler: (i: number) => void;
  isPlay: boolean[];
  selectModelCardHandler: (index: number) => void;
  selectModelCard: boolean[];
  selectModel: () => void;
}
interface voiceModeltypes {
  name: string;
  sex: string;
  lang: string;
}
interface ModelNameBoxProps {
  backColor: string;
}
interface ModelCardBoxProps {
  view: string;
}
interface ButtonStyleProps {
  backColor?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  radius?: string;
}

const ListBox = styled.div`
  width: 29.94rem;
  height: 100%;
  .rhap_container {
    display: none;
  }
`;
const ModelCardBox = styled.div`
  width: 100%;
  height: 4.37rem;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.87rem;
  border: 1px solid #dbdbdb;
  border-radius: 0.3rem;
  cursor: pointer;
`;
const SelectBoxStyle = styled.div<ModelCardBoxProps>`
  width: 100%;
  height: 4.37rem;
  display: ${({ view }) => view};
  position: absolute;
  border: 2px solid #0dff1e;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.62rem 0 rgba(13, 255, 30, 1);
  box-sizing: border-box;
  z-index: -9;
`;
const ModelNameBox = styled.div<ModelNameBoxProps>`
  background-color: ${({ backColor }) => backColor};
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
  flex-grow: 1;
  padding: 0 1.16rem;
  text-align: right;
`;
const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backColor }) => (backColor ? backColor : 'transparent')};
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0')};
  padding: 0;
  font-size: 1rem;
  border: none;
  border-radius: ${({ radius }) => radius};
`;

export default VoiceModelListLayout;
