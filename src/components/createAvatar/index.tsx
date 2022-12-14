import React, { memo, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Voice from './voice';
import Avatar from './avatar/index';
import { useAppSelector, useAppDispatch } from '../../store/store';
import Contents from './contents';
import { useGetProjectDataQuery } from '@/api/useApi';
import { useParams } from 'react-router-dom';
import { getData } from '@/store/workingProject/projectControlSlice';
import { initVoiceOption, inputText } from '@/store/voice/voiceSlice';
import LoadingBigLayout from '@/layout/LoadingBigLayout';
import ErrorBigLayout from '@/layout/ErrorBigLayout';
import ProjectHeader from '../Header/ProjectHeader';
import ProjectFooter from '../Footer/ProjectFooter';

const CreateAvatar = memo(() => {
  // 프로젝트 데이터 가져오기
  const dispatch = useAppDispatch();
  const { projectId: paramsProjectId } = useParams();
  const { callProjectData } = useAppSelector((state) => state.projectControl.elementData);
  const [getProjectData, setProjectData] = useState({
    count: callProjectData,
    projectId: paramsProjectId!,
  });
  // 합성 관련 api통신이 일어날때마다 프로젝트 데이터 요청
  useMemo(() => {
    setProjectData((prev) => {
      return { ...prev, count: callProjectData };
    });
  }, [callProjectData]);
  const { data: projectData, isLoading, isError, error } = useGetProjectDataQuery(getProjectData);

  useMemo(() => {
    if (projectData) {
      dispatch(getData(projectData.data));
    }
  }, [projectData]);

  // 음성 옵션 초기값
  const { speed, pitch, durationSilence, text } = useAppSelector(
    (state) => state.projectControl.projectData,
  );
  useEffect(() => {
    dispatch(
      initVoiceOption({
        speed,
        pitch,
        durationSilence,
      }),
    );
    dispatch(inputText(text));
  }, [speed]);

  // 음성 작업 파트 구분
  const { isVoiceWoking, isInputTextSynthLoading, isInputTextSynthError } = useAppSelector(
    (state) => state.projectControl.elementData,
  );
  const { inputTextSynthError } = useAppSelector((state) => state.projectControl.err);
  return (
    <>
      {isInputTextSynthError ? <ErrorBigLayout errorData={inputTextSynthError} /> : null}
      {isError ? <ErrorBigLayout errorData={error!} /> : null}
      {isLoading || isInputTextSynthLoading ? <LoadingBigLayout /> : null}
      <ProjectHeader />
      <Contain>
        <div>
          <Navbar />
        </div>
        <Contents />
        {isVoiceWoking ? <Voice /> : <Avatar />}
      </Contain>
      <ProjectFooter />
    </>
  );
});

const Contain = styled.div`
  height: calc(100vh - 8.5rem);
  position: relative;
`;

export default CreateAvatar;
