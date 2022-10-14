import { useUserInfoQuery } from '@/api/useApi';
import UserNavbarLayout from '@/layout/NavigationBar/UserNavbarLayout';
import WorkingNavbarLayout from '@/layout/NavigationBar/WorkingNavbarLayout';
import React, { memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../../store/store';
import { workingComponent } from '../../../store/workingProject/projectControlSlice';

const Navbar = memo(() => {
  const { elementData, projectData } = useAppSelector((state) => state.projectControl);

  // 작업 단계 데이터
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
  }, [projectData]);

  // 음성, 아바타 작업 이동
  const dispatch = useAppDispatch();
  function buttonHandler() {
    dispatch(workingComponent());
  }

  // 사용자 정보 관련
  const { data: userInfoData } = useUserInfoQuery(null);
  const [myInfoButton, setMyInfoButton] = useState(false);
  const myInfoBtn = useRef(null);
  function dropdownHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target !== myInfoBtn.current && myInfoButton) {
      setMyInfoButton(false);
    } else if (event.target === myInfoBtn.current) {
      setMyInfoButton(!myInfoButton);
    }
  }

  return (
    <Container onClick={(event) => dropdownHandler(event)}>
      <UserNavbarLayout
        projectStep={projectStep}
        userInfoData={userInfoData?.data.username!}
        myInfoButton={myInfoButton}
        myInfoBtn={myInfoBtn}
      />
      <WorkingNavbarLayout buttonHandler={buttonHandler} iconBg={elementData.isVoiceWoking} />
    </Container>
  );
});

const Container = styled.div`
  height: 100%;
`;

export default Navbar;
