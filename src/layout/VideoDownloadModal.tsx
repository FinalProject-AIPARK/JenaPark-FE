import React, { memo } from 'react';
import styled from 'styled-components';
import close from '/close-icon.png';
import pencil from '/images/edit-pencil.png';

const VideoDownloadModal = memo(
  ({
    selectItem,
    closeModal,
    isEditVideo,
    videoTitle,
    keyDownVideoHandler,
    editVideoHandler,
    changeVideoTitle,
    deleteVideoHandler,
  }: VideoModalProps) => {
    return (
      <>
        <ModalBox>
          <HeadBox>
            <TitleBox>
              {isEditVideo ? (
                <EditInput
                  value={videoTitle}
                  maxLength={12}
                  onChange={(event) => changeVideoTitle(event)}
                  onKeyDown={(event) => keyDownVideoHandler(event, selectItem.videoId)}
                />
              ) : (
                <>
                  <InnerTitleBox>
                    <span style={{ width: '10rem' }}>{selectItem.title}</span>
                  </InnerTitleBox>
                  <img
                    src={pencil}
                    alt="영상 이름 수정 아이콘"
                    onClick={editVideoHandler}
                    style={{ width: '1.3rem', marginLeft: '0.6rem' }}
                  />
                </>
              )}
            </TitleBox>
            <ButtonStyle backColor="transparent" onClick={closeModal}>
              <img src={close} alt="닫기 버튼 아이콘" style={{ width: '1.6rem' }} />
            </ButtonStyle>
          </HeadBox>
          <Video controls>
            <source src={selectItem.videoFileUrl} type="video/mp4"></source>
          </Video>
          <DownloadDeleteBox>
            <a href={selectItem.downloadFileUrl} download>
              <ButtonStyle
                backColor="#80A4FF"
                width="17rem"
                height="2.6rem"
                size="1.2rem"
                weight="600"
                color="#fff"
              >
                다운로드
              </ButtonStyle>
            </a>

            <ButtonStyle
              backColor="#fff"
              width="7rem"
              height="2.6rem"
              size="1.1rem"
              weight="400"
              border="0.07rem solid #777"
              color="#333"
              onClick={() => deleteVideoHandler(selectItem.videoId)}
            >
              삭제
            </ButtonStyle>
          </DownloadDeleteBox>
        </ModalBox>
        <ModalBack>modalbackground</ModalBack>
      </>
    );
  },
);

interface VideoModalProps {
  selectItem: {
    videoId: number;
    title: string;
    videoFileUrl: string;
    createDate: string;
    avatarUrl: string;
    backgroundUrl: string;
    downloadFileUrl: string;
  };
  closeModal: () => void;
  isEditVideo: boolean;
  videoTitle: string;
  keyDownVideoHandler: (event: React.KeyboardEvent<HTMLInputElement>, id: number) => void;
  editVideoHandler: () => void;
  changeVideoTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  deleteVideoHandler: (id: number) => void;
}
interface ButtonStyleProps {
  backColor: string;
  width?: string;
  height?: string;
  size?: string;
  weight?: string;
  border?: string;
  color?: string;
}

const ModalBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(50vh - 18rem);
  right: calc(50vw - 12.5rem);
  padding: 1.7rem 1.87rem;
  border-radius: 0.63rem;
  z-index: 99;
`;
const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
const TitleBox = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: #444;
`;
const EditInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  font-weight: 500;
  color: #555;
`;
const InnerTitleBox = styled.div`
  height: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backColor }) => backColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: 0.43rem;
  box-sizing: border-box;
`;
const Video = styled.video`
  width: 25rem;
`;
const DownloadDeleteBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
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

export default VideoDownloadModal;
