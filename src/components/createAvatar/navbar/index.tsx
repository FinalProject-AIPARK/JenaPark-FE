import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavbarLayout from '../../../styles/UserNavbarLayout';
import WorkingNavbarLayout from '../../../styles/WorkingNavbarLayout';

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
    <Contain>
      <UserNavbarLayout />
      <WorkingNavbarLayout
        voiceButton={voiceHandler}
        avatarButton={avatarHandler}
        voiceBg={voiceSection}
        avatarBg={avatarSection}
      />
    </Contain>
  );
}

interface navbarProps {
  isVoiceWoking: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contain = styled.div`
  height: calc(100vh - 8.5rem);
`;

export default Navbar;
