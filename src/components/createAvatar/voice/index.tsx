import React, { useState } from 'react';
import VoiceWorkingButtonLayout from '../../../styles/VoiceWorkingButtonLayout';
import ChooseVoice from './voiceModel';
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
    <div>
      <VoiceWorkingButtonLayout
        modelButton={voiceModelHandler}
        OptionButton={voiceOptionHandler}
        modelOn={isVoiceModel}
        optionOn={isVoiceOption}
      />
      {isVoiceModel ? <ChooseVoice /> : <VoiceOption />}
    </div>
  );
}

export default Voice;
