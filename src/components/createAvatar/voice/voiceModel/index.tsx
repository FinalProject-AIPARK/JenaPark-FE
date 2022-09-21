import React, { useEffect, useRef, useState } from 'react';
import { useGetVoiceModelQuery, useUploadVoiceMutation } from '../../../../api/useApi';
import VoiceModelLayout from '../../../../styles/VoiceModelLayout';

function VoiceModel() {
  // 음성 모델  전체 리스트 불러오기
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
      audioFileUrl: 'https://jenapark.s3.ap-northeast-2.amazonaws.com/audio/sample/chi_m_3.wav',
      lang: 'kor',
    },
  ]);
  const { data: resVoiceModel } = useGetVoiceModelQuery({
    lang: 'kor',
    sex: 'female',
  });
  useEffect(() => {
    if (resVoiceModel) setVoiceModelData(resVoiceModel.data);
    // 재생버튼 독립적으로 동작하기 위해 불린데이터 값을 리스트 갯수와 맞춰준다.
    for (let i = 0; i < voiceModelData.length; i++) {
      setPlayController((current) => {
        return current.length ? [...current, false] : [false];
      });
    }
  }, [resVoiceModel]);

  // 음성 업로드 서버로 전송
  const [uploadVoice, { data: up, status, isLoading, isError }] = useUploadVoiceMutation();
  function uploadHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files);
    // uploadVoice({
    //   projectId: '',
    //   file: event.target.files?.item(0)
    // })
  }

  // 음성 샘플 오디오 컨트롤
  const [playController, setPlayController] = useState<boolean[]>([]);
  const [audioIndex, setAudioIndex] = useState(0);
  function audioHandler(index: number) {
    setAudioIndex(index);
    setPlayController((current) => {
      let a = current.map((item) => (item = false));
      a.splice(index, 1, !current[index]);
      return [...a];
    });
  }

  const [endData, setEndData] = useState({});
  function InputVoiceModel(M: voiceModeltypes) {
    // 변수에 담아서 마지막 선택하기 눌렀을때 변수에 있는 데이터를 api전송
    // 여기는 변수에 답는 로직이 있어야해
    setEndData(M);
    console.log('선택한 모델 변수에 담기');
  }

  function selectModel() {
    // 사용자가 선택한 모델(endData) api전송
    console.log('최종 모델 선택');
  }

  return (
    <VoiceModelLayout
      upload={uploadHandler}
      voiceModel={voiceModelData}
      inputModel={InputVoiceModel}
      audioIndex={audioIndex}
      selectModel={selectModel}
      audioHandler={audioHandler}
      isPlay={playController}
    />
  );
}

interface voiceModeltypes {
  name: string;
  sex: string;
  lang: string;
}

export default VoiceModel;
