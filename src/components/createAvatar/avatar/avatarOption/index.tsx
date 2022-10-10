import React, { useEffect, useState, useRef } from 'react';
import AvatarOptionLayout from '../../../../layout/avatar/AvatarOptionLayout';
import { useGetBackgroundAvatarListQuery, usePostBackgroundAvatarListChooseMutation, usePostUploadBackgroundMutation} from '../../../../api/useApi';
import { avatarOptionDataUrl } from '@/store/Avatar/avatarSlice';
import { useAppSelector, useAppDispatch } from '../../../../store/store';

function index() {
  
  const inputRef = useRef()
  const dispatch = useAppDispatch()

  // 배경 업로드
  const [backgroundUploadFile] = usePostUploadBackgroundMutation()
  const [backgroundImgFile, setBackgroundImgFile] = useState<Array<File>>([])

  function backgroundImgUpload(e : any) {
    if (e.target.files[0]) {
      const formData = new FormData()
      formData.append('backgroundImg', e.target.files[0])
      const data = '';
      const projectId = 1;
      const actionBackgroundupload = {
        data,
        formData,
        projectId
    }
      backgroundUploadFile(actionBackgroundupload)
    }
  }

  function backgroundFiles (files: FileList) {
    const file: File = files[0]
    setBackgroundImgFile([file])
  }
  function backgroundImg (event : any) {
    event.preventDefault()
    backgroundFiles(event.dataTransfer.files)
  }

  // 배경 리스트
  const { data : avatarBackgroundList } = useGetBackgroundAvatarListQuery(null)
  useEffect(() => {}, [avatarBackgroundList])

  // 배경 선택버튼
  const [backgroundId, setBackgroundId] = useState(0)
  const [ backgroundChoose, {data : backgroundUrlData} ] = usePostBackgroundAvatarListChooseMutation()
  function backgroundEvent() {
    const data = '';
    const projectId = 1;
    const actionBackground = {
      data,
      projectId,
      backgroundId
    }
    backgroundChoose(actionBackground)
  }

  // 배경 store 전역 관리
  useEffect(() => {
    (backgroundUrlData !== undefined ? dispatch(avatarOptionDataUrl(backgroundUrlData!.data)) : null)
  }, [backgroundEvent])
  console.log(backgroundUrlData)

  // function backgroundChooseHandler() {
  //   backgroundChoose(backgroundId);
  // }

  return (
    <>
      <AvatarOptionLayout
      avatarBackgroundList={avatarBackgroundList}
      setBackgroundId={setBackgroundId}
      backgroundId={backgroundId}
      backgroundEvent={backgroundEvent}
      backgroundImg={backgroundImg}
      backgroundImgUpload={backgroundImgUpload}
      setBackgroundImgFile={setBackgroundImgFile}
      ></AvatarOptionLayout>
    </>
  )
}

export default index