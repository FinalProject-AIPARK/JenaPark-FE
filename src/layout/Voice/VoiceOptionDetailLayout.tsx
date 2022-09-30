import React from 'react';
import styled from 'styled-components';
import volume from '/volume-icon.png';
import mic from '/voiceMic-icon.png';
import breath from '/breathOption-icon.png';

function VoiceOptionDetailLayout() {
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
            </TitleBox>
            {/* 설정 바 */}
            <RangeBox>
              <RangeStyle
                type="range"
                min={item.min}
                max={item.max}
                value="0"
                step={item.step}
                // onChange={colorChangeHandler}
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
          </TitleBox>
          <BreathGuideBox>
            <BreathInputBox>
              <BreathInput type="text" value="0.5" />
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
      <ButtonStyle>일괄 적용하기</ButtonStyle>
    </>
  );
}

interface TextStyleProps {
  maginLeft?: string;
  size: string;
  weight: string;
}

const OptionsContainter = styled.div`
  margin-top: 1.25rem;
`;
const OptionBox = styled.div`
  margin-bottom: 2.25rem;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
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
  width: 5rem;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;
const BreathGuideBox = styled.div`
  display: flex;
  align-items: center;
`;

export default VoiceOptionDetailLayout;
