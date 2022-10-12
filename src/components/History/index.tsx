import HistoryProjectLayout from '@/layout/HistoryProjectLayout';
import HistoryVideoLayout from '@/layout/HistoryVideoLayout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  useGetProjectHistoyQuery,
  useCreateProjectMutation,
  useEditProjectTitleMutation,
  useEditVideoTitleMutation,
  useDeleteVideoMutation,
  useDeleteProjectMutation,
} from '@/api/useApi';
import VideoDownloaddModal from '@/layout/VideoDownloadModal';
import HistoryLoadingLayout from '@/layout/HistoryLoadingLayout';
import HistoryErrorLayout from '@/layout/HistoryErrorLayout';

function History() {
  // 빈 박스
  const [projectEmpty, setProjectEmpty] = useState([0]);
  const [videoEmpty, setVideoEmpty] = useState([0]);

  // 프로젝트 리스트 요청
  const [update, setUpdate] = useState(0);
  const {
    data: project,
    isLoading: loadingProject,
    isError: errorProject,
    error,
  } = useGetProjectHistoyQuery(update);
  const [errorState, setErrorState] = useState('');
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
      setErrorState(project.message);
      setProjectList(project.data.historyProjects);
      setVideoList(project.data.historyVideos);
      setIsEditProject([]);
      setTitle([]);
      for (let i = 0; i < project.data.historyProjects.length; i++) {
        setIsEditProject((prev) => [...prev, false]);
        setTitle((prev) => [...prev, project.data.historyProjects[i].title]);
      }
      // 리스트 빈 박스 표시
      setProjectEmpty([]);
      setVideoEmpty([]);
      let projectCount = 5 - project.data.historyProjects.length;
      let VideoCount = 5 - project.data.historyVideos.length;
      for (let i = 0; i < projectCount; i++) {
        setProjectEmpty((prev) => {
          let next = [...prev];
          next.push(i + 1);
          return next;
        });
      }
      for (let i = 0; i < VideoCount; i++) {
        setVideoEmpty((prev) => {
          let next = [...prev];
          next.push(i + 1);
          return next;
        });
      }
    }
    console.log(error);
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
    setIsEditVideo(false);
  }
  function selectVideoHandler(item: selectTypes) {
    setSelectItem(item);
    setVideoTitle(item.title);
    setModal(true);
  }

  // 프로젝트 삭제
  const [deleteProject, { data: resDeleteProject }] = useDeleteProjectMutation();
  function deleteProjectHandler(id: number) {
    deleteProject(id);
  }
  useEffect(() => {
    setUpdate(update + 1);
  }, [resDeleteProject]);

  // 영상 삭제
  const [deleteVideo, { data: resDeleteVideo }] = useDeleteVideoMutation();
  function deleteVideoHandler(id: number) {
    deleteVideo(id);
  }
  useEffect(() => {
    setModal(false);
    setUpdate(update + 1);
  }, [resDeleteVideo]);

  return (
    <Container>
      {errorProject ? <HistoryErrorLayout errorData={error!} /> : null}
      {loadingProject ? <HistoryLoadingLayout /> : null}
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
          projectEmpty={projectEmpty}
          deleteProjectHandler={deleteProjectHandler}
          loadingProject={loadingProject}
        />
        <HistoryVideoLayout
          videoList={videoList}
          guideText={guideText[1]}
          guideHandler={guideHandler}
          selectVideoHandler={selectVideoHandler}
          videoEmpty={videoEmpty}
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
          deleteVideoHandler={deleteVideoHandler}
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
