import React, { useState } from 'react';
import styled from 'styled-components';
import UserNavbarLayout from '../../../layout/NavigationBar/UserNavbarLayout';
import WorkingNavbarLayout from '../../../layout/NavigationBar/WorkingNavbarLayout';

function Navbar() {
  const [voiceSection, setVoiceSection] = useState(true);
  const [avatarSection, setAvatarSection] = useState(false);
  function voiceHandler() {
    setVoiceSection(true);
    setAvatarSection(false);
  }
  function avatarHandler() {
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
