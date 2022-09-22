import React, { useState } from 'react';
import Navbar from './navbar';

function CreateAvatar() {
  const [isVoiceWoking, setIsVoiceWoking] = useState(true);
  return (
    <div>
      <Navbar isVoiceWoking={setIsVoiceWoking} />
    </div>
  );
}

export default CreateAvatar;
