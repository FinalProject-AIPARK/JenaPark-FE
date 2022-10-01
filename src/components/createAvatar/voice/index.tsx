import React, { useState } from 'react';
import styled from 'styled-components';
import VoiceWorkingButtonLayout from '../../../layout/Voice/VoiceWorkingButtonLayout';
import VoiceModel from './voiceModel';
import VoiceOption from './voiceOption';
import { useAppSelector, useAppDispatch } from '../../../store/store';
import { voiceModelWorking, voiceOptionWorking } from '../../../store/voice/voiceSlice';

function Voice() {
  const { isVoiceModel, isVoiceOption } = useAppSelector((state) => state.voice.elementData);
  const dispatch = useAppDispatch();
  function voiceModelHandler() {
    dispatch(voiceModelWorking());
  }
  function voiceOptionHandler() {
    dispatch(voiceOptionWorking());
  }
  return (
    <Container>
      <VoiceWorkingButtonLayout
        modelButton={voiceModelHandler}
        OptionButton={voiceOptionHandler}
        modelOn={isVoiceModel}
        optionOn={isVoiceOption}
      />
      {isVoiceModel ? <VoiceModel /> : <VoiceOption />}
      <Background></Background>
    </Container>
  );
}

const Container = styled.div`
  width: 29.88rem;
  height: calc(100% - 3.12rem);
  position: absolute;
  right: 5rem;
  padding: 1.56rem 1.31rem;
`;
const Background = styled.div`
  background-color: #001334;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 80%;
  z-index: -99;
`;

export default Voice;
