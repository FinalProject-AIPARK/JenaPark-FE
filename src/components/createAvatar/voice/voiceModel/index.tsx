import React, { useEffect, useRef, useState } from 'react';
import { useGetVoiceModelQuery, useUploadVoiceMutation } from '../../../../api/useApi';
import VoiceModelLayout from '../../../../styles/VoiceModelLayout';

function VoiceModel() {
  const [voiceModelData, setVoiceModelData] = useState([
    {
      name: '김우주',
      sex: 'female',
      audioFileUrl: 'https://jenapark.s3.ap-northeast-2.amazonaws.com/audio/sample/chi_m_1.wav',
      lang: 'kor',
    },
    {
      name: '이우주',
      sex: 'female',
      audioFileUrl: 'https://jenapark.s3.ap-northeast-2.amazonaws.com/audio/sample/chi_m_1.wav',
      lang: 'kor',
    },
  ]);
  const { data: resVoiceModel } = useGetVoiceModelQuery({
    lang: 'kor',
    sex: 'female',
  });
  useEffect(() => {
    if (resVoiceModel) setVoiceModelData(resVoiceModel.data);
  }, [resVoiceModel]);

  const [uploadVoice, { data: up, status, isLoading, isError }] = useUploadVoiceMutation();
  function uploadHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files);
    // 음성 업로드 서버로 전송
    // uploadVoice({
    //   projectId: '',
    //   file: event.target.files?.item(0)
    // })
  }

  return <VoiceModelLayout upload={uploadHandler} voiceModel={voiceModelData} />;
}

interface voiceModeltypes {
  name: string;
  sex: string;
  lang: string;
}

export default VoiceModel;
