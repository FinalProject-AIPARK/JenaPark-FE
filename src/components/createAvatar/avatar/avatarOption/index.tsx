import React, { useEffect, useState, useRef } from 'react';
import AvatarOptionLayout from '../../../../layout/avatar/AvatarOptionLayout';
import { useGetBackgroundAvatarListQuery, usePostBackgroundAvatarListChooseMutation, usePostUploadBackgroundMutation} from '../../../../api/useApi';
import { avatarOptionDataUrl } from '@/store/Avatar/avatarSlice';
import { useAppSelector, useAppDispatch } from '../../../../store/store';

function index() {

  const { projectId } = useAppSelector((state) => state.projectControl.projectData)
  const dispatch = useAppDispatch()
  
  // 배경 업로드
  const inputFileRef = useRef()
  const [backgroundUploadFile] = usePostUploadBackgroundMutation()
  const [backgroundFile, setackgroundFile] = useState<Array<File>>([])

  function backgroundFiles (files: FileList) {
    const file: File = files[0]
    setackgroundFile([file])
  }

  function backgroundImgUpload(event : any) {
      event.preventDefault()
      let formData = new FormData()
      formData.append('backgroundFile', backgroundFile[0])
      const actionBackgroundupload = {
        formData,
        projectId
      }
      backgroundUploadFile(actionBackgroundupload)
  }
  
  function onInputFile(event : React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    backgroundFiles(event.target.files!)
  }

  // 배경 리스트
  const { data : avatarBackgroundList } = useGetBackgroundAvatarListQuery(null)
  useEffect(() => {}, [avatarBackgroundList])
  console.log(avatarBackgroundList)

  // 배경 선택버튼
  const [backgroundId, setBackgroundId] = useState(0)
  const [ backgroundChoose, {data : backgroundUrlData} ] = usePostBackgroundAvatarListChooseMutation()
  function backgroundEvent() {
    const data = '';
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

  return (
    <>
      <AvatarOptionLayout
      avatarBackgroundList={avatarBackgroundList}
      setBackgroundId={setBackgroundId}
      backgroundEvent={backgroundEvent}
      backgroundImgUpload={backgroundImgUpload}
      setackgroundFile={setackgroundFile}
      backgroundFiles={backgroundFiles}
      inputFileRef={inputFileRef}
      onInputFile={onInputFile}
      ></AvatarOptionLayout>
    </>
  )
}

export default index