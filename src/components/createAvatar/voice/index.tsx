import React, { useState } from 'react';
import styled from 'styled-components';
import VoiceWorkingButtonLayout from '../../../styles/VoiceWorkingButtonLayout';
import VoiceModel from './voiceModel';
import VoiceOption from './voiceOption';

function Voice() {
  const [isVoiceModel, setIsVoiceModel] = useState(true);
  const [isVoiceOption, setIsVoiceOption] = useState(false);

  function voiceModelHandler() {
    setIsVoiceModel(true);
    setIsVoiceOption(false);
  }
  function voiceOptionHandler() {
    setIsVoiceOption(true);
    setIsVoiceModel(false);
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
  width: 29.9rem;
  height: calc(100% - 3.53rem);
  position: absolute;
  right: 25rem;
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
  z-index: -1;
`;

export default Voice;
