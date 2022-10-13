import React, { useState, useRef, useEffect, ChangeEvent } from 'react'
import EditTextLayout from '../../../../layout/editText/EditTextLayout'
import { useAppSelector, useAppDispatch } from '../../../../store/store';
import { textDataUpload } from '../../../../store/editText/EditTextSlice'
import { usePostUpdataTtsMutation, useDeleteAudioMutation  } from '../../../../api/useApi'
import { changeSplitText } from '../../../../store/voice/voiceSlice'
function index() {

  const audioText = useAppSelector((state) => state.voice.inputTextSynth)
  const {durationSilence, pitch, speen, volume, text} = useAppSelector((state) => state.textUpdata.updataTts)
  const { projectId, audioInfos } = useAppSelector((state) => state.projectControl.projectData)
  const dispatch = useAppDispatch()
  
  // 텍스트 삭제
  const [ deleteCheckBox, setDeleteCheckbox] = useState<number>()
  const [deleteText] = useDeleteAudioMutation()
  const audioId = deleteCheckBox
  function deleteComponent() {
    const actionDelete = {
      projectId,
      audioId,
    };
    deleteText(actionDelete);
  }

  useEffect(() => {}, [audioInfos])

  
  // 컨트롤 옵션 보여주는 함수

  const [ optionWindow, setOptionWindow ] = useState({VolumeSpeed:false, Tone: false, Breath: false})
  function showOptionWindow(kind: string) {
    setOptionWindow((freebu) => {
      let next = {...freebu}
      next = {VolumeSpeed:false, Tone: false, Breath: false}
      return {...next, [kind]: true}
    })
  }
  
  // 오디오 재생
  const [play, setplay] = useState(false);
  const toggle = () => setplay(!play)
  const playerRef = useRef<any>()
  
  // 텍스트 수정 업데이트

  function EditTextupdataStore(id: number, kind: string) {
    dispatch(textDataUpload({ id, kind }));
  }

  function changeEditText() {
    dispatch(changeSplitText)
  }

  const [editText, setEditText] = useState('')

  const chage = (event: ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value)
  }
  const updataText = usePostUpdataTtsMutation({audioId, projectId})
  
  return (
    <>
      <EditTextLayout
      audioText={audioText}
      setDeleteCheckbox={setDeleteCheckbox}
      deleteCheckBox={deleteCheckBox}
      chage={chage}
      editText={editText}
      deleteComponent={deleteComponent}
      EditTextupdataStore={EditTextupdataStore}
      setOptionWindow={setOptionWindow}
      optionWindow={optionWindow}
      showOptionWindow={showOptionWindow}
      audioInfos={audioInfos}
      />
    </>
  )
}

export default index