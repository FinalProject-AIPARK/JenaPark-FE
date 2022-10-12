import VoiceUploadModal from '@/layout/Voice/VoiceUploadModal';
import React, { useEffect, useRef, useState, ChangeEvent, DragEvent } from 'react';
import styled from 'styled-components';
import { useGetVoiceModelMutation, useUploadVoiceMutation } from '../../../../api/useApi';
import SearchVoiceModelLayout from '../../../../layout/Voice/SearchVoiceModelLayout';
import VoiceModelFilterButton from '../../../../layout/Voice/VoiceModelFilterButton';
import VoiceModelListLayout from '../../../../layout/Voice/VoiceModelListLayout';
import { useAppSelector, useAppDispatch } from '../../../../store/store';
import { workingComponent } from '../../../../store/workingProject/projectControlSlice';
import {
  modelDataAction,
  voiceOptionWorking,
  getProjectId,
  selectedModel,
  initModelColor,
  initVoiceModel,
} from '../../../../store/voice/voiceSlice';

function VoiceModel() {
  const { projectId, sex, lang, audioModelUrl, audioFileOriginName, audioModel } = useAppSelector(
    (state) => state.projectControl.projectData,
  );
  const dispatch = useAppDispatch();
  // 음성 모델  전체 리스트 불러오기
  const [voiceFilter, setVoiceFilter] = useState({ sex: '', lang: '' });
  const [getVoice, { data: resVoiceModel }] = useGetVoiceModelMutation();
  // 초기 음성 모델 데이터 부름
  const [initColor, setInitColor] = useState('');
  useEffect(() => {
    if (sex) {
      console.log('hi');
      setVoiceFilter({ sex, lang });
      sex === 'male' ? setSexButton(false) : null;
      switch (lang) {
        case 'eng':
          setLangButton('영어');
          break;
        case 'chi':
          setLangButton('중국어');
          break;
        default:
          return;
      }
    }
  }, [sex]);
  useEffect(() => {
    dispatch(initModelColor(initColor));
    dispatch(
      initVoiceModel({
        projectId,
        sex,
        lang,
        name: audioModel,
        url: audioModelUrl,
      }),
    );
  }, [initColor]);
  // 음성 모델 카테고리
  useEffect(() => {
    getVoiceHandler();
  }, [voiceFilter]);
  function getVoiceHandler() {
    getVoice(voiceFilter);
    nameBackColorHandler();
    if (resVoiceModel) {
      for (let i = 0; i < resVoiceModel!.data.length; i++) {
        setPlayController((current) => {
          return current.length ? [...current, false] : [false];
        });
      }
    }
  }

  // 음성 업로드 서버로 전송
  const [onModal, setOnModal] = useState(false);
  const [uploadFile] = useUploadVoiceMutation();
  const [audioFile, setAudioFile] = useState<Array<File>>([]);
  const [prevUpload, setPrevUpload] = useState('');
  useEffect(() => {
    if (audioFileOriginName) setPrevUpload(audioFileOriginName);
  }, [audioFileOriginName]);
  // 이미지 파일 처리 input
  function onInputFile(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    handleFiles(event.target.files!);
  }
  // 이미지 파일 처리 ondrop
  function onDropFiles(event: DragEvent<HTMLDivElement>) {
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
      const projectID = projectId;
      const actionUpload = {
        formData,
        projectID,
      };
      uploadFile(actionUpload);
    } else {
      getVoiceHandler();
    }
    setOnModal(false);
  }
  function deleteUpload() {
    setAudioFile([]);
    setPrevUpload('');
  }

  // 업로드시 아바타 작업으로 이동
  function moveToAvartar() {
    dispatch(workingComponent());
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
  }
  function langFilterHandler(filter: string) {
    if (filter === ('한국어' || 'kor')) {
      setLangButton('한국어');
      setVoiceFilter({ ...voiceFilter, lang: 'kor' });
    } else if (filter === ('영어' || 'eng')) {
      setLangButton('영어');
      setVoiceFilter({ ...voiceFilter, lang: 'eng' });
    } else {
      setLangButton('중국어');
      setVoiceFilter({ ...voiceFilter, lang: 'chi' });
    }
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
  const { voiceData } = useAppSelector((state) => state.voice);
  const [selectModelCard, setSelectModelCard] = useState<boolean[]>([]);
  useEffect(() => {
    setSelectModelCard([...playController]);
    initSelectCard();
  }, [resVoiceModel]);
  function initSelectCard() {
    let index = 0;
    if (resVoiceModel) {
      index = resVoiceModel.data.findIndex((item) => item.name === voiceData.avatarName);
    }
    if (index > -1) {
      setSelectModelCard((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    }
  }
  function selectModelCardHandler(index: number) {
    setSelectModelCard((prev) => {
      let card = prev.map((item) => (item = false));
      card[index] = !prev[index];
      return card;
    });
  }

  // 음성 모델 이름 배경색
  const backColorList = ['#0049FF', '#EB5757', '#27AE60', '#F2C94C', '#F2994A', '#BB6BD9'];
  const [modelNameColor, setModelNameColor] = useState('');
  function nameBackColorHandler() {
    switch (voiceFilter.sex) {
      case 'female':
        if (voiceFilter.lang === 'kor') {
          setModelNameColor(backColorList[1]);
          audioModel ? setInitColor(backColorList[1]) : null;
        } else if (voiceFilter.lang === 'eng') {
          setModelNameColor(backColorList[3]);
          audioModel ? setInitColor(backColorList[3]) : null;
        } else {
          setModelNameColor(backColorList[4]);
          audioModel ? setInitColor(backColorList[4]) : null;
        }
        break;
      case 'male':
        if (voiceFilter.lang === 'kor') {
          setModelNameColor(backColorList[0]);
          audioModel ? setInitColor(backColorList[0]) : null;
        } else if (voiceFilter.lang === 'eng') {
          setModelNameColor(backColorList[2]);
          audioModel ? setInitColor(backColorList[2]) : null;
        } else {
          setModelNameColor(backColorList[5]);
          audioModel ? setInitColor(backColorList[5]) : null;
        }
        break;
      default:
        return;
    }
  }

  // 선택하기 버튼 동작
  const [dataBox, setDataBox] = useState({
    name: voiceData.avatarName,
    sex: '',
    lang: '',
    url: '',
  });
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
    if (dataBox.name === model.name) setDataBox({ ...dataBox, name: '' });
    else setDataBox(model);
  }

  function selectModel() {
    if (dataBox.name.length > 0) {
      dispatch(modelDataAction(dataBox));
      dispatch(selectedModel({ color: modelNameColor, url: dataBox.url }));
      dispatch(voiceOptionWorking());
    } else alert('사용할 보이스를 선택해주세요.');
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
          deleteUpload={deleteUpload}
          onDropFiles={onDropFiles}
          dragOver={dragOver}
          onInputFile={onInputFile}
          submitHandler={submitHandler}
          prevUpload={prevUpload}
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
        prevUpload={prevUpload}
      />
      <VoiceModelListLayout
        voiceModel={resVoiceModel!}
        inputModel={InputVoiceModel}
        selectModelCardHandler={selectModelCardHandler}
        selectModelCard={selectModelCard}
        selectModel={selectModel}
        modelNameColor={modelNameColor}
        audioIndex={audioIndex}
        audioHandler={audioHandler}
        isPlay={playController}
        audioFile={audioFile}
        prevUpload={prevUpload}
        moveToAvartar={moveToAvartar}
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
