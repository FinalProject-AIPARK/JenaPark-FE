import React, { useState } from 'react';
import styled from 'styled-components';
import volume from '/volume-icon.png';
import mic from '/voiceMic-icon.png';
import breath from '/breathOption-icon.png';
import questionMark from '/questionMark-icon.png';

function VoiceOptionDetailLayout({
  rangeValue,
  rangeHandler,
  inputRange,
  breathInputHandler,
  requestVoice,
  optionGuide,
  guideHandler,
}: VoiceOptionDetailProps) {
  const layoutInfo = [
    {
      icon: volume,
      imgSrc: '',
      optionName: '음성 속도',
      step: 0.1,
      max: 0.5,
      min: -0.5,
      maxGuide: '빠르게',
      minGuide: '느리게',
      guide: '아바타의 말하는 속도를 조절할 수 있습니다.',
      leftPosition: '7rem',
      topPosition: '-2rem',
    },
    {
      icon: mic,
      imgSrc: '',
      optionName: '톤 조절',
      step: 0.1,
      max: 0.5,
      min: -0.5,
      maxGuide: '0.5',
      minGuide: '-0.5',
      guide: '목소리 톤의 높낮이를 조절할 수 있습니다.',
      leftPosition: '6rem',
      topPosition: '-2rem',
    },
  ];
  return (
    <>
      <OptionsContainter>
        {layoutInfo.map((item, index) => (
          <OptionBox key={item.optionName}>
            {/* 설정 이름 */}
            <TitleBox>
              <img src={item.icon} alt="옵션아이콘" style={{ width: '1.5rem' }} />
              <TextStyle size="1rem" weight="700" maginLeft="0.5rem">
                {item.optionName}
              </TextStyle>
              <img
                src={questionMark}
                alt="음성설정도움말아이콘"
                onMouseEnter={() => guideHandler(true, index)}
                onMouseLeave={() => guideHandler(false, index)}
                style={{ width: '1.5rem', marginLeft: '0.3rem' }}
              />
              {optionGuide[index] ? (
                <GuideTextBox top={item.topPosition} left={item.leftPosition}>
                  <span>{item.guide}</span>
                </GuideTextBox>
              ) : null}
            </TitleBox>
            {/* 설정 바 */}
            <RangeBox>
              <RangeStyle
                type="range"
                id={item.optionName}
                min={item.min}
                max={item.max}
                value={Object.values(rangeValue)[index]}
                step={item.step}
                onChange={(event) => rangeHandler(event, index)}
                ref={(elem) => (inputRange.current[index] = elem!)}
              />
            </RangeBox>
            {/* 설정 최소 최대이름 */}
            <MaxGuideTextBox>
              <span>{item.minGuide}</span>
              <span>{item.maxGuide}</span>
            </MaxGuideTextBox>
          </OptionBox>
        ))}
        <BreathOptionBox>
          <TitleBox>
            <img src={breath} alt="호흡조절아이콘" style={{ width: '1.5rem' }} />
            <TextStyle size="1rem" weight="700" maginLeft="0.5rem">
              호흡 조절
            </TextStyle>
            <img
              src={questionMark}
              alt="음성설정도움말아이콘"
              onMouseEnter={() => guideHandler(true, 2)}
              onMouseLeave={() => guideHandler(false, 2)}
              style={{ width: '1.5rem', marginLeft: '0.3rem' }}
            />
            {optionGuide[2] ? (
              <GuideTextBox top="-3rem" left="7.2rem">
                <span>
                  문장과 문장 사이의 공백 시간을 <br />
                  조절할 수 있습니다.
                </span>
              </GuideTextBox>
            ) : null}
          </TitleBox>
          <BreathGuideBox>
            <BreathInputBox>
              <BreathInput
                type="text"
                id="호흡 조절"
                value={rangeValue.duration}
                onChange={(event) => breathInputHandler(event)}
              />
            </BreathInputBox>
            <TextStyle size="0.9rem" weight="700" maginLeft="0.3rem">
              초
            </TextStyle>
            <TextStyle size="0.75rem" weight="300" maginLeft="0.3rem">
              (최솟값 0.1초)
            </TextStyle>
          </BreathGuideBox>
        </BreathOptionBox>
      </OptionsContainter>
      <ButtonStyle onClick={requestVoice}>일괄 적용하기</ButtonStyle>
    </>
  );
}

interface VoiceOptionDetailProps {
  rangeValue: {
    speed: number;
    tone: number;
    duration: number;
  };
  rangeHandler: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  inputRange: React.MutableRefObject<HTMLInputElement[]>;
  breathInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  requestVoice: () => void;
  optionGuide: boolean[];
  guideHandler: (state: boolean, index: number) => void;
}
interface TextStyleProps {
  maginLeft?: string;
  size: string;
  weight: string;
}
interface GuideTextBox {
  top: string;
  left: string;
}

const OptionsContainter = styled.div`
  margin-top: 1.25rem;
`;
const OptionBox = styled.div`
  margin-bottom: 2.25rem;
`;
const TitleBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
`;
const TextStyle = styled.span<TextStyleProps>`
  margin-left: ${({ maginLeft }) => (maginLeft ? maginLeft : '0')};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: #fff;
`;
const ButtonStyle = styled.button`
  background-color: #fff;
  width: 100%;
  height: 3.1rem;
  margin-top: auto;
  padding: 0;
  font-size: 1rem;
  border: none;
  border-radius: 0.3rem;
`;
const RangeBox = styled.div`
  margin-bottom: 0.5rem;
`;
const GuideTextBox = styled.div<GuideTextBox>`
  background-color: #fff;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  padding: 0.6rem;
  font-size: 0.81rem;
  line-height: 1.2rem;
  color: #333;
  border-radius: 0.6rem;
`;
const RangeStyle = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 0.63rem;
  border-radius: 0.31rem;
  background: #fff;
  background-image: linear-gradient(#535a62, #535a62);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.38rem;
    height: 1.38rem;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 0.9rem 0 #555;
  }
`;
const MaxGuideTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.88rem;
  color: #fff;
`;
const BreathOptionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BreathInputBox = styled.div`
  background-color: #dbdbdb;
  width: 5rem;
  height: 1.88rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.31rem;
`;
const BreathInput = styled.input`
  width: 4rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;
const BreathGuideBox = styled.div`
  display: flex;
  align-items: center;
`;

export default VoiceOptionDetailLayout;
