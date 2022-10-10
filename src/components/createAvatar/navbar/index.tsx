import { useLogOutMutation, useUserInfoQuery } from '@/api/useApi';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import UserNavbarLayout from '../../../layout/NavigationBar/UserNavbarLayout';
import WorkingNavbarLayout from '../../../layout/NavigationBar/WorkingNavbarLayout';
import { useAppSelector, useAppDispatch } from '../../../store/store';
import { workingComponent } from '../../../store/workingProject/projectControlSlice';
import { Cookies } from 'react-cookie';

function Navbar() {
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

  // 로그아웃 토큰이 삭제가 안되는 이슈 있음
  // const cookies = new Cookies();
  // const accessToken = cookies.get('accessToken');
  // const refreshToken = cookies.get('refreshToken');
  // const [requestLogOut] = useLogOutMutation();
  function logoutHanlder() {
    // cookies.remove('accessToken');
    // cookies.remove('refreshToken');
    // window.location.href = '/';
  }
  return (
    <Container onClick={(event) => dropdownHandler(event)}>
      <UserNavbarLayout
        projectStep={projectStep}
        userInfoData={userInfoData?.data.username!}
        myInfoButton={myInfoButton}
        myInfoBtn={myInfoBtn}
        logoutHanlder={logoutHanlder}
      />
      <WorkingNavbarLayout buttonHandler={buttonHandler} iconBg={elementData.isVoiceWoking} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`;

export default Navbar;
