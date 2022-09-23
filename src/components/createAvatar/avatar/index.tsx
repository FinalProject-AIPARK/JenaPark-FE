import React, {useState} from 'react';
import ChooseAvatar from './chooseAvatar/index';
import AvatarOption from './avatarOption/index';
import AvatarComponent from '../../../styles/AvatarComponent';

function index() {

  const [toggle, setToggle] = useState(true);

  function toggleButton() {
    setToggle(!toggle);
  }

  return (
    <>
      <AvatarComponent 
        toggle={toggle}
        setToggle={toggleButton}
      />
    </>
  )
}

export default index