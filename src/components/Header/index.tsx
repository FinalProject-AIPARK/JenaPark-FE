import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LandingHeader from './LendingHeader';
import ProjectHeader from './ProjectHeader';

function Header() {
  const location = useLocation();
  const [state, setState] = useState('');

  useEffect(() => {
    setState(location.pathname);
  }, [location]);

  return <>{state === '/project' ? <ProjectHeader localstate={state} /> : <LandingHeader />}</>;
}
export default Header;
