import ProjectInputText from '@/layout/ProjectInputText';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/store';
import { inputText } from '@/store/voice/voiceSlice';
import ProjectPreviewAvatar from '@/layout/ProjectPreviewAvatar';

function InputText() {
  const { text } = useAppSelector((state) => state.voice.voiceData);
  const dispatch = useAppDispatch();
  // 텍스트 업데이트
  const [updateText, setUpdateText] = useState('');
  useEffect(() => {
    setUpdateText(text);
  }, []);
  function textHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setUpdateText(event.target.value);
    const trimText = event.target.value.trim();
    dispatch(inputText(trimText));
  }

  // 도움말 동작
  const [guide, setGuide] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <ProjectInputText
        text={updateText}
        textHandler={textHandler}
        guide={guide}
        setGuide={setGuide}
      />
      <ProjectPreviewAvatar />
    </div>
  );
}

export default InputText;
