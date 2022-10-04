import ProjectInputText from '@/layout/ProjectInputText';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { inputText } from '@/store/voice/voiceSlice';
import ProjectPreviewAvatar from '@/layout/ProjectPreviewAvatar';
import { moveToAvatar } from '@/store/workingProject/projectControlSlice';

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
  const [inputTextGuide, setInputTextGuide] = useState(false);
  const [previewGuide, setPreviewGuide] = useState(false);

  // 아바타 작업으로 이동
  const [moved, setMoved] = useState(false);
  function workingHandler() {
    dispatch(moveToAvatar());
    setMoved(true);
  }

  return (
    <div style={{ display: 'flex' }}>
      <ProjectInputText
        text={updateText}
        textHandler={textHandler}
        guide={inputTextGuide}
        setGuide={setInputTextGuide}
      />
      <ProjectPreviewAvatar
        guide={previewGuide}
        setGuide={setPreviewGuide}
        workingHandler={workingHandler}
        moved={moved}
      />
    </div>
  );
}

export default InputText;
