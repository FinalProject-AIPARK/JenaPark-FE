import HistoryProjectLayout from '@/layout/HistoryProjectLayout';
import HistoryVideoLayout from '@/layout/HistoryVideoLayout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  useGetProjectHistoyQuery,
  useCreateProjectMutation,
  useEditProjectTitleMutation,
} from '@/api/useApi';

function History() {
  // 프로젝트 리스트 요청
  const [update, setUpdate] = useState(0);
  const { data: project } = useGetProjectHistoyQuery(update);
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
    if (project) {
      setProjectList(project.data);
      setIsEdit([]);
      setTitle([]);
      for (let i = 0; i < project.data.length; i++) {
        setIsEdit((prev) => [...prev, false]);
        setTitle((prev) => [...prev, project.data[i].title]);
      }
    }
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

  // 프로젝트 이름 수정
  const [isEdit, setIsEdit] = useState([false]);
  const [title, setTitle] = useState(['']);
  const [edit, { data: resEdit }] = useEditProjectTitleMutation();
  function changeTitle(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    setTitle((prev) => {
      let next = [...prev];
      next[index] = event.target.value;
      return next;
    });
  }
  function editTitleHandler(title: string, index: number) {
    setIsEdit((prev) => {
      let next = [...prev];
      next[index] = true;
      return next;
    });
  }
  function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>, index: number, id: number) {
    if (event.key === 'Enter') {
      edit({
        projectID: id,
        title: title[index],
      });
      setIsEdit((prev) => {
        let next = [...prev];
        next[index] = false;
        return next;
      });
    }
  }
  useEffect(() => {
    setUpdate(update + 1);
  }, [resEdit]);

  // 도움말
  const [guideText, setGuideText] = useState(false);
  function guideHandler(isOn: boolean) {
    setGuideText(isOn);
  }

  return (
    <Container>
      <Header></Header>
      <div style={{ height: 'calc(100vh - 10.06rem)' }}>
        <HistoryProjectLayout
          projectList={projectList}
          createProjectHandler={createProjectHandler}
          prevProjectHandler={prevProjectHandler}
          isEdit={isEdit}
          editTitleHandler={editTitleHandler}
          title={title}
          changeTitle={changeTitle}
          keyDownHandler={keyDownHandler}
          guideText={guideText}
          guideHandler={guideHandler}
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
