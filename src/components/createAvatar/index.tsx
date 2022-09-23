import React from 'react';
import styled from 'styled-components';
import ChooseAvatar from './avatar/chooseAvatar';
import Avatar from './avatar/index'

function index() {
  return (
    <>
      <Avatar />
    </>
  )
}


const Contents = styled.div `
  height: calc(100vh - 8.5rem);
  position: relative;

`
export default index