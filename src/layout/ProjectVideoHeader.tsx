import React from 'react';
import SoundPlayer from './SoundPlayer';
import styled from 'styled-components';
import leftarrow from '/images/arrow-ios-left.png';
import editpencil from '/images/edit-pencil.png';
import saveimage from '/images/save.png';
import videoimage from '/images/video.png';

function ProjectHeader() {
  return (
    <>
      <ProjectHeaderContainer>
        <ProjectNameContainer>
          <LeftArrow />
          <ProjectNameText>프로젝트 명</ProjectNameText>
          <NameEditImage />
        </ProjectNameContainer>
        <div>
          <SoundPlayer />
        </div>
        <ImageButtonContainer>
          <SaveButton>
            프로젝트 저장
            <SaveImage />
          </SaveButton>
          <DownloadButton
            onClick={() => alert('영상과 합성된 프로젝트 영상을 다운 받으시겠습니까?')}
          >
            영상 다운로드
            <VideoImage />
          </DownloadButton>
          <DownloadButton onClick={() => alert('프로젝트를 저장 후 다운로드를 진행해주세요')}>
            영상 합성하기
            <VideoImage />
          </DownloadButton>
        </ImageButtonContainer>
      </ProjectHeaderContainer>
    </>
  );
}

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
  width: 10.25rem;
  height: 2.06rem;
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

const ImageButtonContainer = styled.div`
  display: flex;
`;

const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5rem;
  height: 2.5rem;
  border: 0.0625rem solid #aac2ff;
  border-radius: 0.3125rem;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: -0.005em;
  color: #000;
  cursor: pointer;
  margin-right: 1.5rem;
`;

const SaveImage = styled.img.attrs({
  src: `${saveimage}`,
})`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
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

const VideoImage = styled.img.attrs({
  src: `${videoimage}`,
})`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
`;

export default ProjectHeader;
