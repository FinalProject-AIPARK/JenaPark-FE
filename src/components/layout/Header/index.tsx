import React, { useEffect, useState } from 'react';
import * as S from '../../../styles/HeaderStyle';
import { useLocation } from 'react-router-dom';
import RendingHeader from './RendingHeader';
import ProjectVoiceHeader from './ProjectHeader/ProjectVoiceHeader';
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
      {state === '/Signin' ? (
        <ProjectVoiceHeader />
      ) : (
        <ProjectHeader localstate={state} />
      )}
    </>
  );
}

export default Header;
