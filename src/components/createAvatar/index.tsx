import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Voice from './voice';
import Avatar from './avatar/index';
import Header from '../Header/ProjectHeader';
import Footer from '../Footer/ProjectFooter';
import { useAppSelector, useAppDispatch } from '../../store/store';
import Contents from './contents';
import { useGetProjectDataQuery } from '@/api/useApi';
import { useParams } from 'react-router-dom';
import { getData } from '@/store/workingProject/projectControlSlice';
import { initVoiceOption } from '@/store/voice/voiceSlice';

function CreateAvatar() {
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
    console.log('카운트');
  }, [callProjectData]);
  const { data: projectData } = useGetProjectDataQuery(getProjectData);

  useMemo(() => {
    if (projectData) {
      dispatch(getData(projectData.data));
    }
  }, [projectData]);

  // 음성 옵션 초기값
  const { speed, pitch, durationSilence } = useAppSelector(
    (state) => state.projectControl.projectData,
  );
  useMemo(() => {
    dispatch(
      initVoiceOption({
        speed,
        pitch,
        durationSilence,
      }),
    );
  }, [speed]);

  // 음성 작업 파트 구분
  const { isVoiceWoking } = useAppSelector((state) => state.projectControl.elementData);
  return (
    <>
      <Header />
      <Contain>
        <div>
          <Navbar />
        </div>
        <Contents />
        {isVoiceWoking ? <Voice /> : <Avatar />}
      </Contain>
      <Footer />
    </>
  );
}

const Contain = styled.div`
  height: calc(100vh - 8.5rem);
  position: relative;
`;

export default CreateAvatar;
