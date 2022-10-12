import React, { useEffect, useState, useRef } from "react";
import AvatarOptionLayout from "../../../../layout/avatar/AvatarOptionLayout";
import {
  useGetBackgroundAvatarListQuery,
  usePostBackgroundAvatarListChooseMutation,
  usePostUploadBackgroundMutation,
} from "../../../../api/useApi";
import { avatarOptionDataUrl } from "@/store/Avatar/avatarSlice";
import { useAppSelector, useAppDispatch } from "../../../../store/store";

function index() {
  const { projectId } = useAppSelector(
    (state) => state.projectControl.projectData
  );
  const dispatch = useAppDispatch();

  // 배경 업로드
  const inputFileRef = useRef();
  const submitRef = useRef<HTMLInputElement>();
  const [backgroundUploadFile] = usePostUploadBackgroundMutation();
  const [backgroundFile, setBackgroundFile] = useState<Array<File>>([]);
  console.log(backgroundFile)

  function backgroundFiles(files: FileList) {
    const file: File = files[0];
    setBackgroundFile([file]);
  }

  useEffect(() => {
    // event.preventDefault();
    let formData = new FormData();
    formData.append("backgroundFile", backgroundFile[0]);
    const actionBackgroundupload = {
      formData,
      projectId,
    };
    backgroundUploadFile(actionBackgroundupload);
    
  }, [backgroundFile])

  function onInputFile(event: React.ChangeEvent<HTMLInputElement>, e: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    backgroundFiles(event.target.files!);
    submitRef.current?.click()
    // test()
  }

  // function test(e: React.FormEvent<HTMLFormElement>) {
  //   backgroundImgUpload(e)
  // }

  // 배경 리스트
  const { data: avatarBackgroundList } = useGetBackgroundAvatarListQuery(null);
  useEffect(() => {}, [avatarBackgroundList]);

  // 배경 선택버튼
  const [backgroundId, setBackgroundId] = useState(0);
  const [backgroundChoose, { data: backgroundUrlData }] =
    usePostBackgroundAvatarListChooseMutation();
  function backgroundEvent() {
    const data = "";
    const actionBackground = {
      data,
      projectId,
      backgroundId,
    };
    backgroundChoose(actionBackground);
  }

  // 배경 store 전역 관리
  useEffect(() => {
    backgroundUrlData !== undefined
      ? dispatch(avatarOptionDataUrl(backgroundUrlData!.data))
      : null;
  }, [backgroundEvent]);

  // 슬라이드 기능
  let [bgSlideIndex, setBgSlideIndex] = useState(0);

  function moveBgSlide(leftRight: string, maxLength: number) {
    if (bgSlideIndex === 0 && leftRight === "left") return;
    else if (bgSlideIndex === maxLength * -1 && leftRight === "right") return;
    else if (leftRight === "right") setBgSlideIndex((bgSlideIndex -= 1));
    else if (leftRight === "left") setBgSlideIndex((bgSlideIndex += 1));
  }

  return (
    <>
      <AvatarOptionLayout
        avatarBackgroundList={avatarBackgroundList}
        setBackgroundId={setBackgroundId}
        backgroundEvent={backgroundEvent}
        setBackgroundFile={setBackgroundFile}
        backgroundFiles={backgroundFiles}
        inputFileRef={inputFileRef}
        submitRef={submitRef}
        onInputFile={onInputFile}
        bgSlideIndex={bgSlideIndex}
        moveBgSlide={moveBgSlide}
      ></AvatarOptionLayout>
    </>
  );
}

export default index;
