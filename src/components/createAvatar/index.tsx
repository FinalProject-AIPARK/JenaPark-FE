<<<<<<< HEAD
import React, { useState } from 'react';
import Navbar from './navbar';

function CreateAvatar() {
  const [isVoiceWoking, setIsVoiceWoking] = useState(true);
  return (
    <div>
      <Navbar isVoiceWoking={setIsVoiceWoking} />
    </div>
  );
=======
import React from 'react'

function index() {
  return (
    <div>index</div>
  )
>>>>>>> develop
}

export default index