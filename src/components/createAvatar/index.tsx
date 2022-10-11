import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Voice from './voice';
import Avatar from './avatar/index';
import Header from '../Header';
import Footer from '../Footer/ProjectFooter';
import { useAppSelector, useAppDispatch } from '../../store/store';
import Contents from './contents';
import { useGetProjectDataQuery } from '@/api/useApi';
import { useParams } from 'react-router-dom';
import { getData } from '@/store/workingProject/projectControlSlice';

function CreateAvatar() {
  // 프로젝트 데이터 가져오기
  const dispatch = useAppDispatch();
  const { projectId } = useParams();
  const { data: projectData } = useGetProjectDataQuery(projectId!);
  useEffect(() => {
    if (projectData) dispatch(getData(projectData.data));
  }, [projectData]);

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
