import { memo } from 'react';
import styled from 'styled-components';
import AvatarChoose from './chooseAvatar/index';
import AvatarOption from './avatarOption/index';
import AvatarSliceButton from '@/layout/avatar/AvatarSliceButton';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { avatarChooseWorking, avatarOptionWorking } from '@/store/avatar/avatarSlice';

const Avatar = memo(() => {
  const { isAvatarChoose, isAvatarOption } = useAppSelector((state) => state.avatar.elementData);
  const dispatch = useAppDispatch();
  function avatarChoose() {
    dispatch(avatarChooseWorking());
  }
  function avatarOption() {
    dispatch(avatarOptionWorking());
  }

  return (
    <Main>
      <AvatarSliceButton
        ChooseButton={avatarChoose}
        OptionButton={avatarOption}
        chooseOn={isAvatarChoose}
        optionOn={isAvatarOption}
      />
      {isAvatarChoose ? <AvatarChoose /> : <AvatarOption />}
    </Main>
  );
});

const Main = styled.main`
  height: calc(100vh - 8.5rem);
  position: absolute;
  right: 5rem;
  background-color: rgba(0, 19, 52, 0.8);
`;

export default Avatar;
