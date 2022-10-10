import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RendingHeader from './RendingHeader';
import ProjectHeader from './ProjectHeader';

function Header() {
  const location = useLocation();
  const [state, setState] = useState('');

  useEffect(() => {
    console.log(location);
    setState(location.pathname);
    console.log(state);
    console.log(state);
  }, [location]);

  return (
    <>
      {state === '/project' ? (
        <ProjectHeader localstate={state} />
      ) : (
        <ProjectHeader localstate={state} />
      )}
    </>
  );
}
export default Header;
