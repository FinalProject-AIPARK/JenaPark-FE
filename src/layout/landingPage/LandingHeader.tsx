import { useCreateProjectMutation, useLogOutMutation } from '@/api/useApi';
import { removeToken } from '@/store/Auth';
import { memo, useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/images/Logo.png';

const LandingHeader = memo(() => {
  const cookies = new Cookies();
  const [requestLogOut] = useLogOutMutation();
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');
  const logOutClick = () => {
    requestLogOut({ accessToken, refreshToken });
    removeToken();
  };

  const [create, { data: responseCreate }] = useCreateProjectMutation();
  function createProjectHandler() {
    if (!accessToken) {
      window.location.href = '/signin';
    } else {
      create('');
    }
  }
  useEffect(() => {
    if (responseCreate?.data.projectId) {
      window.location.href = `/project/${responseCreate.data.projectId}`;
    }
  }, [responseCreate]);

  return (
    <LandingHeaderContainer>
      <Link to="/">
        <LogoImage />
      </Link>
      <ButtonContainer>
        <div onClick={createProjectHandler}>
          <CProjectButton>프로젝트 생성</CProjectButton>
        </div>

        {accessToken && refreshToken ? (
          <Link to="/">
            <SignButton onClick={logOutClick}>로그아웃</SignButton>
          </Link>
        ) : (
          <Link to="/signin">
            <SignButton>로그인</SignButton>
          </Link>
        )}
      </ButtonContainer>
    </LandingHeaderContainer>
  );
});

const LandingHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  height: 5vh;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const LogoImage = styled.img.attrs({
  src: `${logo}`,
})`
  width: 6.25rem;
  height: 2.5rem;
`;
const CProjectButton = styled.button`
  width: 7.75rem;
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #80a4ff;
  color: #000;
  border: 0;
  outline: 0;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-right: 1.06rem;
`;
const SignButton = styled.button`
  width: 7.75rem;
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #fff;
  color: #000;
  border: 0;
  outline: 0;
  border-radius: 0.3125rem;
  cursor: pointer;
`;

export default LandingHeader;
