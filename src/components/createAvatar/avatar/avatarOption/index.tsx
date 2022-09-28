import React from 'react';
import AvatarOptionLayout from '../../../../layout/AvatarOptionLayout';
import { useState,useRef } from 'react';

function index() {
  const photoInput :any = useRef(null);

  const handleClick =() => {
    photoInput.current.click()
  }

  return (
    <>
      <AvatarOptionLayout/>
    </>
  )
}

export default index