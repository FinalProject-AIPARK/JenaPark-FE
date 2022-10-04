import React, { DragEvent, ChangeEvent, memo } from 'react';
import styled from 'styled-components';
import uploadIcon from '/upload-icon.png';

const VoiceUploadModal = memo(
  ({
    submitHandler,
    onDropFiles,
    dragOver,
    onInputFile,
    audioFile,
    setAudioFile,
  }: VoiceUploadModalProps) => {
    return (
      <form name="audio" encType="multipart/form-data" onSubmit={(event) => submitHandler(event)}>
        <div>
          <ModalBox>
            <TextStyle size="1.13rem" weight="700" marginBottom="1.06rem">
              음성파일을 업로드해주세요.
            </TextStyle>

            <TextStyle size="1rem" weight="400" marginBottom="1.06rem">
              파일을 업로드하면 텍스트수정 및 음성적용은 불가합니다.
              <br />
              업로드 후 버추얼 아바타를 선택 적용하여 저장 및 합성이 가능합니다.
            </TextStyle>
            {audioFile.length === 0 ? (
              <div onDrop={onDropFiles} onDragOver={dragOver}>
                <LabelStyle htmlFor="inputFile">
                  <img
                    src={uploadIcon}
                    alt="음성업로드아이콘"
                    style={{ marginBottom: '2.06rem' }}
                  />
                  <span>이곳을 클릭하거나 파일을 드래그하여 업로드해주세요.</span>
                </LabelStyle>

                <input
                  type="file"
                  name="audio"
                  id="inputFile"
                  accept=".wav"
                  style={{ display: 'none' }}
                  onChange={onInputFile}
                />
              </div>
            ) : (
              <UploadedBox>
                <UploadFileBox>
                  <UploadNameBox className="div_preview">
                    <div>{audioFile[0].name}</div>
                  </UploadNameBox>
                  <button
                    onClick={() => {
                      setAudioFile([]);
                    }}
                    style={{ marginLeft: '9rem' }}
                  >
                    삭제
                  </button>
                </UploadFileBox>
              </UploadedBox>
            )}
            <SubmitInput type="submit" value="확인" />
          </ModalBox>
          <ModalBack>modalbackground</ModalBack>
        </div>
      </form>
    );
  },
);

interface VoiceUploadModalProps {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  onModal: boolean;
  onDropFiles: (event: DragEvent<HTMLDivElement>) => void;
  dragOver: (e: DragEvent<HTMLDivElement>) => void;
  onInputFile: (event: ChangeEvent<HTMLInputElement>) => void;
  audioFile: Array<File>;
  setAudioFile: React.Dispatch<React.SetStateAction<File[]>>;
}
interface TextStyleProps {
  display?: string;
  marginBottom?: string;
  size: string;
  weight: string;
  color?: string;
}
interface ButtonStyleProps {
  backColor: string;
  width: string;
  height: string;
  weight: string;
  marginL?: string;
  color: string;
}

const TextStyle = styled.span<TextStyleProps>`
  display: inline-block;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  line-height: 1.5rem;
  color: ${({ color }) => (color ? color : '#000')};
  text-align: center;
`;

const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${({ backColor }) => backColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-left: ${({ marginL }) => (marginL ? marginL : '0')};
  font-size: 1rem;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  text-aligh: center;
  border-radius: 0.31rem;
`;
const ModalBox = styled.div`
  background-color: #fff;
  width: 33.76rem;
  height: 27.13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(50vh - 20.62rem);
  right: calc(50vw - 23.25rem);
  padding: 2.06rem 1.87rem;
  border-radius: 0.63rem;
  z-index: 99;
`;
const ModalBack = styled.div`
  background-color: #000;
  width: calc(100vw - 10rem);
  height: calc(100vh - 8.5rem);
  position: absolute;
  top: 0;
  right: 0;
  opacity: 40%;
  z-index: 2;
`;
const LabelStyle = styled.label`
  background-color: #0d1a4c;
  width: 33.75rem;
  height: 17.56rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.06rem;
  color: #fff;
  border-radius: 0.63rem;
  cursor: pointer;
`;
const UploadedBox = styled.div`
  background-color: #0d1a4c;
  width: 33.75rem;
  height: 17.56rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.06rem;
  color: #fff;
  border-radius: 0.63rem;
`;
const UploadFileBox = styled.div`
  width: 27rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #fff;
`;
const UploadNameBox = styled.div`
  width: 10rem;
  height: 5rem;
  display: flex;
  align-items: center;
  overflow: scroll;
`;
const SubmitInput = styled.input`
  background-color: #001334;
  width: 6.25rem;
  height: 1.88rem;
  weight: 400;
  font-size: 1rem;
  color: #fff;
  border-radius: 0.31rem;
  cursor: pointer;
`;

export default VoiceUploadModal;
