import React, { useState } from 'react';
import { useUploadVoiceMutation } from '../../../../api/useApi';
import VoiceModelLayout from '../../../../styles/VoiceModelLayout';

function VoiceModel() {
  const [file, setFile] = useState('');
  const [createUser, { data: userVoice, isLoading, error, isError }] = useUploadVoiceMutation();
  function uploadHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files);
    // 음성 업로드 서버로 전송
    // createUser({
    //   projectId: '',
    //   file: event.target.files?.item(0)
    // })
  }

  return <VoiceModelLayout upload={uploadHandler} />;
}

export default VoiceModel;
