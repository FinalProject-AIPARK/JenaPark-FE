import { useState } from 'react';
import AvatarComponent from '../../../../layout/AvatarComponent';
import AvatarChooseStyle from '../../../../layout/AvatarChooseStyle';

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