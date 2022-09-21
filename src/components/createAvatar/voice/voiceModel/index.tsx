import React, { useEffect, useRef, useState } from 'react';
import { useGetVoiceModelQuery, useUploadVoiceMutation } from '../../../../api/useApi';
import VoiceModelLayout from '../../../../styles/VoiceModelLayout';

function VoiceModel() {
  // 음성 모델  전체 리스트 불러오기
  const [voiceFilter, setVoiceFilter] = useState({ sex: 'female', lang: 'kor' });
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
  const { data: resVoiceModel } = useGetVoiceModelQuery(voiceFilter);
  useEffect(() => {
    if (resVoiceModel) setVoiceModelData(resVoiceModel.data);
    nameBackColorHandler();
    console.log(modelNameColor);
    // 재생버튼 독립적으로 동작하기 위해 불린데이터 값을 리스트 갯수와 맞춰준다.
    for (let i = 0; i < voiceModelData.length; i++) {
      setPlayController((current) => {
        return current.length ? [...current, false] : [false];
      });
    }
  }, [resVoiceModel]);

  // 음성 업로드 서버로 전송
  interface Uploadtypes {
    // 아직 뭐가 가야하고 뭐가 오는지 모름
  }
  const [uploadVoice, { data: up, status, isLoading, isError }] = useUploadVoiceMutation();
  const [uploadFile, setUploadFile] = useState<Uploadtypes | null>(null);
  function uploadHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files);
    // uploadVoice({
    //   projectId: '',
    //   file: event.target.files?.item(0)
    // })
    // 전송되고 아바타로 화면 전환
  }

  // 음성 모델 필터링
  const [sexButtonStyle, setSexButtonStyle] = useState(true);
  const [langButtonStyle, setLangButtonStyle] = useState([true, false, false]);
  function sexFilterHandler(filter: string) {
    if (filter === 'female') {
      setSexButtonStyle(true);
      setVoiceFilter({ ...voiceFilter, sex: 'female' });
    } else {
      setSexButtonStyle(false);
      setVoiceFilter({ ...voiceFilter, sex: 'male' });
    }
    // 리스트 요청
    // 값이 바뀌면 데이터도 자동으로 바뀌는걸로 암
  }
  function langFilterHandler(filter: string) {
    if (filter === 'kor') {
      setLangButtonStyle((prev) => {
        let next = prev.map((item) => (item = false));
        next[0] = true;
        return next;
      });
      setVoiceFilter({ ...voiceFilter, lang: 'kor' });
    } else if (filter === 'eng') {
      setLangButtonStyle((prev) => {
        let next = prev.map((item) => (item = false));
        next[1] = true;
        return next;
      });
      setVoiceFilter({ ...voiceFilter, lang: 'eng' });
    } else {
      setLangButtonStyle((prev) => {
        let next = prev.map((item) => (item = false));
        next[2] = true;
        return next;
      });
      setVoiceFilter({ ...voiceFilter, lang: 'chi' });
    }
    // 리스트 요청
    // 값이 바뀌면 데이터도 자동으로 바뀌는걸로 암
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

  // 음성 모델 카드 스타일링
  const [selectModelCard, setSelectModelCard] = useState<boolean[]>([...playController]);
  function selectModelCardHandler(index: number) {
    setSelectModelCard((prev) => {
      let card = prev.map((item) => (item = false));
      card.splice(index, 1, !prev[index]);
      return card;
    });
  }

  // 음성 모델 이름 배경색
  const backColorList = ['#0049FF', '#EB5757', '#27AE60', '#F2C94C', '#F2994A', '#BB6BD9'];
  const [modelNameColor, setModelNameColor] = useState('');
  function nameBackColorHandler() {
    switch (voiceFilter.sex) {
      case 'female':
        if (voiceFilter.lang === 'kor') setModelNameColor(backColorList[1]);
        else if (voiceFilter.lang === 'eng') setModelNameColor(backColorList[3]);
        else setModelNameColor(backColorList[4]);
        break;
      case 'male':
        if (voiceFilter.lang === 'kor') setModelNameColor(backColorList[0]);
        else if (voiceFilter.lang === 'eng') setModelNameColor(backColorList[2]);
        else setModelNameColor(backColorList[5]);
        break;
    }
  }

  // 선택하기 버튼 동작
  interface voiceModeltypes {
    name: string;
    sex: string;
    lang: string;
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
      selectModelCardHandler={selectModelCardHandler}
      selectModelCard={selectModelCard}
      selectModel={selectModel}
      sexButtonStyle={sexButtonStyle}
      sexFilterHandler={sexFilterHandler}
      langButtonStyle={langButtonStyle}
      langFilterHandler={langFilterHandler}
      modelNameColor={modelNameColor}
      audioIndex={audioIndex}
      audioHandler={audioHandler}
      isPlay={playController}
    />
  );
}

export default VoiceModel;
