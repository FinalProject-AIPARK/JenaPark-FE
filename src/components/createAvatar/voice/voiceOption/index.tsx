import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import VoiceOptionDetailLayout from '@/layout/Voice/VoiceOptionDetailLayout';
import VoiceOptionTitleLayout from '@/layout/Voice/VoiceOptionTitleLayout';
import { useAppSelector, useAppDispatch } from '../../../../store/store';
import {
  voiceOptionAction,
  initVoiceOption,
  callProjectDataAction,
  collectOption,
  inputSynthAction,
} from '../../../../store/voice/voiceSlice';
import { useInputTextSynMutation } from '../../../../api/useApi';
import {
  workingComponent,
  InputTextSynthLoadingAction,
  InputTextSynthErrorAction,
} from '../../../../store/workingProject/projectControlSlice';
import ErrorBigLayout from '@/layout/ErrorBigLayout';
import LoadingBigLayout from '@/layout/LoadingBigLayout';

function VoiceOption() {
  const { selectedModel, voiceOption, voiceData } = useAppSelector((state) => state.voice);

  const dispatch = useAppDispatch();

  // 도움말 핸들러
  const [optionGuide, setOptionGuide] = useState([false, false, false]);
  function guideHandler(state: boolean, index: number) {
    setOptionGuide((prev) => {
      const next = [...prev];
      next[index] = state;
      return next;
    });
  }

  // Option input range
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

  // Option input breath
  function breathInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    let target = event.target;
    dispatch(
      voiceOptionAction({
        id: target.id,
        value: target.value,
      }),
    );
  }

  // 일괄 적용하기
  const [synthesis, { data: resSynth, isLoading, isError, error }] = useInputTextSynMutation();
  function requestVoice() {
    // 슬라이스 넣기
    dispatch(collectOption());
    // api 요청
    if (voiceData.text === '') {
      alert('텍스트를 입력 해주세요.');
      return;
    }
    synthesis(voiceData);
  }
  useEffect(() => {
    if (resSynth) {
      dispatch(inputSynthAction(resSynth.data.audioInfoDtos));
      dispatch(workingComponent());
      // 프로젝트 데이터 재요청
      dispatch(callProjectDataAction());
    }
  }, [resSynth]);
  useMemo(() => {
    isLoading
      ? dispatch(InputTextSynthLoadingAction(true))
      : dispatch(InputTextSynthLoadingAction(false));

    isError
      ? dispatch(
          InputTextSynthErrorAction({
            isInputTextSynthError: true,
            inputTextSynthError: error,
          }),
        )
      : dispatch(
          InputTextSynthErrorAction({
            isInputTextSynthError: false,
            inputTextSynthError: {},
          }),
        );
  }, [isLoading, isError]);

  return (
    <Container>
      <VoiceOptionTitleLayout selectedModel={selectedModel} />
      <VoiceOptionDetailLayout
        rangeValue={voiceOption}
        rangeHandler={rangeHandler}
        inputRange={inputRange}
        breathInputHandler={breathInputHandler}
        requestVoice={requestVoice}
        optionGuide={optionGuide}
        guideHandler={guideHandler}
        selectedModel={selectedModel}
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
