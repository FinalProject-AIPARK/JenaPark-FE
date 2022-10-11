import React from 'react'
import EditTextLayout from '../../../../layout/editText/EditTextLayout'
import { useAppSelector, useAppDispatch } from '../../../../store/store';

function index() {

  const audioText = useAppSelector((state) => state.voice.inputTextSynth)
  console.log(audioText)

  return (
    <div>
      <EditTextLayout
      audioText={audioText}
      />
    </div>
  )
}

export default index