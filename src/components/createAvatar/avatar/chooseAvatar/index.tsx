import { useState, useEffect } from 'react';
import AvatarChooseLayout from '../../../../layout/avatar/AvatarChooseLayout';
import { useGetAvatarChooseListQuery, useGetAvatarChooseListIdQuery, usePostCreateAvatarMutation } from '../../../../api/useApi';
import { useAppSelector, useAppDispatch } from '../../../../store/store';
import { avatarModelKindSelect, avatarModelKindReset, avatarChooseDataUrl } from '@/store/Avatar/avatarSlice';

function index() {

  const avartarDress = useAppSelector((state) => state.avatar.avatarModel)
  const dispatch = useAppDispatch()

  // 아바타 의상 선택
  function chooseAvatarModelKind(id:number, kind:string) {
    console.log(avartarDress)
    dispatch(avatarModelKindSelect({id, kind}));
  }

  // 아바타 의상 선택 초기화
  function resetAvatarModelKind(id:number) {
    dispatch(avatarModelKindReset(id));
  }

  // 아바타 불러오기
  let [avatarId, setAvartarId] = useState<any> (0);
  const { data: avatarList } = useGetAvatarChooseListQuery(null)

  // 아바타 선택
  const { data: avatarListDress } = useGetAvatarChooseListIdQuery(avatarId)
  useEffect(() => {}, [avatarListDress])

  // 아바타 만들기
  const [createAvatar, {data: avatarUrlData}] = usePostCreateAvatarMutation();
  function createAvatarHandler() {
    createAvatar(avartarDress)
    // dispatch(avatarChooseDataUrl(avatarUrlData!.data))
  }
  useEffect(() => {
      (avatarUrlData !== undefined ? dispatch(avatarChooseDataUrl(avatarUrlData!.data)) : null)
  }, [avatarUrlData])

  return (
    <>
      <AvatarChooseLayout
      avatarList={avatarList}
      setAvatarId={setAvartarId}
      avatarId={avatarId}
      avatarListDress={avatarListDress}
      avatarModelSelect={chooseAvatarModelKind}
      avatarModelReset={resetAvatarModelKind}
      createAvatarHandler={createAvatarHandler}
      />
    </>
  )
}

export default index