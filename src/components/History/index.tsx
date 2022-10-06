import HistoryProjectLayout from '@/layout/HistoryProjectLayout';
import HistoryVideoLayout from '@/layout/HistoryVideoLayout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetProjectHistoyQuery, useCreateProjectMutation } from '@/api/useApi';

function History() {
  // 프로젝트 리스트 요청
  const { data: project } = useGetProjectHistoyQuery(null);
  const [projectList, setProjectList] = useState([
    {
      projectId: 0,
      title: '',
      thumbnail: null,
      createDate: '',
      modifiedDate: '',
    },
  ]);
  useEffect(() => {
    if (project) setProjectList(project.data);
  }, [project]);

  // 프로젝트 생성
  const [create, { data: responseCreate, isLoading: createLoad }] = useCreateProjectMutation();
  function createProjectHandler() {
    create('');
  }
  useEffect(() => {
    if (responseCreate) window.location.href = '/project';
  }, [createLoad]);

  // 이전에 생성한 프로젝트로 이동
  function prevProjectHandler(id: number) {
    window.location.href = `/project/${id}`;
  }
  return (
    <Container>
      <Header></Header>
      <div style={{ height: 'calc(100vh - 10.06rem)' }}>
        <HistoryProjectLayout
          projectList={projectList}
          createProjectHandler={createProjectHandler}
          prevProjectHandler={prevProjectHandler}
        />
        {/* <HistoryVideoLayout /> */}
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  height: 4.5rem;
`;

export default History;
