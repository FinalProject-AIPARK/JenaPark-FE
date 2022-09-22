import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Voice from './voice';

function CreateAvatar() {
  const [isVoiceWoking, setIsVoiceWoking] = useState(true);
  return (
    <Contain>
      <Navbar isVoiceWoking={setIsVoiceWoking} />
      <Voice />
    </Contain>
  );
}

const Contain = styled.div`
  height: calc(100vh - 8.5rem);
  position: relative;
`;

export default CreateAvatar;
