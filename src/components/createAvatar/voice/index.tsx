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
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  right: 5rem;
`;

export default Voice;
