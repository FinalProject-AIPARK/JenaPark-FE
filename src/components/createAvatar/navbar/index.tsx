import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavbarLayout from '../../../layout/NavigationBar/UserNavbarLayout';
import WorkingNavbarLayout from '../../../layout/NavigationBar/WorkingNavbarLayout';
import { useAppDispatch } from '../../../store/store';
import { workingComponent } from '../../../store/workingProject/projectControlSlice';

function Navbar() {
  const dispatch = useAppDispatch();
  const [voiceSection, setVoiceSection] = useState(true);
  const [avatarSection, setAvatarSection] = useState(false);
  function voiceHandler() {
    dispatch(workingComponent());
    setVoiceSection(true);
    setAvatarSection(false);
  }
  function avatarHandler() {
    dispatch(workingComponent());
    setAvatarSection(true);
    setVoiceSection(false);
  }
  return (
    <>
      <UserNavbarLayout />
      <WorkingNavbarLayout
        voiceButton={voiceHandler}
        avatarButton={avatarHandler}
        voiceBg={voiceSection}
        avatarBg={avatarSection}
      />
    </>
  );
}

export default Navbar;
