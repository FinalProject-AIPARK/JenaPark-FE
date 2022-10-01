import { useState } from 'react';
import AvatarComponent from '../../../../styles/AvatarComponent';
import AvatarChooseStyle from '../../../../styles/AvatarChooseStyle';

function index() {

  const [toggle, setToggle] = useState(true);

  function toggleButton() {
    setToggle(!toggle);
  }

  return (
    <>
      <AvatarChooseStyle></AvatarChooseStyle>
    </>
  )
}

export default index