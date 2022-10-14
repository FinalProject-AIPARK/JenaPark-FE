
import { useState, useEffect } from "react";
import AvatarChooseLayout from "../../../../layout/avatar/AvatarChooseLayout";
import {
  useGetAvatarChooseListQuery,
  useGetAvatarChooseListIdQuery,
  usePostCreateAvatarMutation,
} from "../../../../api/useApi";
import { useAppSelector, useAppDispatch } from "../../../../store/store";
import {
  avatarModelKindSelect,
  avatarModelKindReset,
  avatarChooseDataUrl,
  avatarProjectId
} from "@/store/Avatar/avatarSlice";

function index() {
  const avartarDress = useAppSelector((state) => state.avatar.avatarModel);
  const { projectId } = useAppSelector(
    (state) => state.projectControl.projectData
  );
  const dispatch = useAppDispatch();

  // 아바타 의상 선택
  function chooseAvatarModelKind(id: number, kind: string) {
    dispatch(avatarModelKindSelect({ id, kind }));
  }

  // 아바타 의상 선택 초기화
  function resetAvatarModelKind(id: number) {
    dispatch(avatarModelKindReset(id));
  }

  // 아바타 불러오기
  let [avatarId, setAvartarId] = useState<any>(0);
  const { data: avatarList } = useGetAvatarChooseListQuery(null);

  // 아바타 선택
  const { data: avatarListDress } = useGetAvatarChooseListIdQuery(avatarId);
  useEffect(() => {}, [avatarListDress]);

  // 아바타 만들기
  const [createAvatar, { data: avatarUrlData }] = usePostCreateAvatarMutation();
  function createAvatarHandler() {
    createAvatar(avartarDress)
    
    // dispatch(avatarChooseDataUrl(avatarUrlData!.data))
  }
  useEffect(() => {
      (avatarUrlData !== undefined ? dispatch(avatarChooseDataUrl(avatarUrlData!.data)) : null)
  }, [avatarUrlData])
  dispatch(avatarProjectId(projectId))

  // 슬라이드 기능
  let [avatarSlideIndex, setAvatarSlideIndex] = useState<any>({
    avatar: 0,
    acc: 0,
    attitude: 0,
    clothes: 0,
  });

  function moveAvatarSlide(leftRight: string, maxLength: number, kind: string) {
    if (avatarSlideIndex[kind] === 0 && leftRight === "left") return;
    else if (avatarSlideIndex[kind] === maxLength * -1 && leftRight === "right")
      return;
    else if (leftRight === "right") {
      const copy : any = { ...avatarSlideIndex };
      copy[kind] -= 1;
      setAvatarSlideIndex(copy);
    } else if (leftRight === "left") {
      const copy : any = { ...avatarSlideIndex };
      copy[kind] += 1;
      setAvatarSlideIndex(copy);
    }
  }

  useEffect(() => {
    avatarUrlData !== undefined
      ? dispatch(avatarChooseDataUrl(avatarUrlData!.data))
      : null;
  }, [avatarUrlData]);
  dispatch(avatarProjectId(projectId));

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
        avatarSlideIndex={avatarSlideIndex}
        moveAvatarSlide={moveAvatarSlide}
      />
    </>
  );
}

export default index;
