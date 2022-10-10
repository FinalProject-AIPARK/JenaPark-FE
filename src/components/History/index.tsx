import HistoryProjectLayout from '@/layout/HistoryProjectLayout';
import HistoryVideoLayout from '@/layout/HistoryVideoLayout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  useGetProjectHistoyQuery,
  useCreateProjectMutation,
  useEditProjectTitleMutation,
  useEditVideoTitleMutation,
} from '@/api/useApi';
import VideoDownloaddModal from '@/layout/VideoDownloadModal';

function History() {
  // 프로젝트 리스트 요청
  const [update, setUpdate] = useState(0);
  const { data: project } = useGetProjectHistoyQuery(update);
  const [projectList, setProjectList] = useState([
    {
      projectId: 0,
      title: '',
      createDate: '',
      modifiedDate: '',
    },
  ]);
  const [videoList, setVideoList] = useState([
    {
      videoId: 0,
      title: '',
      avatarUrl: '',
      backgroundUrl: '',
      videoFileUrl: '',
      downloadFileUrl: '',
      createDate: '',
    },
  ]);
  useEffect(() => {
    if (project) {
      setProjectList(project.data.historyProjects);
      setVideoList(project.data.historyVideos);
      setIsEditProject([]);
      setTitle([]);
      for (let i = 0; i < project.data.historyProjects.length; i++) {
        setIsEditProject((prev) => [...prev, false]);
        setTitle((prev) => [...prev, project.data.historyProjects[i].title]);
      }
    }
  }, [project]);

  // 프로젝트 생성
  const [create, { data: responseCreate, isLoading: createLoad }] = useCreateProjectMutation();
  function createProjectHandler() {
    create('');
  }
  useEffect(() => {
    if (responseCreate?.data.projectId) {
      window.location.href = `/project/${responseCreate.data.projectId}`;
    }
  }, [responseCreate]);

  // 이전에 생성한 프로젝트로 이동
  function prevProjectHandler(id: number) {
    window.location.href = `/project/${id}`;
  }

  // 프로젝트 이름 수정
  const [isEditProject, setIsEditProject] = useState([false]);
  const [title, setTitle] = useState(['']);
  const [editProjectName, { data: resEditProject }] = useEditProjectTitleMutation();
  function changeProjectTitle(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    setTitle((prev) => {
      let next = [...prev];
      next[index] = event.target.value;
      return next;
    });
  }
  function editTitleHandler(title: string, index: number) {
    setIsEditProject((prev) => {
      let next = [...prev];
      next[index] = true;
      return next;
    });
  }
  function keyDownProjectHandler(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    id: number,
  ) {
    if (event.key === 'Enter') {
      editProjectName({
        projectID: id,
        title: title[index],
      });
      setIsEditProject((prev) => {
        let next = [...prev];
        next[index] = false;
        return next;
      });
    }
  }

  // 영상 이름 수정
  const [isEditVideo, setIsEditVideo] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [editVideoName, { data: resEditVideo }] = useEditVideoTitleMutation();
  function editVideoHandler() {
    setIsEditVideo(true);
  }
  function changeVideoTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setVideoTitle(event.target.value);
  }
  function keyDownVideoHandler(event: React.KeyboardEvent<HTMLInputElement>, id: number) {
    if (event.key === 'Enter') {
      editVideoName({
        videoId: id,
        action: {
          title: videoTitle,
        },
      });
      setSelectItem((prev) => {
        let next = { ...prev, title: videoTitle };
        return next;
      });
      setIsEditVideo(false);
    }
  }
  useEffect(() => {
    setUpdate(update + 1);
  }, [resEditProject, resEditVideo]);

  // 도움말
  const [guideText, setGuideText] = useState([false, false]);
  function guideHandler(isOn: boolean, index: number) {
    setGuideText((prev) => {
      let next = [...prev];
      next[index] = isOn;
      return next;
    });
  }

  // 모달창 영상 재생, 다운로드
  interface selectTypes {
    videoId: number;
    title: string;
    videoFileUrl: string;
    createDate: string;
    avatarUrl: string;
    backgroundUrl: string;
    downloadFileUrl: string;
  }
  const [modal, setModal] = useState(false);
  const [selectItem, setSelectItem] = useState({
    videoId: 0,
    title: '',
    avatarUrl: '',
    backgroundUrl: '',
    videoFileUrl: '',
    downloadFileUrl: '',
    createDate: '',
  });
  function closeModal() {
    setModal(false);
  }
  function selectVideoHandler(item: selectTypes) {
    setSelectItem(item);
    setVideoTitle(item.title);
    setModal(true);
  }

  return (
    <Container>
      <Header></Header>
      <div style={{ height: 'calc(100vh - 10.06rem)' }}>
        <HistoryProjectLayout
          projectList={projectList}
          createProjectHandler={createProjectHandler}
          prevProjectHandler={prevProjectHandler}
          isEdit={isEditProject}
          editTitleHandler={editTitleHandler}
          title={title}
          changeTitle={changeProjectTitle}
          keyDownHandler={keyDownProjectHandler}
          guideText={guideText[0]}
          guideHandler={guideHandler}
        />
        <HistoryVideoLayout
          videoList={videoList}
          guideText={guideText[1]}
          guideHandler={guideHandler}
          selectVideoHandler={selectVideoHandler}
        />
      </div>
      {modal ? (
        <VideoDownloaddModal
          selectItem={selectItem}
          closeModal={closeModal}
          isEditVideo={isEditVideo}
          videoTitle={videoTitle}
          editVideoHandler={editVideoHandler}
          keyDownVideoHandler={keyDownVideoHandler}
          changeVideoTitle={changeVideoTitle}
        />
      ) : null}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Header = styled.div`
  height: 4.5rem;
`;

export default History;
