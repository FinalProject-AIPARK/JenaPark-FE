import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Voice from './voice';
import Avatar from './avatar/index';

function CreateAvatar() {
  const [isVoiceWoking, setIsVoiceWoking] = useState(true);
  return (
    <>
      <Avatar />
    </>
    // <Contain>
    //   <Navbar isVoiceWoking={setIsVoiceWoking} />
    //   {isVoiceWoking ? <Voice /> : null}
    // </Contain>
  );
}

// const Contain = styled.div`
//   height: calc(100vh - 8.5rem);
//   position: relative;
// `;

export default CreateAvatar;
