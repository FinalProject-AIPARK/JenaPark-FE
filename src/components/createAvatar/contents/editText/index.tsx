import { useState, useRef, memo, useEffect } from 'react';
import EditTextLayout from '@/layout/projectContents/ProjectEditTextLayout';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { textDataUpload, addText } from '@/store/editText/EditTextSlice';
import { usePostUpdataTtsMutation, useDeleteAudioMutation } from '@/api/useApi';

const EditText = memo(() => {
  const { durationSilence, pitch, speed, volume, text } = useAppSelector(
    (state) => state.textUpdata.updataTts,
  );
  const { projectId: projectID, audioInfos } = useAppSelector(
    (state) => state.projectControl.projectData,
  );
  const dispatch = useAppDispatch();

  // 텍스트 업데이트
  const [sperateText, setSperateText] = useState([
    {
      audioId: 0,
      splitText: '',
      audioFileUrl: '',
      durationSilence: 0,
      pitch: 0,
      speed: 0,
      volume: 0,
    },
  ]);
  useEffect(() => {
    if (audioInfos) {
      setSperateText(audioInfos);
    }
  }, [audioInfos]);

  // 텍스트 삭제
  const [deleteCheckBox, setDeleteCheckbox] = useState<number>();
  const [deleteText] = useDeleteAudioMutation();
  const audioID = deleteCheckBox;
  function deleteComponent() {
    const actionDelete = {
      projectID,
      audioID,
    };
    deleteText(actionDelete);
  }

  // 컨트롤 옵션 보여주는 함수
  const [optionWindow, setOptionWindow] = useState({
    VolumeSpeed: false,
    Tone: false,
    Breath: false,
  });
  function showOptionWindow(kind: string) {
    setOptionWindow((freebu) => {
      let next = { ...freebu };
      next = { VolumeSpeed: false, Tone: false, Breath: false };
      return { ...next, [kind]: true };
    });
  }

  // 오디오 재생
  const [play, setplay] = useState(false);
  const toggle = () => setplay(!play);
  const playerRef = useRef<any>();

  // 텍스트 수정 업데이트
  const [updataText] = usePostUpdataTtsMutation();
  function textUpLoadData() {
    const data = {
      projectID,
      audioID,
      durationSilence,
      pitch,
      speed,
      volume,
      text,
    };
    updataText(data);
  }

  function checkboxHandler(text: string) {
    dispatch(addText(text));
  }

  function EditTextupdataStore(id: number | string, kind: string) {
    dispatch(textDataUpload({ id, kind }));
  }

  return (
    <EditTextLayout
      textUpLoadData={textUpLoadData}
      setDeleteCheckbox={setDeleteCheckbox}
      deleteCheckBox={deleteCheckBox}
      deleteComponent={deleteComponent}
      EditTextupdataStore={EditTextupdataStore}
      setOptionWindow={setOptionWindow}
      optionWindow={optionWindow}
      showOptionWindow={showOptionWindow}
      checkboxHandler={checkboxHandler}
      audioInfos={sperateText}
    />
  );
});

export default EditText;
