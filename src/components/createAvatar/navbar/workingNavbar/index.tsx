import React, { useState } from 'react';
import Voice from '../../voice';
// import Avatar from '../../avatar';
import WorkingNavbarLayout from '../../../../styles/WorkingNavbarLayout';
import styled from 'styled-components';

function WorkingNavbar() {
  const [voiceSection, setVoiceSection] = useState(true);
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
    <Container>
      {/* 컴포넌트가 나타나는 모션이 있다면 애니매이션 상태 값을 프롭으로 전달 */}
      {voiceSection ? <Voice /> : null}
      {/* {avatarSection ? <Avatar /> : null} */}
      <WorkingNavbarLayout
        voiceButton={voiceHandler}
        avatarButton={avatarHandler}
        voiceBg={voiceSection}
        avatarBg={avatarSection}
      />
      ;
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 8.5rem);
  position: relative;
`;
export default WorkingNavbar;
