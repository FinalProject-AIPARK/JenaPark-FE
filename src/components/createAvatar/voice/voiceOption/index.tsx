import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import VoiceOptionDetailLayout from '@/layout/Voice/VoiceOptionDetailLayout';
import VoiceOptionTitleLayout from '@/layout/Voice/VoiceOptionTitleLayout';
import { useAppSelector, useAppDispatch } from '../../../../store/store';
import { voiceOptionAction } from '../../../../store/voice/voiceSlice';

function VoiceOption() {
  const { selectedModel, voiceOption } = useAppSelector((state) => state.voice);
  const dispatch = useAppDispatch();

  // input range
  const inputRange: React.MutableRefObject<HTMLInputElement[]> = useRef([]);
  useEffect(() => {
    inputRange.current[0].style.backgroundSize =
      ((voiceOption.speed - -0.5) * 100) / (0.5 - -0.5) + '% 100%';
    inputRange.current[1].style.backgroundSize =
      ((voiceOption.tone - -0.5) * 100) / (0.5 - -0.5) + '% 100%';
  }, []);
  function rangeHandler(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    let target = event.target;
    const min = Number(target.min);
    const max = Number(target.max);
    const val = Number(target.value);
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
    // 음성 옵션 값 저장
    dispatch(
      voiceOptionAction({
        id: target.id,
        value: Number(target.value),
      }),
    );
  }
  return (
    <Container>
      <VoiceOptionTitleLayout selectedModel={selectedModel} />
      <VoiceOptionDetailLayout
        rangeValue={voiceOption}
        rangeHandler={rangeHandler}
        inputRange={inputRange}
      />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 4.6rem);
  display: flex;
  flex-direction: column;
  margin-top: 1.56rem;
`;

export default VoiceOption;
