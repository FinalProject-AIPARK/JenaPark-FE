import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavbarLayout from '../../../layout/NavigationBar/UserNavbarLayout';
import WorkingNavbarLayout from '../../../layout/NavigationBar/WorkingNavbarLayout';

function Navbar({ isVoiceWoking }: navbarProps) {
  const [voiceSection, setVoiceSection] = useState(true);
  const [avatarSection, setAvatarSection] = useState(false);
  function voiceHandler() {
    isVoiceWoking(true);
    setVoiceSection(true);
    setAvatarSection(false);
  }
  function avatarHandler() {
    isVoiceWoking(false);
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

interface navbarProps {
  isVoiceWoking: React.Dispatch<React.SetStateAction<boolean>>;
}

export default Navbar;
