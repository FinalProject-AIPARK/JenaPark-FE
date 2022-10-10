import React, { useEffect, useState } from 'react';
import UserNavbarLayout from '../../../layout/NavigationBar/UserNavbarLayout';
import WorkingNavbarLayout from '../../../layout/NavigationBar/WorkingNavbarLayout';
import { useAppSelector, useAppDispatch } from '../../../store/store';
import { workingComponent } from '../../../store/workingProject/projectControlSlice';

function Navbar() {
  const { elementData, projectData } = useAppSelector((state) => state.projectControl);
  const [projectStep, setProjectStep] = useState({
    checkText: false,
    checkAudio: false,
    checkAvatar: false,
  });
  useEffect(() => {
    if (projectData.checkText)
      setProjectStep({
        checkText: projectData.checkText,
        checkAudio: projectData.checkAudio,
        checkAvatar: projectData.checkAvatar,
      });
  }, []);
  const dispatch = useAppDispatch();
  function buttonHandler() {
    dispatch(workingComponent());
  }
  return (
    <>
      <UserNavbarLayout projectStep={projectStep} />
      <WorkingNavbarLayout buttonHandler={buttonHandler} iconBg={elementData.isVoiceWoking} />
    </>
  );
}

export default Navbar;
