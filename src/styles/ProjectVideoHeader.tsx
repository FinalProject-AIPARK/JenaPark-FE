import React from 'react';
import SoundPlayer from './SoundPlayer';
import * as S from './HeaderStyle';

function ProjectHeader() {
  return (
    <>
      <S.ProjectHeader>
        <S.ProjectNameContainer>
          <S.LeftArrow />
          <S.ProjectNameText>프로젝트 명</S.ProjectNameText>
          <S.NameEditImage />
        </S.ProjectNameContainer>
        <div>
          <SoundPlayer />
        </div>
        <S.ImageButtonContainer>
          <S.SaveButton>
            프로젝트 저장
            <S.SaveImage />
          </S.SaveButton>
          <S.DownloadButton
            onClick={() =>
              alert('영상과 합성된 프로젝트 영상을 다운 받으시겠습니까?')
            }
          >
            영상 다운로드
            <S.VideoImage />
          </S.DownloadButton>
          <S.DownloadButton
            onClick={() => alert('프로젝트를 저장 후 다운로드를 진행해주세요')}
          >
            영상 합성하기
            <S.VideoImage />
          </S.DownloadButton>
        </S.ImageButtonContainer>
      </S.ProjectHeader>
    </>
  );
}

export default ProjectHeader;
