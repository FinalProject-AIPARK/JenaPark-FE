import React, { useState, useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import styled from 'styled-components';
import questionMark from '/questionMark-icon.png';
import play from '/voiceModelPlay-icon.png';
import pause from '/voiceModelPause-icon.png';
import stop from '/voiceModelStop-icon.png';

function VoiceOptionTitleLayout({ selectedModel }: VoiceOptionTitleProps) {
  const [guideText, setGuideText] = useState(false);
  const [onOff, setOnOff] = useState(false);
  const player: React.MutableRefObject<any> = useRef([]);
  useEffect(() => {
    // 선택 재생
    onOff ? player.current.audio.current.play() : player.current.audio.current.pause();
  }, [onOff]);
  return (
    <div>
      <TitleBox>
        <span>선택하신 음성의 옵션을 설정해주세요.</span>
        <img
          src={questionMark}
          alt="음성설정도움말아이콘"
          onMouseEnter={() => setGuideText(true)}
          onMouseLeave={() => setGuideText(false)}
          style={{ width: '1.5rem', marginLeft: '0.3rem' }}
        />
        {guideText ? (
          <GuideTextBox>
            <span>
              적용할 보이스의 옵션을 설정할 수 있습니다. 크기,속도,톤,호흡을 조절하신 후
              일괄적용하시면 적으신 텍스트에 적용되어 마침표를 기준으로 문장별로 일괄적용되어
              뿌려집니다. 왼쪽 텍스트수정에서 문장별로 아이콘을 클릭하시면 문장별 옵션을 설정 할 수
              있습니다.
            </span>
          </GuideTextBox>
        ) : null}
      </TitleBox>
      <ModelCardBox>
        <ModelNameBox backColor={selectedModel.nameColor}>
          <ModelName>{selectedModel.name}</ModelName>
        </ModelNameBox>
        <AudioBox>
          <AudioPlayer
            preload="metadata"
            src={selectedModel.audioUrl}
            volume={1}
            onPause={() => setOnOff(false)}
            ref={(elem) => (player.current = elem)}
          />
          <ButtonStyle
            onClick={(event) => {
              setOnOff(!onOff);
              event.stopPropagation();
            }}
            height="2rem"
          >
            {onOff ? (
              <img src={pause} alt="음성일시정지아이콘" style={{ width: '2rem', height: '2rem' }} />
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
              player.current.audio!.current.load();
              setOnOff(false);
              event.stopPropagation();
            }}
            height="2rem"
            marginLeft="0.83rem"
          >
            <img src={stop} alt="음성정지아이콘" style={{ width: '2rem', height: '2rem' }} />
          </ButtonStyle>
        </AudioBox>
      </ModelCardBox>
    </div>
  );
}

interface VoiceOptionTitleProps {
  selectedModel: {
    nameColor: string;
    name: string;
    audioUrl: string;
  };
}
interface ModelNameBoxProps {
  backColor: string;
}
interface ButtonStyleProps {
  backColor?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  radius?: string;
}

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1.12rem;
  color: #b5b5b5;
`;
const GuideTextBox = styled.div`
  background-color: #fff;
  width: 15rem;
  height: 6.6rem;
  position: absolute;
  top: -8.3rem;
  right: 0;
  padding: 0.8rem;
  font-size: 0.81rem;
  line-height: 1.1rem;
  border-radius: 1rem;
`;
const ModelCardBox = styled.div`
  width: 100%;
  height: 4.37rem;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0.87rem 0;
  border: 2px solid #0dff1e;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.62rem 0 rgba(13, 255, 30, 1);
  box-sizing: border-box;
  .rhap_container {
    display: none;
  }
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

export default VoiceOptionTitleLayout;
