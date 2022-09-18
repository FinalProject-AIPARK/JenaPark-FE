import React, { useState } from 'react';
// import Voice from '../../voice';
// import Avatar from '../../avatar';
import WorkingNavbarLayout from '../../../../styles/WorkingNavbarLayout';

function ProjectSetting() {
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
    <>
      {/* 컴포넌트가 나타나는 모션이 있다면 애니매이션 상태 값을 프롭으로 전달 */}
      {/* {voiceSection ? <Voice /> : null}
      {avatarSection ? <Avatar /> : null} */}
      <WorkingNavbarLayout
        voiceButton={voiceHandler}
        avatarButton={avatarHandler}
        voiceBg={voiceSection}
        avatarBg={avatarSection}
      />
      ;
    </>
  );
}

export default ProjectSetting;
