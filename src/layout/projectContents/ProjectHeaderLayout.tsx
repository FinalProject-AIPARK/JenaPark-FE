import { memo, useEffect, useState } from 'react';
import { useVideoSynthesisQuery } from '@/api/useApi';
import { useAppSelector } from '@/store/store';
import SoundPlayer from '../ProjectHeaderSoundPlayer';
import styled from 'styled-components';
import leftarrow from '/images/arrow-ios-left.png';
import editpencil from '/images/edit-pencil.png';
import videoimage from '/images/video.png';
import voiceimage from '/images/music.png';
import LoadingBigLayout from '../LoadingBigLayout';

const ProjectHeaderLayout = memo(() => {
  const {
    projectId: id,
    downloadAudioUrl,
    audioUpload,
  } = useAppSelector((state) => state.projectControl.projectData);

  const [synth, setSynth] = useState({
    count: 0,
    projectId: 0,
  });
  const [countNum, setCountNum] = useState(0);
  const [download, setDownload] = useState('');
  useEffect(() => {
    if (downloadAudioUrl) setDownload(downloadAudioUrl);
  }, [downloadAudioUrl]);
  const { data: VideoSynthesis, isLoading } = useVideoSynthesisQuery(synth);
  function synthHandler() {
    setCountNum(countNum + 1);
    setSynth({
      count: countNum,
      projectId: id,
    });
  }
  //
  useEffect(() => {
    if (VideoSynthesis) {
      VideoSynthesis!.result === 'success' ? (window.location.href = '/history') : null;
    }
  }, [VideoSynthesis]);

  return (
    <>
      {isLoading ? <LoadingBigLayout /> : null}
      <ProjectHeaderContainer>
        <ProjectNameContainer>
          <LeftArrow />
          <ProjectNameText>프로젝트 명</ProjectNameText>
          <NameEditImage />
        </ProjectNameContainer>
        <SoundPlayerContainer>{audioUpload ? null : <SoundPlayer />}</SoundPlayerContainer>
        <ImageButtonContainer>
          <DownloadButton>
            <a href={download ? download : ''} download>
              음성 다운로드
            </a>
            <VoiceImage />
          </DownloadButton>
          <DownloadButton onClick={synthHandler}>
            영상 합성하기
            <VideoImage />
          </DownloadButton>
        </ImageButtonContainer>
      </ProjectHeaderContainer>
    </>
  );
});

const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.88rem;
  background: rgba(0, 19, 52, 0.5);
  box-shadow: 4px 4px 10px rgba(250, 250, 250, 0.1);
`;
const ProjectNameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const LeftArrow = styled.img.attrs({
  src: `${leftarrow}`,
})`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-right: 0.3125rem;
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(258deg) brightness(107%) contrast(101%);
`;
const ProjectNameText = styled.span`
  font-weight: 700;
  font-size: 1.375rem;
  color: #fff;
`;
const NameEditImage = styled.img.attrs({
  src: `${editpencil}`,
})`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-left: 0.3125rem;
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(258deg) brightness(107%) contrast(101%);
`;
const SoundPlayerContainer = styled.div`
  width: 40%;
`;
const ImageButtonContainer = styled.div`
  display: flex;
`;
const DownloadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5rem;
  height: 2.5rem;
  background: #80a4ff;
  border: 0.0625rem solid #80a4ff;
  border-radius: 0.3125rem;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: -0.005em;
  color: #000;
  cursor: pointer;
  margin-right: 1.5rem;

  :last-child {
    margin-right: 0;
  }
`;
const VoiceImage = styled.img.attrs({
  src: `${voiceimage}`,
})`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
`;
const VideoImage = styled.img.attrs({
  src: `${videoimage}`,
})`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
`;

export default ProjectHeaderLayout;
