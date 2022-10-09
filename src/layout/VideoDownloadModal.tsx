import React, { memo } from 'react';
import styled from 'styled-components';
import dummy from '/dummyVideo.mp4';

const VideoDownloaddModal = memo(() => {
  return (
    <div>
      <ModalBox>
        <Video controls>
          <source
            src="https://jenapark.s3.ap-northeast-2.amazonaws.com/video/TestVideo.mp4"
            type="video/mp4"
          ></source>
        </Video>
        <button>
          <a
            href="https://dcobz7rlzesm7.cloudfront.net/video/3f22c7862cd24b0787b3ff5d1d1d92c7.mp4"
            download
          >
            테스트 다운로드
          </a>
        </button>
      </ModalBox>
      <ModalBack>modalbackground</ModalBack>
    </div>
  );
});

const ModalBox = styled.div`
  background-color: #fff;
  width: 25rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(50vh - 18rem);
  right: calc(50vw - 12.5rem);
  padding: 2.06rem 1.87rem;
  border-radius: 0.63rem;
  z-index: 99;
`;
const Video = styled.video`
  width: 100%;
`;
const ModalBack = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 40%;
  z-index: 2;
`;

export default VideoDownloaddModal;
