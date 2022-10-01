import VoiceUploadModal from '@/layout/Voice/VoiceUploadModal';
import React, { useEffect, useRef, useState, ChangeEvent, DragEvent } from 'react';
import styled from 'styled-components';
import { useGetVoiceModelQuery, useUploadVoiceMutation } from '../../../../api/useApi';
import SearchVoiceModelLayout from '../../../../layout/Voice/SearchVoiceModelLayout';
import VoiceModelFilterButton from '../../../../layout/Voice/VoiceModelFilterButton';
import VoiceModelListLayout from '../../../../layout/Voice/VoiceModelListLayout';
import { useAppSelector, useAppDispatch } from '../../../../store/store';
import {
  modelDataAction,
  voiceOptionWorking,
  selectedModel,
} from '../../../../store/voice/voiceSlice';

function VoiceModel() {
  const dispatch = useAppDispatch();
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
  const [onModal, setOnModal] = useState(false);
  const [uploadFile, { data: url, isLoading: uploading, isError }] = useUploadVoiceMutation();
  const [audioFile, setAudioFile] = useState<Array<File>>([]);

  // 이미지 파일 처리 input
  function onInputFile(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    handleFiles(event.target.files!);
  }
  // 이미지 파일 처리 ondrop
  function onDropFiles(event: DragEvent<HTMLDivElement>) {
    // console.log({ event }, event.dataTransfer.files);
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  }
  function handleFiles(files: FileList) {
    const file: File = files[0];
    setAudioFile([file]);
  }
  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (audioFile.length) {
      let formData = new FormData();
      formData.append('audioFile', audioFile[0], audioFile[0].name);
      // 나중에 프로젝트아이디 연결해야해
      const projectID = 23;
      const actionUpload = {
        formData,
        projectID,
      };
      uploadFile(actionUpload);
    }
    setOnModal(false);
  }

  // 음성 모델 필터링
  const [sexButton, setSexButton] = useState(true);
  const [langButton, setLangButton] = useState('한국어');
  const [dropdown, setDropdown] = useState(false);
  const offDropdown = useRef(null);
  function dropdownHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target !== offDropdown.current && dropdown) {
      setDropdown(false);
    } else if (event.target === offDropdown.current) {
      setDropdown(!dropdown);
    }
  }
  function sexFilterHandler(filter: string) {
    if (filter === 'female') {
      setSexButton(true);
      setVoiceFilter({ ...voiceFilter, sex: 'female' });
    } else {
      setSexButton(false);
      setVoiceFilter({ ...voiceFilter, sex: 'male' });
    }
    // 리스트 요청
    // 값이 바뀌면 데이터도 자동으로 바뀌는걸로 암
  }
  function langFilterHandler(filter: string) {
    if (filter === '한국어') {
      setLangButton('한국어');
      setVoiceFilter({ ...voiceFilter, lang: 'kor' });
    } else if (filter === '영어') {
      setLangButton('영어');
      setVoiceFilter({ ...voiceFilter, lang: 'eng' });
    } else {
      setLangButton('중국어');
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
        else if (voiceFilter.lang === 'eng') dispatch(selectedModel(backColorList[3]));
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
  const { voiceData } = useAppSelector((state) => state.voice);
  interface voiceModeltypes {
    name: string;
    sex: string;
    lang: string;
    url: string;
  }
  function InputVoiceModel(model: voiceModeltypes) {
    // 변수에 담아서 마지막 선택하기 눌렀을때 변수에 있는 데이터를 api전송
    // 여기는 변수에 답는 로직이 있어야해
    // 이름, 성별, 언어 데이터 들어옴
    if (voiceData.avatarName === model.name) {
      dispatch(
        modelDataAction({
          name: '',
          sex: 'female',
          lang: 'kor',
        }),
      );
    } else {
      dispatch(modelDataAction(model));
      dispatch(selectedModel({ color: modelNameColor, url: model.url }));
    }
  }

  function selectModel() {
    dispatch(voiceOptionWorking());
  }

  return (
    <Container
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => dropdownHandler(event)}
    >
      <SearchVoiceModelLayout setOnModal={setOnModal} audioFile={audioFile} />
      {onModal ? (
        <VoiceUploadModal
          onModal={onModal}
          audioFile={audioFile}
          setAudioFile={setAudioFile}
          onDropFiles={onDropFiles}
          dragOver={dragOver}
          onInputFile={onInputFile}
          submitHandler={submitHandler}
        />
      ) : null}
      <VoiceModelFilterButton
        sexButton={sexButton}
        sexFilterHandler={sexFilterHandler}
        langButton={langButton}
        langFilterHandler={langFilterHandler}
        dropdown={dropdown}
        dropdownHandler={dropdownHandler}
        offDropdown={offDropdown}
        audioFile={audioFile}
      />
      <VoiceModelListLayout
        voiceModel={voiceModelData}
        inputModel={InputVoiceModel}
        selectModelCardHandler={selectModelCardHandler}
        selectModelCard={selectModelCard}
        selectModel={selectModel}
        modelNameColor={modelNameColor}
        audioIndex={audioIndex}
        audioHandler={audioHandler}
        isPlay={playController}
        audioFile={audioFile}
      />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 4.6rem);
  display: flex;
  flex-direction: column;
  margin-top: 1.56rem;
`;

export default VoiceModel;
