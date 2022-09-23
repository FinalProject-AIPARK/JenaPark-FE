import { useState } from 'react';
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