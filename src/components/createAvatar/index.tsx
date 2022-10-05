import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Voice from './voice';
import Avatar from './avatar/index';
import Header from '../Header';
import { useAppSelector, useAppDispatch } from '../../store/store';
import Contents from './contents';

function CreateAvatar() {
  const { isVoiceWoking } = useAppSelector((state) => state.projectControl.elementData);
  return (
    <>
      <Header />
      <Contain>
        <Navbar />
        <Contents />
        {isVoiceWoking ? <Voice /> : <Avatar />}
      </Contain>
    </>
  );
}

const Contain = styled.div`
  height: calc(100vh - 8.5rem);
  position: relative;
`;

export default CreateAvatar;
