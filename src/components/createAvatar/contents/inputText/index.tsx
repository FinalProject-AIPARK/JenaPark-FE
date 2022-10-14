import ProjectInputText from '@/layout/projectContents/ProjectInputTextLayout';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { inputText } from '@/store/voice/voiceSlice';
import ProjectPreviewAvatar from '@/layout/projectContents/ProjectPreviewAvatarLayout';
import { moveToAvatar } from '@/store/workingProject/projectControlSlice';

const InputText = memo(() => {
  const { text, backgroundUrl, avatarUrl } = useAppSelector(
    (state) => state.projectControl.projectData,
  );
  const { isVoiceWoking } = useAppSelector((state) => state.projectControl.elementData);
  const { backgroundUrl: avatarBack, avatarUrl: avatar } = useAppSelector(
    (state) => state.avatar.avatarDataUrl,
  );
  const dispatch = useAppDispatch();

  // 이미지 업데이트
  const [preview, setPreview] = useState({
    backgroundPreview: '',
    avatarPreview: '',
  });
  useMemo(() => {
    setPreview({
      backgroundPreview: avatarBack,
      avatarPreview: avatar,
    });
  }, [avatarBack, avatar]);
  useMemo(() => {
    setPreview({
      backgroundPreview: backgroundUrl,
      avatarPreview: avatarUrl,
    });
  }, [backgroundUrl, avatarUrl]);

  // 텍스트 업데이트
  const [updateText, setUpdateText] = useState('');
  useEffect(() => {
    setUpdateText(text);
  }, [text]);
  function textHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setUpdateText(event.target.value);
    const trimText = event.target.value.trim();
    dispatch(inputText(trimText));
  }

  // 도움말 동작
  const [inputTextGuide, setInputTextGuide] = useState(false);
  const [previewGuide, setPreviewGuide] = useState(false);

  // 아바타 작업으로 이동
  function workingHandler() {
    dispatch(moveToAvatar());
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
        isVoiceWoking={isVoiceWoking}
        preview={preview}
      />
    </div>
  );
});

export default InputText;
