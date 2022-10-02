import React from 'react';
import UserNavbarLayout from '../../../layout/NavigationBar/UserNavbarLayout';
import WorkingNavbarLayout from '../../../layout/NavigationBar/WorkingNavbarLayout';
import { useAppSelector, useAppDispatch } from '../../../store/store';
import { workingComponent } from '../../../store/workingProject/projectControlSlice';

function Navbar() {
  const { isVoiceWoking } = useAppSelector((state) => state.projectControl.elementData);
  const dispatch = useAppDispatch();
  function buttonHandler() {
    dispatch(workingComponent());
  }
  return (
    <>
      <UserNavbarLayout />
      <WorkingNavbarLayout buttonHandler={buttonHandler} iconBg={isVoiceWoking} />
    </>
  );
}

export default Navbar;
