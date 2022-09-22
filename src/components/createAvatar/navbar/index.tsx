import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavbarLayout from '../../../styles/UserNavbarLayout';
import WorkingNavbarLayout from '../../../styles/WorkingNavbarLayout';

function Navbar() {
  const [voiceSection, setVoiceSection] = useState(false);
  const [avatarSection, setAvatarSection] = useState(false);
  function voiceHandler() {
    setVoiceSection(!voiceSection);
    setAvatarSection(false);
  }
  function avatarHandler() {
    setAvatarSection(!avatarSection);
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

const Contain = styled.div`
  height: calc(100vh - 8.5rem);
`;

export default Navbar;
